/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ConstructorViewBlockComponent from '../../components/ConstructorView/ConstructorViewBlockComponent';

//import SectionComponent from '../components/ConstructorView/SectionComponent';

// containers
import SectionContainer from './SectionContainer';
// actions
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class ConstructorViewContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handelDrop = this.handelDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
    }
    componentDidMount() {
        this.enterCounter = 0;
    }

    handleClickAddSection() {
        //console.log('click Add Section');
        const {id} = this.props;
        const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchConstructorView;
        const childrenId = ActionCreateNode(id).nodeId;
        ActionAddNode(id, childrenId);
    }

    handleDragStart(){
        console.log('drag start');
    }

    handleDragEnd(event, id){
        event.preventDefault();
        console.log('drag end', id);
        const {ActionMoveEnd} = this.props.mapDispactchConstructorView;
        ActionMoveEnd(id);
    }

    handelDrop(event, id) {
        // Stop default browser behavior

        event.preventDefault();
console.log('drop', id);
        /*const {ActionMoveEnd} = this.props.mapDispactchConstructorView;
        ActionMoveEnd(id);*/

    }

    handleDragOver(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        console.log('leave');
        const {ActionDragLeaveDropArea} = this.props.mapDispactchConstructorView;
        --this.enterCounter;
        if (this.enterCounter === 0) {
            ActionDragLeaveDropArea(id);
        }
    }
    handleDragEnter(event, id) {
        // Stop default browser behavior
        event.preventDefault();
        console.log('enter', this.enterCounter);
        //++
        ++this.enterCounter;
        const {ActionDragEnterDropArea} = this.props.mapDispactchConstructorView;
        ActionDragEnterDropArea(id);
    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateConstructorViewReducer[id];

        return (
            <ConstructorViewBlockComponent
                handleClickAddSection={this.handleClickAddSection}
                handleDragStart={this.handleDragStart}
                handleDragEnd={this.handleDragEnd}

            >
                {childrenIds.map((childrenId) => (
                    <SectionContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}

                        handelDrop={this.handelDrop}
                        handleDragEnd={this.handleDragEnd}
                        handleDragOver={this.handleDragOver}
                        handleDragEnter={this.handleDragEnter}
                        handleDragLeave={this.handleDragLeave}
                    />
                ))}

            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state ConstructorViewContainer', state);
    return {
        mapStateConstructorViewReducer: state.ConstructorViewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)