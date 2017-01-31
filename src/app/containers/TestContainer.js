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
        console.log('container');
        const { testMapState } = this.props;
        console.log(this.props);
        const { ActionsOnClick } = this.props.testActionsDispactch;

        return <div className='row'>
            <TestComponent name={testMapState.name} actionTest={ActionsOnClick} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        testMapState: state.test
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testActionsDispactch: bindActionCreators(testActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)