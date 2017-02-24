/**
 * Created by ruslan on 23.02.17.
 */

// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//actions
import * as ToolbarActions from '../../actions/ToolbarActions'
//import component
import ContentMenuComponent from '../../components/Toolbar/ContentMenu/ContentMenuComponent'
import TabsNavigationComponent from '../../components/Toolbar/ContentMenu/TabsNavigationComponent'
// import container
import ContentPanelsContainer from './ContentPanelsContainer'
// Application
class ContentMenuContainer extends Component {

		render() {

				return (
						<div>
								<ContentMenuComponent>
										<TabsNavigationComponent />
										<ContentPanelsContainer />
								</ContentMenuComponent>
						</div>

				);
		}
}

function mapStateToProps(state) {
		return {
				mapStateWorkArea: state.WorkAreaReducer,
				mapStateToolbar: state.ToolbarReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(ToolbarActions, dispatch)
		}
}




export default connect(mapStateToProps, mapDispatchToProps)(ContentMenuContainer)