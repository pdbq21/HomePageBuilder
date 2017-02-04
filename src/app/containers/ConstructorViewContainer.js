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
        //const {activeDragStructure} = this.props.mapStateConstructorViewReducer;
        //console.log('***********', this.props);
        const { /*ActionOnDropSection, */ActionCreateId, ActionAddNewSection } = this.props.mapDispactchConstructorView;

        return (
            <ConstructorViewBlockComponent
                classNameAddNewSection={(activeDragStructure) ? 'active-new-section-block' : ''}
                /*onDropSectionAction={ActionOnDropSection}*/
                createIdAction={ActionCreateId}
                addNewSectionAction={ActionAddNewSection}
                id={this.props.id}
            >
                {<SectionComponent />}
            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state ConstructorViewContainer', state, ownProps);
    return {
        mapStateToolbar: state.ToolbarReducer,
        mapStateConstructorViewReducer: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewContainer)