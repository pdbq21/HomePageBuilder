/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
export default function ElementComponent(props) {
    const {type, handleClickContextMenu, handleTextEditor, styles, TinyMCE, handleChangeTextEditor} = props;
    let element;
    if (typeof styles.background === "undefined") {
        switch (type) {

            case 'image':
                const {link} = props;
                if (typeof link === "undefined") {
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
                } else {
                    element = (
                        <div className="pb-element pb-image-element pb-default-element">
                            <img src={link} alt=""/>
                        </div>);
                }

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
                const {text} = props;
                element = (
                    <div
                        className="pb-element pb-text-element"
                        style={{
                            'backgroundColor': `rgba(${r},${g},${b},${a})`,
                            'zIndex': 2,
                            'position': 'relative',
                            'marginTop': `${styles.margin.marginTop}px`,
                            'marginRight': `${styles.margin.marginRight}px`,
                            'marginBottom': `${styles.margin.marginBottom}px`,
                            'marginLeft': `${styles.margin.marginLeft}px`,
                            'paddingTop': `${styles.padding.paddingTop}px`,
                            'paddingRight': `${styles.padding.paddingRight}px`,
                            'paddingBottom': `${styles.padding.paddingBottom}px`,
                            'paddingLeft': `${styles.padding.paddingLeft}px`,
                        }}
                    >
                        <TinyMCE
                            content={(text)? text : "<p>This is the initial content of the editor</p>"}
                            config={{
                                inline: true,
                                menubar: false,
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect fontselect',
                                fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                                font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n'
                            }}
                            onClick={handleTextEditor}
                            onChange={handleChangeTextEditor}
                        />
                    </div>);
                break;
            case 'button':
                element = (
                    <div
                        className="pb-element pb-button-element"
                        style={{
                            'backgroundColor': `rgba(${r},${g},${b},${a})`,
                            'marginTop': `${styles.margin.marginTop}px`,
                            'marginRight': `${styles.margin.marginRight}px`,
                            'marginBottom': `${styles.margin.marginBottom}px`,
                            'marginLeft': `${styles.margin.marginLeft}px`,
                            'paddingTop': `${styles.padding.paddingTop}px`,
                            'paddingRight': `${styles.padding.paddingRight}px`,
                            'paddingBottom': `${styles.padding.paddingBottom}px`,
                            'paddingLeft': `${styles.padding.paddingLeft}px`,
                        }}
                    >
                        <a href="#" className="btn btn-primary">
                            <TinyMCE
                                content='<span>Sample button text</span>'
                                config={{
                                    inline: true,
                                    allow_html_in_named_anchor: true,
                                    linkchecker_api_key: 'idds1ja21nirk6ca3rxkpxi0mirk22w2zyvzz1f3y15dzelg',
                                    plugins: 'link image code',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                }}
                                onClick={handleTextEditor}
                            />
                        </a>

                    </div>);
                break;
            case 'heading':
                element = (
                    <div
                        className="pb-element pb-heading-element"
                        style={{
                            'backgroundColor': `rgba(${r},${g},${b},${a})`,
                            'zIndex': 2,
                            'position': 'relative',
                            'marginTop': `${styles.margin.marginTop}px`,
                            'marginRight': `${styles.margin.marginRight}px`,
                            'marginBottom': `${styles.margin.marginBottom}px`,
                            'marginLeft': `${styles.margin.marginLeft}px`,
                            'paddingTop': `${styles.padding.paddingTop}px`,
                            'paddingRight': `${styles.padding.paddingRight}px`,
                            'paddingBottom': `${styles.padding.paddingBottom}px`,
                            'paddingLeft': `${styles.padding.paddingLeft}px`,
                        }}
                    >
                        <TinyMCE
                            content="<h2>This is simple heading</h2>"
                            config={{
                                inline: true,
                                linkchecker_api_key: 'idds1ja21nirk6ca3rxkpxi0mirk22w2zyvzz1f3y15dzelg',
                                plugins: 'link image code',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                            }}
                            onClick={handleTextEditor}
                        />
                    </div>);
                break;
            case 'link':
                element = (
                    <div
                        className="pb-element pb-link-element"
                        style={{
                            'backgroundColor': `rgba(${r},${g},${b},${a})`,
                            'marginTop': `${styles.margin.marginTop}px`,
                            'marginRight': `${styles.margin.marginRight}px`,
                            'marginBottom': `${styles.margin.marginBottom}px`,
                            'marginLeft': `${styles.margin.marginLeft}px`,
                            'paddingTop': `${styles.padding.paddingTop}px`,
                            'paddingRight': `${styles.padding.paddingRight}px`,
                            'paddingBottom': `${styles.padding.paddingBottom}px`,
                            'paddingLeft': `${styles.padding.paddingLeft}px`,
                        }}
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
