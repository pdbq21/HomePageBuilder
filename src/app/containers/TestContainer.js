/**
 * Created by ruslan on 27.01.17.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'
import * as testActions from '../actions/TestActions'

class TestContainer extends Component {
    render() {
        const { test } = this.props;
        const { actionTest } = this.props.testActions;

        return <div className='row'>
            <TestComponent name={test.name} actionTest={actionTest} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testActions: bindActionCreators(testActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)