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
import * as EditPanelActions from '../../actions/EditPanelActions'

class MainMenuContainer extends Component {
    constructor(props) {
        super(props);

        this.handleToggleContentMenu = this.handleToggleContentMenu.bind(this);
        this.handelNavigationItems = this.handelNavigationItems.bind(this);
        this.handelPreview = this.handelPreview.bind(this);
    }

    componentDidMount() {
        // empty
    }

    handleToggleContentMenu() {
        const {ActionToggleContentMenu} = this.props.mapDispactchToolbar;
        ActionToggleContentMenu();
    }

    handelNavigationItems(event) {
        const {activeMenuItem} = this.props.mapStateToolbar;
        if (activeMenuItem === event.target.getAttribute('title')) {
            return;
        }

        const {isActiveEditPanel} = this.props.mapStateEditPanel;
        const {ActionSelectMenuItem} = this.props.mapDispactchToolbar;
        const {ActionIsActiveEditPanel} = this.props.mapDispactchEditPanel;
        //console.log(event.target.getAttribute('title'));
        // event.target.getAttribute('title') => Rows/Elements/Edit/Template
        ActionSelectMenuItem(event.target.getAttribute('title'));
        // todo: fix error if click on Edit in WorkArea
        if (isActiveEditPanel) {
            ActionIsActiveEditPanel('', '', false);
        }
    }

    handelPreview() {
        const {ActionActivePreview} = this.props.mapDispactchToolbar;
        ActionActivePreview(true);
    }

    render() {
        const {menuItems, activeMenuItem} = this.props.mapStateToolbar;
        return (
            <MainMenuComponent
                handleToggleContentMenu={this.handleToggleContentMenu}
                handelNavigationItems={event => this.handelNavigationItems(event)}
                handelPreview={this.handelPreview}
            >
                {menuItems.map((item, index) => (
                    <li
                        key={`key-menu-${item.name}`}
                        className={(activeMenuItem === item.name) ? 'pb-active-menu-item' : ''}
                        title={item.name}
                    >
                        <i className={`fa ${item.classIcon}`}
                           style={{'pointerEvents': 'none'}}
                        />
                    </li>
                ))}
            </MainMenuComponent>
        );
    }
}


function mapStateToProps(state) {
    return {
        mapStateToolbar: state.ToolbarReducer,
        mapStateEditPanel: state.EditPanelReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchToolbar: bindActionCreators(ToolbarActions, dispatch),
        mapDispactchEditPanel: bindActionCreators(EditPanelActions, dispatch)
    }
}

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer)