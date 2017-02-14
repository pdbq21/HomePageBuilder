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

        this.handleDragEnterRow = this.handleDragEnterRow.bind(this);
        this.handleDragLeaveRow = this.handleDragLeaveRow.bind(this);
        this.handelDropExchangeRow = this.handelDropExchangeRow.bind(this);
        this.handleDragStartExchangeRow = this.handleDragStartExchangeRow.bind(this);
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

    handelDrop(event, id, isFirst) {
        // Stop default browser behavior
        //console.log('drop', id);
        event.preventDefault();
        const {
            ActionDragLeaveDropArea, ActionExchangeNode, ActionIsActiveExchangeStructure
        } = this.props.mapDispactchConstructorView;
        ActionDragLeaveDropArea(id);

        const {
            isActiveExchangeSection, isActiveExchangeRow, isActiveExchangeCol
        } = this.props.mapStateConstructorViewReducer;
        let type;
        if (isActiveExchangeSection) {
            type = 'section'
        } else if (isActiveExchangeRow) {
            type = 'row'
        } else if (isActiveExchangeCol) {
            type = 'col'
        }
        ActionIsActiveExchangeStructure(false, type);

        let data = JSON.parse(event.dataTransfer.getData("data"));
        if (id !== data.id) {
            // parentId: childrenIds: [ data.id, id] => [id, data.id]
            ActionExchangeNode(data.parentId, data.id, id, isFirst);
        }
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
        console.log('leave');
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
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
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            //++
            ++this.dragEnterCounter;
            const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;
            ActionDragEnterDropArea(id);
        }

    }

    handleDragEnterRow(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        console.log('enter row', id);
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            //++
            ++this.dragEnterCounter;
            const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;
            ActionDragEnterDropArea(id);
        }

    }
    handleDragLeaveRow(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        console.log('leave row', id);
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            const {ActionDragLeaveDropArea} = this.props.mapDispactchConstructorView;
            --this.dragEnterCounter;
            if (this.dragEnterCounter === 0) {
                ActionDragLeaveDropArea(id);
            }
        }
    }

    handleDragStartExchangeRow(event, parentId, id) {
        let dataRow = JSON.stringify({parentId: parentId, id: id});
        event.dataTransfer.setData("dataRow", dataRow);
    }

    handelDropExchangeRow(event, id, isFirst, parentId){
        event.preventDefault();
        console.log('handelDropExchangeRow', 'id '+id, 'parentId '+parentId);
        //Todo: need dragParentId, dragId, dropParentId, dropId; remove and push functions
        let dataRow = JSON.parse(event.dataTransfer.getData("dataRow"));
        console.log(dataRow);
        const {
            ActionDragLeaveDropArea, ActionExchangeNode, ActionIsActiveExchangeStructure
        } = this.props.mapDispactchConstructorView;
        ActionIsActiveExchangeStructure(false, 'row');
if (id !== dataRow.id){
    // first delete , second push

}
    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateConstructorViewReducer[id];

        return (
            <ConstructorViewBlockComponent
                handleClickAddSection={this.handleClickAddSection}
            >
                {childrenIds.map((childrenId, index) => (
                    <SectionContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                        index={index}

                        handelDrop={this.handelDrop}
                        handleDragEnd={this.handleDragEnd}
                        handleDragStart={this.handleDragStart}
                        handleDragOver={this.handleDragOver}
                        handleDragEnter={this.handleDragEnter}
                        handleDragLeave={this.handleDragLeave}

                        handleDragEnterRow={this.handleDragEnterRow}
                        handleDragLeaveRow={this.handleDragLeaveRow}
                        handelDropExchangeRow={this.handelDropExchangeRow}
                        handleDragStartExchangeRow={this.handleDragStartExchangeRow}
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