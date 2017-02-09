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
// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class RowContainer extends Component {
    constructor(props) {
        super(props);
        this.createColumnsChildren = this.createColumnsChildren.bind(this)
    }

    componentWillMount() {
        this.createColumnsChildren();
    }

    createColumnsChildren() {
        const {ActionCreateId, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        const {columnsIndex} = this.props.mapStateRow;
        const {id} = this.props;
        columnsIndex.map((col) => {
            const childrenId = ActionCreateId().nodeId;
            ActionAddNode(id, childrenId);
            ActionAddColumnsData(childrenId, col);
        });

        /*return (<ColContainer
            id={childrenId}
            col={col}
            key={`key-${col}-${index}`}
        />);*/
    }

    render() {
        const {id, parentId} = this.props;
        console.log(this.props);

        // id array the current Section for generating Rows

       // const {columnsIndex} = this.props.mapStateRow;

        return (
            <RowComponent
                id={id}
            >

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