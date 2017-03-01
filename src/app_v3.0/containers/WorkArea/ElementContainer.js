/**
 * Created by ruslan on 23.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ElementComponent from '../../components/WorkArea/ElementComponent'
//containers
// actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

// Application
class ElementContainer extends Component {
		/*constructor(props) {
				super(props);
		}*/


		render() {
				const {elementType} = this.props.mapStateElement;
				//const {id} = this.props;

				return (
            <ElementComponent
                type={elementType}
            >
            </ElementComponent>

				);
		}
}

function mapStateToProps(state, ownProps) {
		return {
				mapStateElement: state.WorkAreaReducer[ownProps.id],
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementContainer)