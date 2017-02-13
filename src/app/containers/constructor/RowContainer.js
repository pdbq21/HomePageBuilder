/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import RowComponent from '../../components/ConstructorView/RowComponent';
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
        const {id, parentId} = this.props;
        //console.log(this.props);
        // id array the current Section for generating Rows
        const {childrenIds, isActiveMenu} = this.props.mapStateRow;
        return (
            <RowComponent
                id={id}
            >
                <BarMenuContainer
                    classActiveMenu={(isActiveMenu) ? 'is-active' : ''}
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