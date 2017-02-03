/**
 * Created by ruslan on 31.01.17.
 */
import React, {Component} from 'react'

export default class ConstructorViewBlockComponent extends Component {
    constructor(props) {
        super(props);

        this.handelDrop = this.handelDrop.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
    }

    handelDrop(event) {
        console.log('drop');
        // Stop default browser behavior
        event.preventDefault();
        //const {createIdAction, addNewSectionAction, onDropAction} = this.props;
        const {/*createIdAction,*/ addNewSectionAction} = this.props;
        const sectionId = Date.now();//createIdAction().id;
        const rowId = Date.now();
        addNewSectionAction(sectionId, rowId);
        //id, name
        //this.props.onDropSectionAction();
    }

    handleDragOver(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        // Stop default browser behavior
        event.preventDefault();
    }

    render() {
        //data
        const {classNameAddNewSection} = this.props;

        return (
            <div className="constructor-view">

                {this.props.children}
                <div className={`new-section-block ${classNameAddNewSection}`}
                     onDrop={this.handelDrop}
                     onDragOver={this.handleDragOver}
                     onDragLeave={this.handleDragLeave}
                >
                    Add new section
                </div>

            </div>
        );
    }

}