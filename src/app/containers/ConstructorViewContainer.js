/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

// components
import ConstructorViewBlockComponent from '../components/ConstructorView/ConstructorViewBlockComponent';
import SectionComponent from '../components/ConstructorView/SectionComponent';

// actions
import * as actionsConstructorView from '../actions/ConstructorViewActions'

// Application
class ConstructorViewContainer extends Component {
    render() {
        //console.log('ConstructorViewContainer props: ', this.props);
        const {activeDragStructure} = this.props.mapStateToolbar;
        const { ActionOnDrop, ActionCreateId, ActionAddNewSection } = this.props.mapDispactchConstructorView;

        return (
            <ConstructorViewBlockComponent
                classNameAddNewSection={(activeDragStructure) ? 'active-new-section-block' : ''}
                onDropAction={ActionOnDrop}
                createIdAction={ActionCreateId}
                addNewSectionAction={ActionAddNewSection}
            >
                {<SectionComponent />}
            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state ConstructorViewContainer', state);
    return {
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)