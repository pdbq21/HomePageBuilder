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
            activeToolBarBody: false
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

        this.handelEntireRow = this.handelEntireRow.bind(this);
        this.handleToolBarBodyClose = this.handleToolBarBodyClose.bind(this);
    }

    // Todo: Need to combine this function createNewContentBlock + createNewRowBlock => createNewBlock
    createNewContentBlock(id, indexCol, indexRow) {
//console.log(id, indexCol, indexRow);
// contentType = Text / Image / Button / Divider / Social
        const newContentData = {
            contentType: id.split('-').splice(1).join()
        };

        let stateCopy = Object.assign({}, this.state);
        stateCopy.data.rows[indexRow].cols[indexCol].content.push(newContentData);
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
    }

    handleDrop(event) {
        // Stop default browser behavior
        event.preventDefault();
        //console.log(event.target, event.dataTransfer.getData("text").split('-')[0]);
        // class name element drop 'new-structure-block' / 'new-content-element'
        if (event.target.classList[0] === 'new-content-element' &&
            event.dataTransfer.getData("text").split('-')[0] === 'elementContent') {
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
    }

    handelEntireRow(event){
        console.log('click entire');

        this.setState({
            activeToolBarBody: true
        });
    }

    handleToolBarBodyClose(){
        this.setState({
            activeToolBarBody: false
        });
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

                    handelEntireRow={self.handelEntireRow}
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

                    activeToolBarBody={this.state.activeToolBarBody}
                    handleToolBarBodyClose={this.handleToolBarBodyClose}
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

Todo: add flexbox style

 */