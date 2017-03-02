/**
 * Created by ruslan on 24.02.17.
 */

// lib
import React, {Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//actions
//import * as ToolbarActions from '../../actions/ToolbarActions'
//import container
//import ColorPickerContainer from '../ColorPickerContainer'
import EditPanelContainer from './Panel/EditPanelContainer'
//import component
import RowsPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/RowsPanelComponent'
import ElementsPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/ElementsPanelComponent'
//import StylesPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/StylesPanelComponent'
import TemplatesPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/TemplatesPanelComponent'


// Application
class ContentPanelsContainer extends Component {
    constructor(props) {
        super(props);

        this.renderContentPanel = this.renderContentPanel.bind(this);

    }

    renderContentPanel() {
        const {activeMenuItem} = this.props.mapStateToolbar;
        switch (activeMenuItem) {
            case 'Rows':
                return (<RowsPanelComponent
                />);
            case 'Elements':
                return <ElementsPanelComponent />;
            case 'Edit':
                /*return (<StylesPanelComponent >
                    <ColorPickerContainer />
                </StylesPanelComponent>);*/
                return <EditPanelContainer />;
            case 'Templates':
                return <TemplatesPanelComponent />;

            default:
                console.error('Error: other tab name, ', activeMenuItem);
        }
    }

    render() {
				//const {isActiveEditPanel} = this.props.mapStateEditPanel;
        return (
            <div>
								{/*{(isActiveEditPanel) ? this.renderEditPanel() : this.renderContentPanel()}*/}
								{this.renderContentPanel()}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        //mapStateWorkArea: state.WorkAreaReducer,
        mapStateToolbar: state.ToolbarReducer,
				mapStateEditPanel: state.EditPanelReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
       //mapDispactchToolbar: bindActionCreators(ToolbarActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContentPanelsContainer)