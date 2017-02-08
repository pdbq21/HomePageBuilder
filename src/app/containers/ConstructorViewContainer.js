/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ConstructorViewBlockComponent from '../components/ConstructorView/ConstructorViewBlockComponent';
//import SectionComponent from '../components/ConstructorView/SectionComponent';

// containers
import SectionContainer from './SectionContainer';
// actions
import * as actionsConstructorView from '../actions/ConstructorViewActions'

// Application
class ConstructorViewContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);
    }

    handleClickAddSection() {
        //console.log('click Add Section');
        const {id} = this.props;
        const {ActionCreateId, ActionAddNode} = this.props.mapDispactchConstructorView;
        const childrenId = ActionCreateId().nodeId;
        //console.log(id, childrenId);
        ActionAddNode(id, childrenId);
    }


    render() {
        //console.log('ConstructorViewContainer props: ', this.props);
       // console.log(this.props.mapStateCVR[this.props.id], this.props.mapStateConstructorViewReducer);
        //const {childrenIds} = this.props.mapStateConstructorViewReducer;
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateConstructorViewReducer[id];

        //console.log('***********', rowIds);
        //const { /*ActionOnDropSection, */ActionCreateId, ActionAddNewSection } = this.props.mapDispactchConstructorView;
        /*let SectionComponentHtml = childrenIds.map((childrenId) => (<div key={childrenId}>
                <SectionComponent
                    id={childrenId}
                    parentId={id}
                    classNameActiveAddSection={(activeDragStructure) ? 'pb-area--green' : ''}
                    handelDrop={this.handelDropRow}
                    handleDragOver={this.handleDragOverRow}
                />
            </div>)
        );*/

        //const {activeDragStructure} = this.props.mapStateToolbar;

        return (
            <ConstructorViewBlockComponent
                /*onDropSectionAction={ActionOnDropSection}*/
                /*createIdAction={ActionCreateId}
                 addNewSectionAction={ActionAddNewSection}
                 id={id}
                 rowIds={rowIds}*/
                handleClickAddSection={this.handleClickAddSection}

            >
                {childrenIds.map((childrenId) => (
                    <SectionContainer
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
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