/**
 * Created by ruslan on 24.02.17.
 */

// lib
import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//actions
//import * as ToolbarActions from '../../actions/ToolbarActions'
//import component
import RowsPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/RowsPanelComponent'
import ElementsPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/ElementsPanelComponent'
import StylesPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/StylesPanelComponent'
import TemplatesPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/TemplatesPanelComponent'


// Application
class ContentPanelsContainer extends Component {
    constructor(props) {
        super(props);

        this.renderContentPanel = this.renderContentPanel.bind(this);
    }

    renderContentPanel() {
        const {activeMenuItem} = this.props.mapStateToolbar;
        const {connectDragSource,} = this.props;
        switch (activeMenuItem) {
            case 'Rows':
                return (<RowsPanelComponent
                    connectDragSource={connectDragSource}
                />);
            case 'Elements':
                return <ElementsPanelComponent

                />;
            case 'Edit':
                return <StylesPanelComponent />;
            case 'Templates':
                return <TemplatesPanelComponent />;

            default:
                console.error('Error: other tab name, ', activeMenuItem);
        }
    }

    render() {

        return (
            <div>
                {this.renderContentPanel()}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        //mapStateWorkArea: state.WorkAreaReducer,
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
       // mapDispactchToolbar: bindActionCreators(ToolbarActions, dispatch)
    }
}


ContentPanelsContainer = DragSource('BOX', {
    beginDrag(props) {
        return {
            name: props.name
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            window.alert( // eslint-disable-line no-alert
                `You dropped ${item.name} into ${dropResult.name}!`
            );
        }
    }
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(ContentPanelsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanelsContainer)