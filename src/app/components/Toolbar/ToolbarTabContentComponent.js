/**
 * Created by ruslan on 01.02.17.
 */
import React, {Component} from 'react'


function StructurePanel() {
    return (
        <ul className="mdl-list pb-list--panel pb-list--no-spacing">
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--12-col">12</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
        </ul>
    );
}
function ContentPanel() {
    return (
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand" draggable='true'>
                        <h2 className="mdl-card__title-text">Text</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">title</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand" draggable='true'>
                        <h2 className="mdl-card__title-text">Image</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">image</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand" draggable='true'>
                        <h2 className="mdl-card__title-text">Button</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">add_circle</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand" draggable='true'>
                        <h2 className="mdl-card__title-text">Divider</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">settings_ethernet</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand" draggable='true'>
                        <h2 className="mdl-card__title-text">Title</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">font_download</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
function TemplatesPanel() {
    return (
        <ul>
            <li>Viserys</li>
            <li>Daenerys</li>
        </ul>
    );
}
function EditPanel() {
    return (
        <span className="mdl-chip mdl-chip--contact">
                    <span className="mdl-chip__contact mdl-color--red mdl-color-text--white">!</span>
                    <span className="mdl-chip__text">
                        <strong>Note: </strong>
                        Select component to be able to edit it's properties.
                    </span>
                </span>
    );
}


export default class ToolbarTabContentComponent extends Component {
    constructor(props) {
        super(props);

        this.handelDragStart = this.handelDragStart.bind(this);
        this.handelDragEnd = this.handelDragEnd.bind(this);
        this.activeTabPanel = this.activeTabPanel.bind(this);
    }

    handelDragStart(event) {
        //console.log('drag start props', this.props);
        this.props.onDragStart(event.target);
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text", event.target.getAttribute('id'));
    }

    handelDragEnd(event) {
        //console.log('drag end');
        this.props.onDragEnd(event.target);
    }

    activeTabPanel(){
        const {activeTab} = this.props;
        switch (activeTab) {
            case 'Rows':
                return <StructurePanel />;
            case 'Elements':
                return <ContentPanel />;
            case 'Templates':
                return <TemplatesPanel />;
            case 'Edit':
                return <EditPanel />;
            default:
                console.error('Error: other tab name', activeTab);
        }
    }

    render() {
        return (<div className="toolbar-block__tab-panel"
                     onDragStart={this.handelDragStart}
                     onDragEnd={this.handelDragEnd}
        >
            {/*<h4 className="name-block">list tabs content</h4>
             <div className="content-items type-image"
             draggable='true'
             >
             Image
             </div>
             <div className="content-items type-text"
             draggable='true'
             >
             Text
             </div>
             <div className="content-items type-button"
             draggable='true'
             >
             Button
             </div>*/}

            <div className="mdl-tabs__panel is-active">
                {this.activeTabPanel()}
            </div>


        </div>);

    }
}