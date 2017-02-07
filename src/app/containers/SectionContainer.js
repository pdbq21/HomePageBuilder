/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import SectionComponent from '../components/ConstructorView/SectionComponent';
import RowComponent from '../components/ConstructorView/RowComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'

// Application
class SectionContainer extends Component {
    render() {

        return (
            <SectionComponent >
                <RowComponent>

                </RowComponent>
            </SectionComponent>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state SectionContainer', state);
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)