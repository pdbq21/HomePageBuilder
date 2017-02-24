/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import component
import SectionComponent from '../../components/WorkArea/SectionComponent'
import DropAreaComponent from '../../components/WorkArea/DropAreaComponent'
// import container
import ControlBarContainer from './ControlBarContainer'

import * as WorkAreaActions from '../../actions/WorkAreaActions'

class SectionContainer extends Component {
		constructor(props) {
				super(props);

				this.handleClickAddSection = this.handleClickAddSection.bind(this);
		}

		componentDidMount() {
				// empty
		}

		handleClickAddSection() {

		}

		render() {
				const {id} = this.props;
				return (
						<SectionComponent

						>
								<ControlBarContainer
										currentId={id}
								/>
								<DropAreaComponent
										name="Row"
								/>
						</SectionComponent>
				);
		}
}


function mapStateToProps(state) {
		//console.log('state WorkAreaContainer', state);
		return {
				mapStateWorkArea: state.WorkAreaReducer,
				mapStateToolbar: state.ToolbarReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)