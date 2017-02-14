/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ConstructorViewBlockComponent from '../../components/ConstructorView/ConstructorViewBlockComponent';

//import SectionComponent from '../components/ConstructorView/SectionComponent';

// containers
import SectionContainer from './SectionContainer';
// actions
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class ConstructorViewContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handelDrop = this.handelDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
    }

    componentDidMount() {
        this.dragEnterCounter = 0;
    }

    handleClickAddSection() {
        //console.log('click Add Section');
        const {id} = this.props;
        const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchConstructorView;
        const childrenId = ActionCreateNode(id).nodeId;
        ActionAddNode(id, childrenId);
    }

    handleDragStart(event, parentId, id) {
        //console.log('drag start', parentId, id);
        let data = JSON.stringify({parentId: parentId, id: id});
        event.dataTransfer.setData("data", data);
    }

    handleDragEnd(event, id) {
        event.preventDefault();
        const {ActionMoveEnd} = this.props.mapDispactchConstructorView;
        ActionMoveEnd(id);
        //console.log(id);
    }

    handelDrop(event, id) {
        // Stop default browser behavior
        //console.log('drop', id);
        event.preventDefault();
        const {ActionDragLeaveDropArea, ActionExchangeNode} = this.props.mapDispactchConstructorView;
        ActionDragLeaveDropArea(id);
        let data = JSON.parse(event.dataTransfer.getData("data"));
        // parentId: childrenIds: [ data.id, id] => [id, data.id]
        ActionExchangeNode(data.parentId, data.id, id);
        //console.log(data);
        this.dragEnterCounter = 0;
    }

    handleDragOver(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        const {isActiveDragStructure} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false) {
            const {ActionDragLeaveDropArea} = this.props.mapDispactchConstructorView;
            --this.dragEnterCounter;
            if (this.dragEnterCounter === 0) {
                ActionDragLeaveDropArea(id);
            }
        }

    }

    handleDragEnter(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        const {isActiveDragStructure} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false) {
            //++
            ++this.dragEnterCounter;
            const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;
            ActionDragEnterDropArea(id);
        }

    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateConstructorViewReducer[id];

        return (
            <ConstructorViewBlockComponent
                handleClickAddSection={this.handleClickAddSection}
            >
                {childrenIds.map((childrenId) => (
                    <SectionContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}

                        handelDrop={this.handelDrop}
                        handleDragEnd={this.handleDragEnd}
                        handleDragStart={this.handleDragStart}
                        handleDragOver={this.handleDragOver}
                        handleDragEnter={this.handleDragEnter}
                        handleDragLeave={this.handleDragLeave}
                    />
                ))}

            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state ConstructorViewContainer', state);
    return {
        mapStateConstructorViewReducer: state.ConstructorViewReducer,
        mapStateToolbarReducer: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)