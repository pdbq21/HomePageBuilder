/**
 * Created by ruslan on 02.03.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import container
import ColorPickerContainer from '../../ColorPickerContainer'
//import component
import EditPanelComponent from '../../../components/Toolbar/ContentMenu/ContentPanels/EditPanelComponent'
// import actions
import * as EditPanelActions from '../../../actions/EditPanelActions'

class EditPanelContainer extends Component {
		constructor(props) {
				super(props);
				this.renderEditPanel = this.renderEditPanel.bind(this);
				this.handleChangeColor = this.handleChangeColor.bind(this);
		}

		componentDidMount() {
				// empty
		}

		componentWillMount() {
				// empty
		}

		handleChangeColor(id, color){
const {ActionChangeBackgroundColor} = this.props.mapDispactchEditPanel;
console.log(id, color.rgb);
				ActionChangeBackgroundColor(id, color.rgb);
		}

		renderEditPanel() {
				const {ActiveStructure} = this.props.mapStateEditPanel;
				const {currentStyle} = this.props.mapStateEditPanel[ActiveStructure.id];
				const {backgroundColor} = currentStyle;
				//const {} = this.props.mapStateWorkArea;
				console.log(currentStyle);
				/// ActiveStructure => id, name
				//currentStyle
				/*switch (ActiveStructure.name) {
				 case 'Section':
				 case 'Row':
				 return;
				 case 'Image':
				 return;
				 case 'Link':
				 return;
				 case 'Heading':
				 case 'Text':
				 return;
				 case 'Button':
				 return;
				 case 'Gallery':
				 return;
				 case 'Icons':
				 return;

				 default:
				 return;
				 }*/


				return (
						<EditPanelComponent>
								<ColorPickerContainer
color={backgroundColor}
handleChangeColor={(color) => this.handleChangeColor(ActiveStructure.id, color)}
								/>
						</EditPanelComponent>
				);
		}

		render() {

				return (
						this.renderEditPanel()
				);
		}
}


function mapStateToProps(state) {
		return {
				mapStateEditPanel: state.EditPanelReducer,
				mapStateWorkArea: state.WorkAreaReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchEditPanel: bindActionCreators(EditPanelActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPanelContainer)