/**
 * Created by ruslan on 23.02.17.
 */

// import lib
import React, {Component} from 'react';
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

    }

    componentWillMount() {
        const {colorControlBar} = this.props.mapCurrentState;
        if (typeof colorControlBar === "undefined") {
            this.getColor();
        }
    }

    componentDidMount() {
        //empty
    }


    getColor() {
        const {currentId} = this.props;
        const {ActionColorPicker} = this.props.mapDispactchWorkArea;
        return ActionColorPicker(currentId);
    }

    /*handleClickControlBar(event) {
        event.preventDefault();
        if (event.type === 'contextmenu') {
// if click right button
            console.log(event.nativeEvent.offsetY);

            const {currentId} = this.props;
            const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
            ActionActiveContextMenu(currentId, event.nativeEvent.offsetY);
            this.focusContextMenu();
        } else {
            // if click left button => event.type === 'click'
        }
    }*/

    /*handelBlurContextMenu() {
        const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
        ActionActiveContextMenu('', 0);
        /!*let currentTarget = e.currentTarget;

         setTimeout(function () {
         if (!currentTarget.contains(document.activeElement)) {
         console.log('component officially blurred');
         }
         }, 0);*!/
        /!*const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
         //Todo: need change this logic
         setTimeout(function () {
         ActionActiveContextMenu('');
         }, 200);*!/
    }*/

    /*handleRemove(id, parentId){
        //console.log(parentId, id);
        const {ActionRemoveChild, ActionDeleteNode, ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
        //const {ActionDeleteNodeStyles} = this.props.mapDispactchEditPanel;
        ActionRemoveChild(parentId, id);
        ActionDeleteNode(id);
        ActionActiveContextMenu('', 0);
// remove styles
        //ActionDeleteNodeStyles(id);
    }*/

    render() {
				const {currentId, parentId, structure, connectDragSource, handleContextMenu} = this.props;
				const {colorControlBar} = this.props.mapCurrentState;
				//const {activeContextMenu} = this.props.mapStateWorkArea;
				//const display = (activeContextMenu.id === currentId) ? 'block' : 'none';
//classActiveMenu
				return connectDragSource(<div>
            <ControlBarComponent
                backgroundColor={colorControlBar}
                handleClickControlBar={(event) => handleContextMenu(event, currentId, parentId, structure)}
            >
            </ControlBarComponent>
        </div>);


		}
}


function mapStateToProps(state, ownProps) {
    return {
        mapCurrentState: state.WorkAreaReducer[ownProps.currentId],
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarContainer)