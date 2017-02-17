/**
 * Created by ruslan on 15.02.17.
 */

// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components

import ElementComponent from '../../components/ConstructorView/ElementComponent';
import DropAreaComponent from '../../components/DropAreaComponent';
//containers
import BarMenuContainer from '../BarMenuContainer';
// actions
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class ElementContainer extends Component {

    render() {
        const {
            id, parentId, index, handleDragEnd, handleDragOver,
            handleDragEnter, handleDragLeave, handelDropExchangeElement, handleDragStartElement
        } = this.props;
        const {elementType, isActiveMove, isActiveDropArea, isActiveEditPanel} = this.props.mapStateElement;
        const {isActiveExchangeCol} = this.props.mapStateConstructorViewReducer;
        let currentStyle;
        if (typeof this.props.mapStateElementStyles !== 'undefined') {
            currentStyle = this.props.mapStateElementStyles.currentStyle;
        } else {
            currentStyle = this.props.mapStateEditPanel.defaultStyle;
        }
        return (
            <div
                style={{'marginBottom': '1em'}}
                onDragEnter={(isActiveExchangeCol) ? (event) => handleDragEnter(event, id) : null}
                onDragLeave={(isActiveExchangeCol) ? (event) => handleDragLeave(event, id) : null}
            >
                {/* only first */}
                {(index === 0) ? (
                        <DropAreaComponent
                            id={id}
                            classActiveDropArea={
                                (isActiveDropArea && isActiveExchangeCol) ? 'is-active-area' : 'is-not-active-area'
                            }
                            handleDragOver={(isActiveExchangeCol) ? handleDragOver : null}
                            handelDrop={handelDropExchangeElement}
                            isFirst={true}
                            name='this'
                            parentId={parentId}
                        />) : null
                }

                <ElementComponent
                    id={id}
                    parentId={parentId}
                    draggable={isActiveMove}
                    classActiveEditPanel={(isActiveEditPanel) ? 'is-active-edit-panel' : ''}
                    type={elementType}
                    handleDragEnd={handleDragEnd}
                    handleDragStart={handleDragStartElement}

                    styles={currentStyle}
                >
                    <BarMenuContainer
                        positionMenu={true}
                        id={id}
                        name={elementType}
                        type="col"
                        parentId={parentId}
                    />
                </ElementComponent>

                <DropAreaComponent
                    id={id}
                    handleDragOver={(isActiveExchangeCol) ? handleDragOver : null}
                    handelDrop={handelDropExchangeElement}
                    classActiveDropArea={
                        (isActiveDropArea && isActiveExchangeCol) ? 'is-active-area' : 'is-not-active-area'
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
        mapStateElement: state.ConstructorViewReducer[ownProps.id],
        mapStateConstructorViewReducer: state.ConstructorViewReducer,
        mapStateEditPanel: state.EditPanelReducer,
        mapStateElementStyles: state.EditPanelReducer[ownProps.id],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchElement: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementContainer)