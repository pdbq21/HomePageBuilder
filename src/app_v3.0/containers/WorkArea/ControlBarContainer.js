/**
 * Created by ruslan on 23.02.17.
 */

// import lib
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import component
import ControlBarComponent from '../../components/WorkArea/ControlBarComponent'
//import ContextMenuComponent from '../../components/WorkArea/ContextMenuComponent'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

class ControlBarContainer extends Component {
    constructor(props) {
        super(props);

        this.getColor = this.getColor.bind(this);
        this.handleClickControlBar = this.handleClickControlBar.bind(this);
        this.handelBlurContextMenu = this.handelBlurContextMenu.bind(this);
    }

    componentWillMount() {
        const {colorControlBar} = this.props.mapCurrentState;
        if (typeof colorControlBar === "undefined") {
            this.getColor();
        }
    }

    componentDidMount() {
        this.focusContextMenu();
    }

    focusContextMenu() {
        setTimeout(() => (ReactDOM.findDOMNode(this.refs.contextMenu).focus()), 0);
    }

    getColor() {
        const {currentId} = this.props;
        const {ActionColorPicker} = this.props.mapDispactchWorkArea;
        return ActionColorPicker(currentId);
    }

    handleClickControlBar(event) {
        event.preventDefault();
        if (event.type === 'contextmenu') {
// if click right button
            console.log(event.clientX, event.clientY);

            const {currentId} = this.props;
            const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
            ActionActiveContextMenu(currentId);
            this.focusContextMenu();
        } else {
            // if click left button => event.type === 'click'
        }
    }

    handelBlurContextMenu() {
        const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
        ActionActiveContextMenu('');
        /*let currentTarget = e.currentTarget;

         setTimeout(function () {
         if (!currentTarget.contains(document.activeElement)) {
         console.log('component officially blurred');
         }
         }, 0);*/
        /*const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
         //Todo: need change this logic
         setTimeout(function () {
         ActionActiveContextMenu('');
         }, 200);*/
    }

    render() {
        const {currentId, connectDragSource} = this.props;
        const {colorControlBar} = this.props.mapCurrentState;
        const {activeContextMenu} = this.props.mapStateWorkArea;
        const display = (activeContextMenu === currentId) ? 'block' : 'none';
//classActiveMenu
        return (
            <div>
                {connectDragSource(<div>
                    <ControlBarComponent
                        backgroundColor={colorControlBar}
                        handleClickControlBar={(event) => this.handleClickControlBar(event)}
                    >
                    </ControlBarComponent>
                </div>)}
                <div>
                    <ul
                        className="pb-context-menu"
                        onBlur={this.handelBlurContextMenu}
                        style={{
                            'display': display
                        }}
                        ref="contextMenu"
                        tabIndex={0}
                    >
                        <li>Remove</li>
                        <li>Copy</li>
                        <li>Paste</li>
                    </ul>
                </div>

            </div>
        );

    }
}


function mapStateToProps(state, ownProps) {
    return {
        mapCurrentState: state.WorkAreaReducer[ownProps.currentId],
        mapStateWorkArea: state.WorkAreaReducer,
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarContainer)