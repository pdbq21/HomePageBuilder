/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ColComponent from '../../components/ConstructorView/ColComponent';
import ElementComponent from '../../components/ConstructorView/ElementComponent';
import DropAreaComponent from '../../components/DropAreaComponent';
//containers
import BarMenuContainer from '../BarMenuContainer';

// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class ColContainer extends Component {
    constructor(props) {
        super(props);

        this.handelDropElement = this.handelDropElement.bind(this);
        this.handleDragOverElement = this.handleDragOverElement.bind(this);
    }

    handelDropElement(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        //console.log('drop');
        const {ActionCreateNode, ActionAddNode, ActionAddElementType} = this.props.mapDispactchCol;
        const {elementType} = this.props.mapStateToolbar;

        if (elementType !== '') {
            const childrenId = ActionCreateNode(id).nodeId;
            ActionAddNode(id, childrenId);
            ActionAddElementType(childrenId, elementType);
        }

    }

    handleDragOverElement(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }


    render() {
        // todo: const {id, parentId} = this.props; for delete function
        const {id} = this.props;
        const {columnsIndex, childrenIds} = this.props.mapStateCol;
        const {isActiveDragElement} = this.props.mapStateToolbar;

        return (
            <ColComponent
                col={columnsIndex}
                id={id}
            >
                {childrenIds.map((childrenId) => (
                    <ElementComponent
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                        type={this.props.mapState[childrenId].elementType}
                    >
                        <BarMenuContainer
                            positionMenu={true}
                            id={childrenId}
                            name={this.props.mapState[childrenId].elementType}
                            type="col"
                            parentId={id}
                        />
                    </ElementComponent>
                ))}
                <DropAreaComponent
                    classActiveDropArea={(isActiveDragElement) ? 'pb-area--green' : 'pb-area--gray'}
                    id={id}
                    handelDrop={this.handelDropElement}
                    handleDragOver={this.handleDragOverElement}
                    isFirst={false}
                    name='element'
                />
            </ColComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapState: state.ConstructorViewReducer,
        mapStateCol: state.ConstructorViewReducer[ownProps.id],
        mapStateToolbar: state.ToolbarReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchCol: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColContainer)