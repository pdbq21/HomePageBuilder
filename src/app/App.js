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
    const {onClickNavigation, activeTabContent} = props;
    console.log(activeTabContent);
    return (
        <div className="pb-toolbar">
            {/* Nav tabs */}
            <ToolBarNav onClickNavigation={onClickNavigation}/>

            {/* Tab panes */}
            <ToolBarTabContent activeTabContent={activeTabContent} />
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
            activeNavigation: 'Content'// - default Content/Structure/Templates/Body
        };
        this.dragAndDrop = this.dragAndDrop.bind(this);
        this.onClickNavigation = this.onClickNavigation.bind(this);

    }


    dragAndDrop(element) {

//empty
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

                <PreviewBlock />

                <ToolBarBlock
                    onClickNavigation={this.onClickNavigation}
                    activeTabContent={this.state.activeNavigation}
                />

            </div>
        );
    }
}

// List const name (Image/Text/button...)
