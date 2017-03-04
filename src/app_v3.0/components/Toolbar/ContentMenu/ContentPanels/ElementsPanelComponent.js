/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';
import {DragSource} from 'react-dnd'
//import component
function ElementItem(props) {
    const {name, classIcon, connectDragSource} = props;
    return connectDragSource(
        <div className="col-4">
            <div className="pb-sketch pb-element-sketch">
                <i className={`fa ${classIcon} pb-element-sketch-icon`}/>
                <span className="pb-element-sketch-caption">{name}</span>
            </div>
        </div>
    );
}

const ElementItemDrag = DragSource('DROP_ELEMENT', {
    beginDrag(props) {
        return {
            elementType: props.name
        };
    },

    endDrag() {
    }
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(ElementItem);

export default function ElementsPanelComponent() {

    return (
        <div className="">
            <h3 className="pb-menu-caption">
                <i className="fa fa-puzzle-piece pb-menu-caption-icon"/>Elements
            </h3>

            <div className="pb-panel pb-collapsed-panel">
                <h4 className="pb-panel-caption">Common</h4>

                <div className="pb-panel-content row no-gutters clearfix">
                    <ElementItemDrag
                        name="link"
                        classIcon="fa-link"
                    />
                    <ElementItemDrag
                        name="image"
                        classIcon="fa-photo"
                    />
                    <ElementItemDrag
                        name="heading"
                        classIcon="fa-header"
                    />
                    <ElementItemDrag
                        name="text"
                        classIcon="fa-file-text"
                    />
                    {/*<ElementItemDrag
                        name="gallery"
                        classIcon="fa-desktop"
                    />*/}
                    <ElementItemDrag
                        name="button"
                        classIcon="fa-plus-square-o"
                    />
                    <ElementItemDrag
                        name="icon"
                        classIcon="fa-grav"
                    />

                </div>
            </div>
        </div>
    );
}

/*                    <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-link pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Link</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-photo pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Image</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-header pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Heading</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-file-text pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Text</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-desktop pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Gallery</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-plus-square-o pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Button</span>
 </div>
 </div>

 <div className="col-4">
 <div className="pb-sketch pb-element-sketch">
 <i className="fa fa-grav pb-element-sketch-icon"/>
 <span className="pb-element-sketch-caption">Icons</span>
 </div>
 </div>*/