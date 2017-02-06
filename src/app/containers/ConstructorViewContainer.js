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
        const { id } = this.props;
        const {activeDragStructure} = this.props.mapStateToolbar;
        const {rowIds} = this.props.mapStateConstructorViewReducer;
        console.log('***********', rowIds);
        const { /*ActionOnDropSection, */ActionCreateId, ActionAddNewSection } = this.props.mapDispactchConstructorView;


        let SectionComponentHtml = rowIds.map(function (rowId) {
            return (<div key={rowId}>
                <SectionComponent id={rowId} parentId={id}/>
            </div>);
        });

        return (
            <ConstructorViewBlockComponent
                classNameAddNewSection={(activeDragStructure) ? 'active-new-section-block' : ''}
                /*onDropSectionAction={ActionOnDropSection}*/
                createIdAction={ActionCreateId}
                addNewSectionAction={ActionAddNewSection}
                id={id}
                rowIds={rowIds}
            >
                {SectionComponentHtml}
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