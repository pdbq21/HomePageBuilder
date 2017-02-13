/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import RowComponent from '../../components/ConstructorView/RowComponent';
import BarMenu from '../../components/BarMenu';
//containers
import ColContainer from './ColContainer';
// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class RowContainer extends Component {
    constructor(props) {
        super(props);
        this.createColumnsChildren = this.createColumnsChildren.bind(this);
        this.handelBlurBarMenu = this.handelBlurBarMenu.bind(this);
        this.handelClickBarMenu = this.handelClickBarMenu.bind(this);
        this.handelClickRemove = this.handelClickRemove.bind(this);
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
        const {id} = this.props;
        //console.log(this.props);
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMenu} = this.props.mapStateRow;
        return (
            <RowComponent
                id={id}
            >
                <BarMenu
                    handelClickBarMenu={this.handelClickBarMenu}
                    handelBlurBarMenu={this.handelBlurBarMenu}
                    handelClickRemove={this.handelClickRemove}
                    classActiveMenu={(isActiveMenu) ? 'is-active' : ''}
                    positionMenu={true}
                    id={id}
                    name='Row'
                    type='row'
                />
                {childrenIds.map((childrenId) => (
                    <ColContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                    />
                ))}
            </RowComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.ConstructorViewReducer[ownProps.id],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)