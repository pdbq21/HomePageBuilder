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

        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);

        this.dropExchangeNode = this.dropExchangeNode.bind(this);
        this.dragEndExchangeNode = this.dragEndExchangeNode.bind(this);

        this.handelDropExchangeSection = this.handelDropExchangeSection.bind(this);
        this.handleDragStartSection = this.handleDragStartSection.bind(this);
        this.handleDragEndSection = this.handleDragEndSection.bind(this);

        this.handelDropExchangeRow = this.handelDropExchangeRow.bind(this);
        this.handleDragStartRow = this.handleDragStartRow.bind(this);
        this.handleDragEndRow = this.handleDragEndRow.bind(this);
        this.handleDragEnterRow = this.handleDragEnterRow.bind(this);
        this.handleDragLeaveRow = this.handleDragLeaveRow.bind(this);

        this.handelDropExchangeElement = this.handelDropExchangeElement.bind(this);
        this.handleDragStartElement = this.handleDragStartElement.bind(this);
        this.handleDragEndElement = this.handleDragEndElement.bind(this);

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

    dragEndExchangeNode(id) {
        this.dragEnterCounter = 0;
        const {
            ActionDragLeaveDropArea, ActionIsActiveExchangeStructure, ActionDataExchangeStructure,
            ActionMoveEnd
        } = this.props.mapDispactchConstructorView;
        const {dataExchangeStructure} = this.props.mapStateConstructorViewReducer;
        //console.log(dataExchangeStructure);
        ActionMoveEnd(id);
        ActionDragLeaveDropArea(dataExchangeStructure.dragId);
        ActionIsActiveExchangeStructure(false, dataExchangeStructure.dragType);
        ActionDataExchangeStructure('', '');
    }

    /*handleDragEnd(event, id) {
     event.preventDefault();
     this.dragEnterCounter = 0;
     const {
     ActionDragLeaveDropArea, ActionIsActiveExchangeStructure, ActionDataExchangeStructure,
     ActionMoveEnd
     } = this.props.mapDispactchConstructorView;
     const {dataExchangeStructure} = this.props.mapStateConstructorViewReducer;
     ActionMoveEnd(id);
     ActionDragLeaveDropArea(dataExchangeStructure.dragId);
     ActionIsActiveExchangeStructure(false, dataExchangeStructure.dragType);
     ActionDataExchangeStructure('', '');
     }*/
    /*handelDrop(event, id, isFirst, parentId) {
     // Stop default browser behavior
     event.preventDefault();


     const {
     isActiveExchangeSection, isActiveExchangeRow, isActiveExchangeCol
     } = this.props.mapStateConstructorViewReducer;

     event.preventDefault();
     const {
     ActionDragLeaveDropArea, ActionExchangeNodePush, ActionExchangeNodeDelete,
     ActionIsActiveExchangeStructure
     } = this.props.mapDispactchConstructorView;

     //console.log('handelDropExchangeRow', 'id ' + id, 'parentId ' + parentId);
     let data = JSON.parse(event.dataTransfer.getData("data"));

     //console.log(data, id, isFirst, parentId);

     ActionDragLeaveDropArea(id);

     let type;
     if (isActiveExchangeSection) {
     type = 'section'
     } else if (isActiveExchangeRow) {
     type = 'row'
     } else if (isActiveExchangeCol) {
     type = 'col'
     }
     ActionIsActiveExchangeStructure(false, type);

     // if drop and drag element is not the same
     if (id !== data.id) {
     // first delete , second push
     // nodeId = data.parentId; id = data.id;
     ActionExchangeNodeDelete(data.parentId, data.id);
     // nodeId = parentId; dropId = id; dragId = dataRow.id;
     console.log(data.parentId, parentId);
     ActionExchangeNodePush(parentId, id, data.id, isFirst);
     }

     this.dragEnterCounter = 0;
     }*/
    dropExchangeNode(type, id, parentId, data, isFirst) {

        const {
            ActionDragLeaveDropArea, ActionExchangeNodePush, ActionExchangeNodeDelete,
            ActionIsActiveExchangeStructure
        } = this.props.mapDispactchConstructorView;

        ActionDragLeaveDropArea(id);
        ActionIsActiveExchangeStructure(false, type);

        // if drop and drag element is not the same
        if (id !== data.id) {
            ActionExchangeNodeDelete(data.parentId, data.id);
            ActionExchangeNodePush(parentId, id, data.id, isFirst);
        }

        this.dragEnterCounter = 0;
    }

    handleDragOver(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event, id) {
        /*if (this.dragEnterCounter === 2){
         event.stopPropagation();
         event.preventDefault();
         return false;
         }*/
        // Stop default browser behavior
        //event.preventDefault();
        console.log('leave', id);
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            const {ActionDragLeaveDropArea} = this.props.mapDispactchConstructorView;
            //ActionDragLeaveDropArea(id);

            --this.dragEnterCounter;
            if (this.dragEnterCounter === 0) {
                ActionDragLeaveDropArea(id);
            }


        }
        event.stopPropagation();
        event.preventDefault();
        return false;
    }

    handleDragEnter(event, id) {

        if (this.dragEnterCounter === 2) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        // Stop default browser behavior
        //event.preventDefault();
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
        console.log('enter', id);
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            //++
            //++this.dragEnterCounter;

            if (this.dragEnterCounter <= 1) {
                ++this.dragEnterCounter;
                const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;
                ActionDragEnterDropArea(id);
            }

        }
        event.stopPropagation();
        event.preventDefault();
        return false;
    }

    /*handelDropExchangeRow(event, id, isFirst, parentId) {
     event.preventDefault();
     const {
     ActionDragLeaveDropArea, ActionExchangeNodeRowPush, ActionExchangeNodeRowDelete,
     ActionIsActiveExchangeStructure
     } = this.props.mapDispactchConstructorView;

     //console.log('handelDropExchangeRow', 'id ' + id, 'parentId ' + parentId);
     //Todo: need dragParentId, dragId, dropParentId, dropId; remove and push functions
     let dataRow = JSON.parse(event.dataTransfer.getData("dataRow"));
     //console.log(dataRow);


     ActionDragLeaveDropArea(id);
     ActionIsActiveExchangeStructure(false, 'row');

     // if drop and drag element is not the same
     if (id !== dataRow.id) {
     // first delete , second push
     // nodeId = dataRow.parentId; id = dataRow.id;
     ActionExchangeNodeRowDelete(dataRow.parentId, dataRow.id);
     // nodeId = parentId; dropId = id; dragId = dataRow.id;
     ActionExchangeNodeRowPush(parentId, id, dataRow.id, isFirst);
     }
     }*/
    /*** Section function ***/
    handelDropExchangeSection(event, id, isFirst, parentId) {
        // Stop default browser behavior
        event.preventDefault();
        let dataSection = JSON.parse(event.dataTransfer.getData("dataSection"));
        this.dropExchangeNode('section', id, parentId, dataSection, isFirst);
    }

    handleDragStartSection(event, parentId, id) {
        let dataSection = JSON.stringify({parentId: parentId, id: id});
        event.dataTransfer.setData("dataSection", dataSection);
        //console.log('section');
        const {ActionDataExchangeStructure} = this.props.mapDispactchConstructorView;
        ActionDataExchangeStructure(id, 'section');
    }

    handleDragEndSection(event, id) {
        event.preventDefault();
        this.dragEndExchangeNode(id);
    }

    /*** Row function ***/
    handelDropExchangeRow(event, id, isFirst, parentId) {
        event.preventDefault();
        let dataRow = JSON.parse(event.dataTransfer.getData("dataRow"));
        this.dropExchangeNode('row', id, parentId, dataRow, isFirst);
    }

    handleDragStartRow(event, parentId, id) {
        let dataRow = JSON.stringify({parentId: parentId, id: id});
        event.dataTransfer.setData("dataRow", dataRow);
        //console.log(id);
        const {ActionDataExchangeStructure} = this.props.mapDispactchConstructorView;
        ActionDataExchangeStructure(id, 'row');
    }

    handleDragEndRow(event, id) {
        event.preventDefault();
        this.dragEndExchangeNode(id);
    }

    handleDragLeaveRow(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        //console.log('leave', id);
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

    handleDragEnterRow(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        const {isActiveDragStructure, isActiveDragElement} = this.props.mapStateToolbarReducer;
        //console.log('enter');
// if isActiveDragStructure === true => drag element in Toolbar
        // else === false => drag element in ConstructorView
        if (isActiveDragStructure === false && isActiveDragElement === false) {
            //++
            ++this.dragEnterCounter;
            const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;

            //console.log(event.target, id);
            ActionDragEnterDropArea(id);
        }

    }

    /*** Element function ***/
    handelDropExchangeElement(event, id, isFirst, parentId) {
        event.preventDefault();
        let dataElement = JSON.parse(event.dataTransfer.getData("dataElement"));
        this.dropExchangeNode('col', id, parentId, dataElement, isFirst);
    }

    handleDragStartElement(event, parentId, id) {
        let dataElement = JSON.stringify({parentId: parentId, id: id});
        event.dataTransfer.setData("dataElement", dataElement);
        const {ActionDataExchangeStructure} = this.props.mapDispactchConstructorView;
        ActionDataExchangeStructure(id, 'col');
    }

    handleDragEndElement(event, id) {
        event.preventDefault();
        this.dragEndExchangeNode(id);
    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateConstructorViewReducer[id];
        const {isActiveExchangeSection} = this.props.mapStateConstructorViewReducer;
        return (
            <ConstructorViewBlockComponent
                handleClickAddSection={this.handleClickAddSection}
                classPointerEvents={(isActiveExchangeSection) ? 'pointerEventsSection' : ''}
            >
                {childrenIds.map((childrenId, index) => (
                    <SectionContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}-${index}`}
                        index={index}

                        handleDragOver={this.handleDragOver}
                        handleDragEnter={this.handleDragEnter}
                        handleDragLeave={this.handleDragLeave}

                        handelDropExchangeSection={this.handelDropExchangeSection}
                        handleDragStartSection={this.handleDragStartSection}
                        handleDragEndSection={this.handleDragEndSection}

                        handelDropExchangeRow={this.handelDropExchangeRow}
                        handleDragStartRow={this.handleDragStartRow}
                        handleDragEndRow={this.handleDragEndRow}
                        handleDragEnterRow={this.handleDragEnterRow}
                        handleDragLeaveRow={this.handleDragLeaveRow}

                        handelDropExchangeElement={this.handelDropExchangeElement}
                        handleDragStartElement={this.handleDragStartElement}
                        handleDragEndElement={this.handleDragEndElement}
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