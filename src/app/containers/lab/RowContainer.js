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
import ColContainer from '../constructor/ColContainer';
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
        //this.createColumnsChildren();
    }

    createColumnsChildren() {
        const {ActionCreateNode, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        const {columnsIndex, childrenIds} = this.props.mapStateRow;
        const {id} = this.props;

        // Todo: Потрібно це виправити бо це "Костиль"
        // Note: проблема в тому що Row рендериться окремо з Col.
        // Потрібно якось обєднати створення Row по Section childrenIds: [...] with Row columnsIndex: [...]
        if (childrenIds.length === 0) {
            columnsIndex.forEach((col) => {
                const childrenId = ActionCreateNode(id).nodeId;
                ActionAddNode(id, childrenId);
                ActionAddColumnsData(childrenId, col);
            });
        }
    }

    render() {
        const {
            id, parentId, index, handleDragStartRow, handleDragEnd, handelDropExchangeRow, handleDragOver,
            handleDragEnter, handleDragLeave, handelDropExchangeElement, handleDragStartElement
        } = this.props;
        //console.log(this.props);
        const {isActiveExchangeRow} = this.props.mapStateConstructorViewReducer;
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMove, isActiveDropArea, isActiveEditPanel, columnsIndex} = this.props.mapStateRow;

        return (
            <div
                style={{'marginBottom': '1em'}}
                onDragEnter={(isActiveExchangeRow) ? (event) => handleDragEnter(event, id) : null}
                onDragLeave={(isActiveExchangeRow) ? (event) => handleDragLeave(event, id) : null}
            >
                {/* only first */}
                {(index === 0) ? (
                        <DropAreaComponent
                            id={id}
                            classActiveDropArea={
                                (isActiveDropArea && isActiveExchangeRow) ? 'is-active-area' : 'is-not-active-area'
                            }
                            handleDragOver={(isActiveExchangeRow) ? handleDragOver : null}
                            handelDrop={handelDropExchangeRow}
                            isFirst={true}
                            name='this'
                            parentId={parentId}
                        />) : null
                }

                <RowComponent
                    id={id}
                    parentId={parentId}
                    classActiveEditPanel={(isActiveEditPanel) ? 'is-active-edit-panel' : ''}
                    draggable={isActiveMove}
                    handleDragEnd={handleDragEnd}
                    handleDragStart={handleDragStartRow}
                >
                    <BarMenuContainer
                        positionMenu={true}
                        id={id}
                        name='Row'
                        type='row'
                        parentId={parentId}
                    />
                    {
                        childrenIds.map((childrenId, index) => (
                            console.log(childrenId, index, columnsIndex[index])
                        //this.testCreate(id, childrenId, columnsIndex[index])

                        ))
                    }
                    /*{childrenIds.map((childrenId) => (
                        <ColContainer
                            id={childrenId}
                            parentId={id}
                            key={`key-${childrenId}`}

                            handleDragOver={handleDragOver}
                            handleDragEnd={handleDragEnd}
                            handleDragEnter={handleDragEnter}
                            handleDragLeave={handleDragLeave}

                            handleDragStartElement={handleDragStartElement}
                            handelDropExchangeElement={handelDropExchangeElement}
                        />
                    ))}*/

                </RowComponent>
                <DropAreaComponent
                    id={id}
                    handleDragOver={(isActiveExchangeRow) ? handleDragOver : null}
                    handelDrop={handelDropExchangeRow}
                    classActiveDropArea={
                        (isActiveDropArea && isActiveExchangeRow) ? 'is-active-area' : 'is-not-active-area'
                    }
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