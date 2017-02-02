/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import ConstructorViewBlockComponent from '../components/ConstructorView/ConstructorViewBlockComponent';

// actions
//import * as testActions from '../actions/TestActions'

// Application
class ConstructorViewContainer extends Component {
    render() {
        const { activeDragStructure } = this.props.mapStateToolbar;
        console.log(activeDragStructure);
        return (
            <ConstructorViewBlockComponent
            classNameAddNewSection={(activeDragStructure)? 'active-new-section-block' : ''}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log('state ConstructorViewContainer', state);
    return {
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)