/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import component
import WorkAreaComponent from '../../components/WorkArea/WorkAreaComponent'
// import actions
import * as actionsConstructorView from '../../actions/WorkAreaActions'

class WorkAreaContainer extends Component {
    constructor(props) {
        super(props);

        //this.handleClickAddSection = this.handleClickAddSection.bind(this);
    }

    componentDidMount() {
        // empty
    }

    /*handleClickAddSection() {
     //console.log('click Add Section');
     const {id} = this.props;
     const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchConstructorView;
     const childrenId = ActionCreateNode(id).nodeId;
     ActionAddNode(id, childrenId);
     }*/
    render() {

        return (
            <WorkAreaComponent

            >

            </WorkAreaComponent>
        );
    }
}


function mapStateToProps(state) {
    //console.log('state ConstructorViewContainer', state);
    return {
        mapStateConstructorViewReducer: state.ConstructorViewReducer,
        mapStateToolbarReducer: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaContainer)