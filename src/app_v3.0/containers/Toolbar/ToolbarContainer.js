/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import container
import ContentMenuContainer from './ContentMenuContainer'
import MainMenuContainer from './MainMenuContainer'
//import component
import ToolbarComponent from '../../components/Toolbar/ToolbarComponent'
// import actions
//import * as ToolbarActions from '../../actions/ToolbarActions'

class ToolbarContainer extends Component {
   /* constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        // empty
    }



    render() {

        return (
            <ToolbarComponent>
                <ContentMenuContainer />

                <MainMenuContainer />
            </ToolbarComponent>
        );
    }
}


function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer)