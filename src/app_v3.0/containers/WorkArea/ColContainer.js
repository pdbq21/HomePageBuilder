/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ColComponent from '../../components/WorkArea/ColComponent'
//import DropAreaComponent from '../../components/WorkArea/DropAreaComponent'
//containers

// actions

// Application
class ColContainer extends Component {
   /* constructor(props) {
        super(props);

    }*/

    render() {
        return (
            <ColComponent

            >
                <div className="card pb-dashed-card">
                    <div className="card-block">
                        <i className="fa fa-hand-paper-o"/> Drag and drop a <b>Element</b> here to start!
                    </div>
                </div>
            </ColComponent>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColContainer)