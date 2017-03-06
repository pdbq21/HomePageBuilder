/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';
import TinyMCE from 'react-tinymce';

//import component
export default function ElementComponent(props) {
		const {type, handleClickContextMenu, handleEditorChange, styles} = props;
		let element;
		if (typeof styles.background === "undefined") {
				switch (type) {

						case 'image':
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
						case 'icon':
								element = (<div className="pb-element pb-icon-element">
										<i className="fa fa-grav"/>
								</div>);
								break;
						default:
								break;
				}
		} else {
				const {r, g, b, a} = styles.background.backgroundColor;
				switch (type) {
						case 'text':
								element = (
										<div
												className="pb-element pb-text-element"
												style={{'backgroundColor': `rgba(${r},${g},${b},${a})`}}
										>
												<TinyMCE
														content="<p>This is the initial content of the editor</p>"
														config={{
																inline: true,
																linkchecker_api_key: 'idds1ja21nirk6ca3rxkpxi0mirk22w2zyvzz1f3y15dzelg',
																plugins: 'link image code',
																toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
														}}
														onChange={handleEditorChange}
												/>
										</div>);
								break;
						case 'button':
								element = (
										<div
												className="pb-element pb-button-element"
												style={{'backgroundColor': `rgba(${r},${g},${b},${a})`}}
										>
												<a href="#" className="btn btn-primary">
														Sample button text
														{/* e.preventDefault() */}
												</a>
										</div>);
								break;
						case 'heading':
								element = (
										<div
												className="pb-element pb-heading-element"
												style={{'backgroundColor': `rgba(${r},${g},${b},${a})`}}
										>
												<TinyMCE
														content="<h2>This is simple heading</h2>"
														config={{
																inline: true,
																linkchecker_api_key: 'idds1ja21nirk6ca3rxkpxi0mirk22w2zyvzz1f3y15dzelg',
																plugins: 'link image code',
																toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
														}}
														onChange={handleEditorChange}
												/>
										</div>);
								break;
						case 'link':
								element = (
										<div
												className="pb-element pb-link-element"
												style={{'backgroundColor': `rgba(${r},${g},${b},${a})`}}
										>
												<a href="#">
														Sample link
														{/* e.preventDefault() */}
												</a>
										</div>);
								break;

						default:
								break;
				}
		}
		//const {r, g, b, a} = [255, 255, 255, 0];


		return (
				<div className=''
						 onClick={handleClickContextMenu}
						 onContextMenu={handleClickContextMenu}
				>
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
