/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
export default function ElementComponent(props) {

    const {type} = props;
    let element;
    switch (type) {
        case 'Text':
            element = (<div className="pb-element pb-text-element">
                <p>Sample paragraph text</p>
            </div>);
            break;
        case 'Image':
            element = (<div className="pb-element pb-image-element pb-default-element">
                <i className="pb-image-element-icon fa fa-image"/>
                <span className="pb-image-element-caption">
                                            Drop your image here OR:
                                        </span>
                <button className="pb-image-element-button btn btn-primary">
                    Select an image
                    {/* e.preventDefault() -> click on input below */}
                </button>
                <input type="file" className="pb-image-element-input"/>
            </div>);
            break;
        case 'Button':
            element = (<div className="pb-element pb-button-element">
                <a href="#" className="btn btn-primary">
                    Sample button text
                    {/* e.preventDefault() */}
                </a>
            </div>);
            break;
        case 'Title':
            element = (<div className="pb-element pb-heading-element">
                <h2>Sample heading</h2>
            </div>);
            break;
        case 'Link':
            element = (<div className="pb-element pb-link-element">
                <a href="#">
                    Sample link
                    {/* e.preventDefault() */}
                </a>
            </div>);
            break;
        case 'Gallery':
            element = (<div className="pb-element pb-gallery-element pb-default-element">
                <i className="pb-gallery-element-icon fa fa-desktop"/>
                <span className="pb-gallery-element-caption">
                                            Drop your images here OR:
                                        </span>
                <button className="pb-gallery-element-button btn btn-primary">
                    Select images
                    {/* e.preventDefault() -> click on input below */}
                </button>
                <input type="file" className="pb-gallery-element-input"/>
            </div>);
            break;
        case 'Icon':
            element = (<div className="pb-element pb-icon-element">
                <i className="fa fa-grav"/>
            </div>);
            break;
        default:
            break;
    }
    return (
        <div className=''>

            {element}

        </div>
    );
}


/*

 <div className="pb-section">
 <div className="pb-bar pb-control-bar"></div>
 <div className="pb-section-content">
 <div className="pb-row written-row">
 <div className="pb-bar pb-control-bar"></div>
 <div className="pb-row-content">
 <div className="row">
 <div className="col">
 <div className="pb-element pb-link-element">
 <a href="#">
 Sample link
 {/!* e.preventDefault() *!/}
 </a>
 </div>
 </div>
 <div className="col">
 <div className="pb-element pb-image-element pb-default-element">
 <i className="pb-image-element-icon fa fa-image"/>
 <span className="pb-image-element-caption">
 Drop your image here OR:
 </span>
 <button className="pb-image-element-button btn btn-primary">
 Select an image
 {/!* e.preventDefault() -> click on input below *!/}
 </button>
 <input type="file" className="pb-image-element-input"/>
 </div>
 </div>
 <div className="col">
 <div className="pb-element pb-heading-element">
 <h2>Sample heading</h2>
 </div>
 </div>
 </div>

 <div className="row">
 <div className="col">
 <div className="pb-element pb-text-element">
 <p>Sample paragraph text</p>
 </div>
 </div>
 <div className="col">
 <div className="pb-element pb-gallery-element pb-default-element">
 <i className="pb-gallery-element-icon fa fa-desktop"/>
 <span className="pb-gallery-element-caption">
 Drop your images here OR:
 </span>
 <button className="pb-gallery-element-button btn btn-primary">
 Select images
 {/!* e.preventDefault() -> click on input below *!/}
 </button>
 <input type="file" className="pb-gallery-element-input"/>
 </div>
 </div>
 <div className="col">
 <div className="pb-element pb-button-element">
 <a href="#" className="btn btn-primary">
 Sample button text
 {/!* e.preventDefault() *!/}
 </a>
 </div>
 </div>
 </div>

 <div className="row">
 <div className="col">
 <div className="pb-element pb-icon-element">
 <i className="fa fa-grav"/>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 */
