/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

// components
import ConstructorViewBlockComponent from '../components/ConstructorView/ConstructorViewBlockComponent';
import SectionComponent from '../components/ConstructorView/SectionComponent';

// actions
import * as actionsConstructorView from '../actions/ConstructorViewActions'

// Application
class ConstructorViewContainer extends Component {
    constructor(props) {
        super(props);

        this.handelDrop = this.handelDrop.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);
    }

    handelDrop(event) {
        // console.log('drop');
        // Stop default browser behavior
        event.preventDefault();
        //const {createIdAction, addNewSectionAction, onDropAction} = this.props;
        const {createIdAction, addNewSectionAction, id} = this.props;
        //const childId = createNode().nodeId
        //addChild(id, childId)
        const sectionId = createIdAction().nodeId;
        addNewSectionAction(id, sectionId);
        //id, name
        //this.props.onDropSectionAction();
    }

    handleDragOver(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        // Stop default browser behavior
        event.preventDefault();
    }

    handleClickAddSection() {
        console.log('click Add Section');
        //const {createIdAction, addNewSectionAction, id} = this.props;
        const { ActionCreateId, ActionAddSection } = this.props.mapDispactchConstructorView;
        const { id } = this.props;
        //const {rowIds} = this.props.mapStateConstructorViewReducer;

        const sectionId = ActionCreateId().nodeId;
        ActionAddSection(id, sectionId);
    }

    render() {
        //console.log('ConstructorViewContainer props: ', this.props);
        const { id } = this.props;
        const {activeDragStructure} = this.props.mapStateToolbar;
       const {rowIds} = this.props.mapStateConstructorViewReducer;
        //console.log('***********', rowIds);
        //const { /*ActionOnDropSection, */ActionCreateId, ActionAddNewSection } = this.props.mapDispactchConstructorView;


        let SectionComponentHtml = rowIds.map(function (rowId) {
            return (<div key={rowId}>
                <SectionComponent id={rowId} parentId={id}/>
            </div>);
        });

        return (
            <ConstructorViewBlockComponent
                classNameAddNewSection={(activeDragStructure) ? 'active-new-section-block' : ''}
                /*onDropSectionAction={ActionOnDropSection}*/
                /*createIdAction={ActionCreateId}
                addNewSectionAction={ActionAddNewSection}
                id={id}
                rowIds={rowIds}*/
                handleClickAddSection={this.handleClickAddSection}
            >
                {SectionComponentHtml}
            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state ConstructorViewContainer', state, ownProps);
    return {
        mapStateToolbar: state.ToolbarReducer,
        mapStateConstructorViewReducer: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)