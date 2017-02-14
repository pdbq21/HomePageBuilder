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
import RowContainer from './RowContainer'
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
        // console.log('drop');
        event.preventDefault();
        const {ActionCreateNode, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        // [6, 6] / [4, 4, 4] ...
        const {columns} = this.props.mapStateToolbar;
        // if drop Element columns.length = 0;
        if (columns.length) {
            const childrenId = ActionCreateNode(id).nodeId;
            ActionAddNode(id, childrenId);
            ActionAddColumnsData(childrenId, columns);
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
        const {isActiveExchangeSection} = this.props.mapStateConstructorViewReducer;
        const {id, parentId, index} = this.props;
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMove} = this.props.mapStateSection;
        //console.log(this.props.mapStateSection);
        const {isActiveDropArea} = this.props.mapStateSection;
        const {
            handelDrop, handleDragOver, handleDragEnd, handleDragEnter, handleDragLeave, handleDragStart,
            handleDragEnterRow, handleDragLeaveRow, handelDropExchangeRow, handleDragStartExchangeRow
        } = this.props;
        return (
            <div
                style={{'marginBottom': '1em'}}
                onDragEnter={(isActiveExchangeSection)? (event) => handleDragEnter(event, id) : null}
                onDragLeave={(isActiveExchangeSection)? (event) => handleDragLeave(event, id) : null}
            >
                {/* only first */}
                {(index === 0) ? (<DropAreaComponent
                        id={id}
                        handleDragOver={handleDragOver}
                        classActiveDropArea={(isActiveDropArea && isActiveExchangeSection) ? 'is-active-area' : 'is-not-active-area'}
                        handelDrop={handelDrop}
                        first={true}
                        name='this'
                    />) : null
                }

                <SectionComponent
                    id={id}
                    parentId={parentId}
                    draggable={isActiveMove}
                    handleDragEnd={handleDragEnd}
                    handleDragStart={handleDragStart}
                >
                    <BarMenuContainer
                        id={id}
                        type='section'
                        positionMenu={false}
                        parentId={parentId}
                    />
                    {childrenIds.map((childrenId) => (
                        <RowContainer
                            id={childrenId}
                            parentId={id}
                            key={`key-${childrenId}`}
                            handleDragEnd={handleDragEnd}
                            handleDragStartExchangeRow={handleDragStartExchangeRow}
                            handleDragOver={handleDragOver}
                            handelDropExchangeRow={handelDropExchangeRow}

                            handleDragEnterRow={handleDragEnterRow}
                            handleDragLeaveRow={handleDragLeaveRow}
                        />
                    ))}
                    <DropAreaComponent
                        classActiveDropArea={(isActiveDragStructure) ? 'pb-area--green' : 'pb-area--gray'}
                        id={id}
                        handelDrop={this.handelDropRow}
                        handleDragOver={this.handleDragOverRow}
                        isFirst={false}
                        name='row'
                    />
                </SectionComponent>

                <DropAreaComponent
                    id={id}
                    handleDragOver={handleDragOver}
                    classActiveDropArea={(isActiveDropArea && isActiveExchangeSection) ? 'is-active-area' : 'is-not-active-area'}
                    handelDrop={handelDrop}
                    isFirst={false}
                    name='this'
                />
            </div>

        );
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