/**
 * Created by ruslan on 23.02.17.
 */

// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import component
import ControlBarComponent from '../../components/WorkArea/ControlBarComponent'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

class ControlBarContainer extends Component {
		constructor(props) {
				super(props);

				this.getColor = this.getColor.bind(this);
		}

		componentWillMount() {
				const {colorControlBar} = this.props.mapStateWorkArea;
				if (typeof colorControlBar === "undefined"){
						this.getColor();
				}
		}

		componentDidMount() {
				// empty
		}

		getColor() {
				const {currentId} = this.props;
				const {ActionColorPicker} = this.props.mapDispactchWorkArea;
				return ActionColorPicker(currentId);
		}

		render() {
				const {colorControlBar} = this.props.mapStateWorkArea;
				return (
						<ControlBarComponent
								backgroundColor={colorControlBar}
						>

						</ControlBarComponent>
				);
		}
}


function mapStateToProps(state, ownProps) {
		return {
				mapStateWorkArea: state.WorkAreaReducer[ownProps.currentId],
				mapStateToolbar: state.ToolbarReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarContainer)