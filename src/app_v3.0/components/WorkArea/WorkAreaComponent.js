/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component

/*import SectionComponent from './SectionComponent'
import RowComponent from './RowComponent'
import ControlBarComponent from './ControlBarComponent'*/


export default function WorkAreaComponent(props) {
const { children, handleClickAddSection } = props;
    return (
        <div className="pb-workarea col-sm-12 col-md-7 col-lg-8 col-xl-9">
            {/* section */}
            {children}

            {/* custom code */}

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
                                            {/* e.preventDefault() */}
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
                                            {/* e.preventDefault() -> click on input below */}
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
                                            {/* e.preventDefault() -> click on input below */}
                                        </button>
                                        <input type="file" className="pb-gallery-element-input"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="pb-element pb-button-element">
                                        <a href="#" className="btn btn-primary">
                                            Sample button text
                                            {/* e.preventDefault() */}
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

            {/* custom code */}

            <button
                className="pb-add-section-button"
                onClick={handleClickAddSection}
            >
                <i className="pb-icon-plus"/>
            </button>
        </div>
    );
}

/*            {Object.keys(Colors).map((name) => (
 <SectionComponent
 color={Colors[name]}
 name={name}
 />
 ))}*/