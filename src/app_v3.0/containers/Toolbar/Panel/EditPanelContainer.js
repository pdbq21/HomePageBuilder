/**
 * Created by ruslan on 02.03.17.
 */
// import lib
import React, {Component} from 'react';
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import container
import ColorPickerContainer from '../../ColorPickerContainer'
//import component
import EditPanelComponent from '../../../components/Toolbar/ContentMenu/ContentPanels/EditPanelComponent'
// import actions
//import * as ToolbarActions from '../../actions/ToolbarActions'

class EditPanelContainer extends Component {
		/* constructor(props) {
		 super(props);
		 }*/

		componentDidMount() {
				// empty
				console.log('did');
		}
		componentWillMount() {
				console.log('will');
				// empty
		}
/*
renderEditPanel(){

}**/

		render() {
				console.log('render');
				const {ActiveStructure} = this.props.mapStateEditPanel;
console.log(ActiveStructure);
				return (
						<EditPanelComponent>
								<ColorPickerContainer />
						</EditPanelComponent>
				);
		}
}


function mapStateToProps(state) {
		return {
				mapStateEditPanel: state.EditPanelReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPanelContainer)