/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, { Component } from 'react';

//import container
import ControlBarContainer from './ControlBarContainer'
//import component
import RowComponent from '../../components/WorkArea/RowComponent'


export default  class RowContainer extends Component {
    constructor(props) {
        super(props);

        this.handleDropRow = this.handleDropRow.bind(this);
    }

    componentDidMount() {
        // empty
    }



    handleDropRow(){

    }

    render() {
        const {id} = this.props;
        return (
            <RowComponent>
                <ControlBarContainer
                    currentId={id}
                />
            </RowComponent>
        );
    }
}