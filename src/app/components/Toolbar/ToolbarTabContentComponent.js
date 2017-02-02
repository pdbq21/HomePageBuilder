/**
 * Created by ruslan on 01.02.17.
 */
import React, { Component } from 'react'

export default class ToolbarTabContentComponent extends Component{
    constructor(props){
        super(props);

        this.handelDragStart = this.handelDragStart.bind(this);
        this.handelDragEnd = this.handelDragEnd.bind(this);
    }

    handelDragStart(event){
        console.log('drag start');
        console.log('drag start props', this.props);
this.props.OnDragStart(event.target);
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text", event.target.getAttribute('id'));
    }

    handelDragEnd(event){
        console.log('drag end');
        this.props.OnDragEnd(event.target);
    }

    render(){
        return (<div className="toolbar-block__tab-panel"
                     onDragStart={this.handelDragStart}
                     onDragEnd={this.handelDragEnd}
        >
            <h4 className="name-block">list tabs content</h4>
            <div className="content-items type-image"
                 draggable='true'
            >
                Image
            </div>
            <div className="content-items type-text"
                 draggable='true'
            >
                Text
            </div>
            <div className="content-items type-button"
                 draggable='true'
            >
                Button
            </div>

        </div>);

    }
    }