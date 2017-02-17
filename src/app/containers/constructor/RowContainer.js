/**
 * Created by ruslan on 16.02.17.
 */
/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//components
import RowComponent from '../../components/ConstructorView/RowComponent';
import DropAreaComponent from '../../components/DropAreaComponent';
//containers
import ColContainer from './ColContainer';
import BarMenuContainer from '../BarMenuContainer';

// actions
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class TestContainer extends Component {


    render() {
        const {
            id, parentId, index, handleDragStartRow, handleDragEnd, handelDropExchangeRow, handleDragOver,
            handleDragEnter, handleDragLeave, handelDropExchangeElement, handleDragStartElement,
            handleDragEndElement
        } = this.props;
        //console.log(this.props);
        const {isActiveExchangeRow} = this.props.mapStateConstructorView;
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMove, isActiveDropArea, isActiveEditPanel} = this.props.mapStateRow;
        //console.log(this.props.mapStateRowStyles);
        let currentStyle;
        if (typeof this.props.mapStateRowStyles !== 'undefined') {
            currentStyle = this.props.mapStateRowStyles.currentStyle;
        } else {
            currentStyle = this.props.mapStateEditPanel.defaultStyle;
        }
        //

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

                    styles={currentStyle}
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

                            handleDragOver={handleDragOver}
                            handleDragEnd={handleDragEnd}
                            handleDragEnter={handleDragEnter}
                            handleDragLeave={handleDragLeave}

                            handleDragStartElement={handleDragStartElement}
                            handelDropExchangeElement={handelDropExchangeElement}
                            handleDragEndElement={handleDragEndElement}
                        />
                    ))}

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
        mapStateRowStyles: state.EditPanelReducer[ownProps.id],
        mapStateConstructorView: state.ConstructorViewReducer,
        mapStateEditPanel: state.EditPanelReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchCol: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)