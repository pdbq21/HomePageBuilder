/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import RowComponent from '../../components/ConstructorView/RowComponent';
import DropAreaComponent from '../../components/DropAreaComponent';
//containers
import ColContainer from './ColContainer';
import BarMenuContainer from '../BarMenuContainer';
// actions
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class RowContainer extends Component {
    constructor(props) {
        super(props);
        this.createColumnsChildren = this.createColumnsChildren.bind(this);
    }

    componentWillMount() {
        this.createColumnsChildren();
    }

    createColumnsChildren() {
        const {ActionCreateNode, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        const {columnsIndex} = this.props.mapStateRow;
        const {id} = this.props;

        columnsIndex.forEach((col) => {
            const childrenId = ActionCreateNode(id).nodeId;
            ActionAddNode(id, childrenId);
            ActionAddColumnsData(childrenId, col);
        });
    }


    render() {
        const {
            id, parentId, handleDragStart, handleDragEnd, handelDropExchangeRow, handleDragOver, handleDragEnterRow,
            handleDragLeaveRow, handleDragStartExchangeRow
        } = this.props;
        //console.log(this.props);
        const {isActiveExchangeRow} = this.props.mapStateConstructorViewReducer;
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMove, isActiveDropArea} = this.props.mapStateRow;

        return (
            <div
                style={{'marginBottom': '1em'}}
                onDragEnter={(isActiveExchangeRow)? (event) => handleDragEnterRow(event, id) : null}
                onDragLeave={(isActiveExchangeRow)? (event) => handleDragLeaveRow(event, id) : null}
            >
                <RowComponent
                    id={id}
                    parentId={parentId}

                    draggable={isActiveMove}
                    handleDragEnd={handleDragEnd}
                    handleDragStart={handleDragStartExchangeRow}
                >
                    <BarMenuContainer
                        positionMenu={true}
                        id={id}
                        name='Row'
                        type='row'
                        parentId={parentId}
                    />
                    {childrenIds.map((childrenId) => (
                        <ColContainer
                            id={childrenId}
                            parentId={id}
                            key={`key-${childrenId}`}

                            handleDragEnd={handleDragEnd}
                            handleDragStart={handleDragStart}
                        />
                    ))}

                </RowComponent>
                <DropAreaComponent
                    id={id}
                    handleDragOver={handleDragOver}
                    handelDrop={handelDropExchangeRow}
                    classActiveDropArea={(isActiveDropArea && isActiveExchangeRow) ? 'is-active-area' : 'is-not-active-area'}
                    isFirst={false}
                    name='this'
                parentId={parentId}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.ConstructorViewReducer[ownProps.id],
        mapStateConstructorViewReducer: state.ConstructorViewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)