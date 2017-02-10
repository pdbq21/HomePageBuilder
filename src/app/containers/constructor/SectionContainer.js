/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import SectionComponent from '../../components/ConstructorView/SectionComponent';
import VerticalBar from '../../components/VerticalBar';
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

        this.handelClickBarMenu = this.handelClickBarMenu.bind(this);
        this.handelBlurBarMenu = this.handelBlurBarMenu.bind(this);
        this.handelClickRemove = this.handelClickRemove.bind(this);
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

    handelBlurBarMenu(id) {
        const {ActionToggleVerticalBarMenuBlur} = this.props.mapDispactchSection;
        //Todo: need change this logic
        setTimeout(function () {
            ActionToggleVerticalBarMenuBlur(id);
        }, 200);
    }

    handelClickBarMenu(id) {
        const {ActionToggleVerticalBarMenu} = this.props.mapDispactchSection;
        ActionToggleVerticalBarMenu(id);
    }

    handelClickRemove(id) {
        //console.log('id', this.props.parentId, id);
        const {ActionRemoveChild, ActionDeleteNode} = this.props.mapDispactchSection;
        ActionRemoveChild(this.props.parentId, id);
        ActionDeleteNode(id);
    }

    render() {
        const {isActiveDragStructure} = this.props.mapStateToolbar;
        //Todo: use this parentId for delete function
        const {id} = this.props;
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMenu} = this.props.mapStateSection;
        // console.log(this.props.mapStateSection);
        return (
            <SectionComponent
                classNameActiveAddSection={(isActiveDragStructure) ? 'pb-area--green' : 'pb-area--gray'}
                handelDrop={this.handelDropRow}
                handleDragOver={this.handleDragOverRow}
                id={id}
            >
                <VerticalBar
                    id={id}
                    type='section'
                    handelClickBarMenu={this.handelClickBarMenu}
                    handelBlurBarMenu={this.handelBlurBarMenu}
                    handelClickRemove={this.handelClickRemove}
                    classActiveMenu={(isActiveMenu) ? 'is-active' : ''}
                />
                {childrenIds.map((childrenId) => (
                    <RowContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                    />
                ))}
            </SectionComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state SectionContainer:', state, 'ownProps SectionContainer:', ownProps);
    return {
        mapStateToolbar: state.ToolbarReducer,
        // data only this current Section
        // id={childrenId} => ownProps.id
        mapStateSection: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)