/**
 * Created by ruslan on 19.01.17.
 */
// import lib
import React from 'react'

// import styles
import './styles.css'

// import Components
import PreviewBlock from './components/PreviewBlock'
import ToolBarNav from './components/ToolBarNav'
import ToolBarTabContent from './components/ToolBarTabContent'

/* Tool Bar Block*/
function ToolBarBlock(props) {
    const {onClickNavigation, activeTabContent, onDragStart, onDragEnd} = props;
    return (
        <div className="pb-toolbar col-md-4">
            {/* Nav tabs */}
            <ToolBarNav onClickNavigation={onClickNavigation}/>

            {/* Tab panes */}
            <ToolBarTabContent
                activeTabContent={activeTabContent}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />
        </div>
    );
}

/* Tab Content Tool Bar*/



/* Root App Component */
export default class PageBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeNavigation: 'Content',// - default Content/Structure/Templates/Body
            activeDrop: false
        };

        this.onClickNavigation = this.onClickNavigation.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        // preview
        this.handleDrop = this.handleDrop.bind(this);
        this.handelDragEnter = this.handelDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);

        this.createNewContentBlock = this.createNewContentBlock.bind(this);
    }


    createNewContentBlock() {
        let div = document.createElement('div');
        div.className = "content-block";
        document.getElementById('drop_zone').insertBefore(div, document.getElementById('drop_zone').firstChild);
    }

    // add function start drag
    onDragStart(event) {
        console.log('start');
        document.querySelector('.new-content-block').classList.add('drop-zone-active');
        event.dataTransfer.dropEffect = "move";
        //event.dataTransfer.setData("text", event.target.getAttribute('id') );
    }

    onDragEnd() {

        document.querySelector('.new-content-block').classList.remove('drop-zone-active');
        //document.getElementById('drop_zone');
        if (this.state.activeDrop === true) {
            this.createNewContentBlock();
            console.log(25);
            this.setState({
                activeDrop: false
            });
        }
    }

    handelDragEnter(event) {
        event.preventDefault();
        this.setState({
            activeDrop: true
        });
    }

    handleDrop(event) {
        // Stop default browser behavior
        event.preventDefault();
    }

    handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        event.preventDefault();
        console.log('leave');
        this.setState({
            activeDrop: false
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
        return (
            <div id="app-page-builder">

                <PreviewBlock
                    handelDragEnter={this.handelDragEnter}
                    handleDrop={this.handleDrop}
                    handleDragOver={this.handleDragOver}
                    handleDragLeave={this.handleDragLeave}
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
