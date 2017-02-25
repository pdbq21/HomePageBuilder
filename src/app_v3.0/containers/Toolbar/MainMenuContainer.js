/**
 * Created by ruslan on 24.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import container

//import component
import MainMenuComponent from '../../components/Toolbar/MainMenu/MainMenuComponent'
// import actions
import * as ToolbarActions from '../../actions/ToolbarActions'

class MainMenuContainer extends Component {
    constructor(props) {
        super(props);
this.handleToggleContentMenu = this.handleToggleContentMenu.bind(this)
    }

    componentDidMount() {
        // empty
    }

    handleToggleContentMenu(){
const {ActionToggleContentMenu} = this.props.mapDispactchToolbar;
        ActionToggleContentMenu();
	}

    render() {

        return (
			<MainMenuComponent
				handleToggleContentMenu={this.handleToggleContentMenu}
			/>
        );
    }
}


function mapStateToProps(state) {
    return {
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchToolbar: bindActionCreators(ToolbarActions, dispatch)
    }
}

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer)