/**
 * Created by ruslan on 20.02.17.
 */
import React , {Component}from 'react'

// import component
import EditPanelButton from './EditPanel/Button'
import EditPanelImage from './EditPanel/Image'
import EditPanelRow from './EditPanel/Row'
import EditPanelSection from './EditPanel/Section'
import EditPanelText from './EditPanel/Text'


export function EditPanelNavigation(props) {
    const {handelEditPanelNavigation} = props;
    const {navigationTabs, activeTab} = props;
    return (
        <div className="mdl-tabs__tab-bar"
             onClick={(event) => handelEditPanelNavigation(event)}
        >
            {navigationTabs.map((tabName, index) => {
                return <span href="" className={`mdl-tabs__tab ${(activeTab === tabName.name) ? 'is-active' : ''}`}
                             key={`tab-edit-panel-key-${index}`}
                >
                    {tabName.name}
                </span>

            })}
        </div>);
}




export class EditPanel extends Component {
    constructor(props) {
        super(props);

        this.renderStructure = this.renderStructure.bind(this);
    }

    renderStructure(){
        const {onChange, onChangeImage, activeTab, structureName} = this.props;
        switch (structureName) {
            case 'Section':
                return (<EditPanelSection
                    activeTab={activeTab}
                    onChange={onChange}
                    onChangeImage={onChangeImage}
                />);
            case 'Row':
                return (<EditPanelRow
                    activeTab={activeTab}
                    onChange={onChange}
                    onChangeImage={onChangeImage}
                />);
            case 'Text':
                return (<EditPanelText
                    activeTab={activeTab}
                    onChange={onChange}
                    onChangeImage={onChangeImage}
                />);
            case 'Image':
                return (<EditPanelImage
                    activeTab={activeTab}
                    onChange={onChange}
                    onChangeImage={onChangeImage}
                />);
            case 'Button':
                return (<EditPanelButton
                    activeTab={activeTab}
                    onChange={onChange}
                    onChangeImage={onChangeImage}
                />);
            default:
                return console.error('Error: Other structure name', structureName);
        }
    }

    render(){

        return (<div>
                {this.renderStructure()}
        </div>

        );
    }
}
