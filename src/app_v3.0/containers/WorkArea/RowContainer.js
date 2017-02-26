/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//import container
import ColContainer from './ColContainer'
import ControlBarContainer from './ControlBarContainer'
//import component
import RowComponent from '../../components/WorkArea/RowComponent'


class RowContainer extends Component {
    constructor(props) {
        super(props);

        this.handleDropRow = this.handleDropRow.bind(this);
    }

    componentDidMount() {
        // empty
    }


    handleDropRow() {
        // empty
    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateRow;
        return (
            <RowComponent>
                <ControlBarContainer
                    currentId={id}
                />
                {
                    childrenIds.map((childrenId, index) => (

                        <ColContainer
                            id={childrenId}
                            parentId={id}
                            index={index}
                            key={`key-${childrenId}`}
                        />

                    ))
                }
            </RowComponent>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.WorkAreaReducer[ownProps.id],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)