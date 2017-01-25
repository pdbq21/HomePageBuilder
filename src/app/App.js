/**
 * Created by ruslan on 19.01.17.
 */
// import lib
import React from 'react'

// import styles
import './styles.css'
import './flexbox.css'

// import Components
import PreviewBlock from './components/Preview/PreviewBlock'
import ToolBarBlock from './components/ToolBar/ToolBarBlock'
import PreviewElementRow from './components/Preview/PreviewElementRow'


/* Root App Component */
export default class PageBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                rows: []
            },
            activeNavigation: 'Structure',// - default Structure/Content/Templates/Body
            /*

             data: {
             rows: [
             {
             row: 'name'
             cols: [
             {
             indexCol: '8',
             content: [
             {
             contentType: 'Image',
             ...

             },
             {
             contentType: 'Text'
             }
             ]
             },
             {
             indexCol: '4'
             }
             ]
             }
             ]
             }

             */
        };
// Toolbar
        this.onClickNavigation = this.onClickNavigation.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        // preview
        this.handleDrop = this.handleDrop.bind(this);
        this.handelDragEnter = this.handelDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);

        this.createNewContentBlock = this.createNewContentBlock.bind(this);
        this.createNewRowBlock = this.createNewRowBlock.bind(this);
    }

    // Todo: Need to combine this function createNewContentBlock + createNewRowBlock => createNewContentBlock
    createNewContentBlock(id, indexCol, indexRow) {

// contentType = Text / Image / Button / Divider / Social
        const newContentData = {
            contentType: id.split('-').splice(1).join()
        };

        let stateCopy = Object.assign({}, this.state);
        if (stateCopy.data.rows[indexRow].cols[indexCol].content.length) {
            stateCopy.data.rows[indexRow].cols[indexCol].content.concat(newContentData);
        } else {
            stateCopy.data.rows[indexRow].cols[indexCol].content.push(newContentData);
        }
        this.setState(stateCopy);
    }

    createNewRowBlock(id) {

        // Перетворення строки в масив з видаленням нульового елементу
        // 'elementStructure-4-4-4' => ["4", "4", "4"]
        const cols = id.split('-').splice(1);
        let newColData = [];
        cols.map(function (key) {
            newColData.push({indexCol: key, content: []})
        });

        const newRowData = {
            row: id,
            cols: newColData
        };

        this.setState((prevState) => ({
            data: {
                rows: prevState.data.rows.concat(newRowData)
            },
        }));
    }

    // add function start drag
    onDragStart(event) {

        // first word in id element 'elementStructure' / 'elementContent'
        if (event.target.getAttribute('id').split('-')[0] === 'elementContent') {
            // add all element .content-block-item class drop-zone-active
            document.querySelectorAll('.content-block-item').forEach(function (element) {
                element.classList.add('drop-zone-active-content');
            });
            //
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.setData("text", event.target.getAttribute('id'));
        }
        else if (event.target.getAttribute('id').split('-')[0] === 'elementStructure') {
            document.getElementById('drop_zone').classList.add('drop-zone-active-structure');
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.setData("text", event.target.getAttribute('id'));
        } else {
            console.error('Error: Other dragstart element');
        }
    }

    onDragEnd(event) {
        if (event.target.getAttribute('id').split('-')[0] === 'elementContent') {
            document.querySelectorAll('.content-block-item').forEach(function (element) {
                element.classList.remove('drop-zone-active-content');
            });
        }
        else if (event.target.getAttribute('id').split('-')[0] === 'elementStructure') {
            document.getElementById('drop_zone').classList.remove('drop-zone-active-structure');
        } else {
            console.error('Error: Other dragend element');
        }
    }

    handelDragEnter(event) {
        event.preventDefault();
        // Todo: add a function that shows element "add new content" when you hover
// checks whether a given class 'drop-zone-active-content'
        /*if (event.target.classList.contains('drop-zone-active-content')) {
            event.target.classList.add('add-new-content');
        }*/
    }

    handleDrop(event) {
        // Stop default browser behavior
        event.preventDefault();
        // class name element drop 'new-structure-block' / 'new-content-element'
        if (event.target.classList[0] === 'new-content-element' &&
            event.dataTransfer.getData("text").split('-')[0] === 'elementContent') {
            // remove class for hover element
            //event.target.classList.remove('add-new-content');
            // (contentType, indexCol, indexRow)
            this.createNewContentBlock(
                event.dataTransfer.getData("text"),
                event.target.parentNode.getAttribute('data-index'),
                event.target.parentNode.parentNode.getAttribute('data-index')
            );

        } else if (event.target.classList[0] === 'new-structure-block' &&
            event.dataTransfer.getData("text").split('-')[0] === 'elementStructure') {
            this.createNewRowBlock(event.dataTransfer.getData("text"));
        } else {
            console.error('Error: Other drop element');
        }
    }

    handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        event.preventDefault();

       /* if (event.target.classList.contains('add-new-content')) {
            event.target.classList.remove('add-new-content');

        }*/
    }

    onClickNavigation(element) {
        if (element.target.parentNode.className !== 'navigation active') {
            document.querySelectorAll(".navigation.active")[0].className = 'navigation';
            element.target.parentNode.className = 'navigation active';

            this.setState({
                activeNavigation: element.target.text
            });
        }
    }

    render() {
        const self = this;
        let testComponent = this.state.data.rows.map(function (key, index) {

            return (
                <PreviewElementRow
                    key={`${key.row}-${index}`}
                    name={key.row}
                    cols={key.cols}
                    index={index}

                    handelDragEnter={self.handelDragEnter}
                    handleDrop={self.handleDrop}
                    handleDragOver={self.handleDragOver}
                    handleDragLeave={self.handleDragLeave}
                />
            );
        });

        return (
            <div id="app-page-builder">

                <PreviewBlock
                    handelDragEnter={this.handelDragEnter}
                    handleDrop={this.handleDrop}
                    handleDragOver={this.handleDragOver}
                    handleDragLeave={this.handleDragLeave}

                    testComponent={testComponent}
                />

                <ToolBarBlock
                    onClickNavigation={this.onClickNavigation}
                    activeTabContent={this.state.activeNavigation}

                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                />

            </div>
        );
    }
}

// List const name (Image/Text/button...)
/*
 Todo: ? use Redux ?
 Todo: hidden in ToolBarNav tab 'Body'. This tab show if hover PreviewElementRow
 Todo: add button 'move' and 'delete' for PreviewElementRow


 */