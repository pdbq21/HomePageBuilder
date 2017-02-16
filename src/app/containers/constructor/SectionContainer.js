/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import SectionComponent from '../../components/ConstructorView/SectionComponent';
import BarMenuContainer from '../BarMenuContainer';
import DropAreaComponent from '../../components/DropAreaComponent';
//containers
import RowContainer from './RowContainer';
// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.handelDropRow = this.handelDropRow.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOverRow = this.handleDragOverRow.bind(this);
    }

    handelDropRow(event, id) {
        // Stop default browser behavior
        //console.log('drop', id); // id === Section id
        event.preventDefault();
        const {ActionCreateNode, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        // [6, 6] / [4, 4, 4] ...
        const {columns} = this.props.mapStateToolbar;
        // if drop Element columns.length = 0;
        if (columns.length) {
            // create Row
            const childrenIdRow = ActionCreateNode(id).nodeId;
            ActionAddNode(id, childrenIdRow);
            ActionAddColumnsData(childrenIdRow, columns);
// create Row children - Cols
            columns.forEach((col) => {
                //console.log(col, index);
                const childrenId = ActionCreateNode(childrenIdRow).nodeId;
                ActionAddNode(childrenIdRow, childrenId);
                ActionAddColumnsData(childrenId, col);
            });
        }
    }

    handleDragOverRow(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        // Stop default browser behavior
        event.preventDefault();
    }

    render() {
        const {isActiveDragStructure} = this.props.mapStateToolbar;
        const {isActiveExchangeSection, isActiveExchangeRow} = this.props.mapStateConstructorViewReducer;
        const {id, parentId} = this.props; // index
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMove, isActiveEditPanel, isActiveDropArea} = this.props.mapStateSection;
        //console.log(this.props.mapStateSection);
        const {
            handleDragOver, handleDragEnd, handleDragEnter, handleDragLeave,
            handelDropExchangeSection, handleDragStartSection, handelDropExchangeRow, handleDragStartRow,
            handelDropExchangeElement, handleDragStartElement, handleDragEnterRow, handleDragLeaveRow
        } = this.props;

        return (
            <div
                onDragEnter={(isActiveExchangeSection) ?
                    (event) => handleDragEnter(event, id) :
                    (event) => handleDragEnterRow(event, id)
                }
                onDragLeave={(isActiveExchangeSection) ?
                    (event) => handleDragLeave(event, id) :
                    (event) => handleDragLeaveRow(event, id)
                }
                style={{'marginBottom': '1em'}}
            >
                {/* only first */}

                <DropAreaComponent
                    id={id}
                    classActiveDropArea={
                        (isActiveDropArea && isActiveExchangeSection) ? 'is-active-area' : 'is-not-active-area'
                    }
                    handleDragOver={handleDragOver}
                    handelDrop={handelDropExchangeSection}
                    isFirst={true}
                    name='this'
                    parentId={parentId}
                />


                <SectionComponent
                    pointerEvents={(isActiveExchangeSection && isActiveDropArea)? 'none' : 'auto'}
                    id={id}
                    parentId={parentId}
                    draggable={isActiveMove}
                    classActiveEditPanel={(isActiveEditPanel) ? 'is-active-edit-panel' : ''}
                    handleDragEnd={handleDragEnd}
                    handleDragStart={handleDragStartSection}
                >
                    <BarMenuContainer
                        id={id}
                        type='section'
                        positionMenu={false}
                        parentId={parentId}
                    />
                    {
                        childrenIds.map((childrenId, index) => (
                            <RowContainer
                                id={childrenId}
                                parentId={id}
                                index={index}
                                key={`key-${childrenId}`}

                                handleDragEnd={handleDragEnd}
                                handleDragStartRow={handleDragStartRow}
                                handleDragOver={handleDragOver}
                                handelDropExchangeRow={handelDropExchangeRow}

                                handleDragEnter={handleDragEnter}
                                handleDragLeave={handleDragLeave}

                                handelDropExchangeElement={handelDropExchangeElement}
                                handleDragStartElement={handleDragStartElement}
                            />
                        ))
                    }

                    {
                        (childrenIds.length === 0) ? (<DropAreaComponent
                                id={id}
                                handleDragOver={handleDragOver}
                                handelDrop={handelDropExchangeRow}
                                classActiveDropArea={
                                    (isActiveDropArea && isActiveExchangeRow) ? 'is-active-area' : 'is-not-active-area'
                                }
                                isFirst={false}
                                name='this'
                                parentId={parentId}
                            />) : null
                    }

                    <DropAreaComponent
                        classActiveDropArea={(isActiveDragStructure) ? 'pb-area--green' : 'pb-area--gray'}
                        hidden={
                            (isActiveDropArea && isActiveExchangeRow) ? 'none' : 'block'
                        }
                        id={id}
                        handelDrop={this.handelDropRow}
                        handleDragOver={this.handleDragOverRow}
                        isFirst={false}
                        name='row'
                        parentId={parentId}
                    />
                </SectionComponent>
                <DropAreaComponent
                    id={id}
                    classActiveDropArea={
                        (isActiveDropArea && isActiveExchangeSection) ? 'is-active-area' : 'is-not-active-area'
                    }
                    handleDragOver={handleDragOver}
                    handelDrop={handelDropExchangeSection}
                    isFirst={false}
                    name='this'
                    parentId={parentId}
                />

            </div>

    )
        ;
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state SectionContainer:', state, 'ownProps SectionContainer:', ownProps);
    return {
        mapStateToolbar: state.ToolbarReducer,
        // data only this current Section
        // id={childrenId} => ownProps.id
        mapStateSection: state.ConstructorViewReducer[ownProps.id],
        mapStateConstructorViewReducer: state.ConstructorViewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)

/* Note:

 {childrenIds.map((childrenId, index) => (
 <RowContainer
 id={childrenId}
 parentId={id}
 index={index}
 key={`key-${childrenId}`}

 handleDragEnd={handleDragEnd}
 handleDragStartRow={handleDragStartRow}
 handleDragOver={handleDragOver}
 handelDropExchangeRow={handelDropExchangeRow}

 handleDragEnter={handleDragEnter}
 handleDragLeave={handleDragLeave}

 handelDropExchangeElement={handelDropExchangeElement}
 handleDragStartElement={handleDragStartElement}
 />
 ))}

 const childrenId = ActionCreateNode(id).nodeId;
 ActionAddNode(id, childrenId);
 ActionAddColumnsData(childrenId, columns);

 */
