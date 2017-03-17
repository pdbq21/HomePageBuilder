/**
 * Created by ruslan on 17.02.17.
 */
// import constants from '../constants'
import {
    IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR, CREATE_NODE_STYLES, DELETE_NODE_STYLES,
    SELECT_EDIT_PANEL_NAVIGATION, TOGGLE_COLOR_PICKER, VALUE_IMAGE_LINK, VALUE_PADDING,
    VALUE_MARGIN
} from '../constants/EditPanelConstants'
// default data state
/*
const initialState = {
    isActiveEditPanel: false,
    isActiveColorPicker: false,
    ActiveStructure: {
        id: '',
        name: ''
    },
    defaultStyle: {
        WorkArea: {
            backgroundColor: {
                r: 255,
                b: 255,
                g: 255,
                a: 0
            }
        },

// rgba(255, 255, 0, 1); => let obj = {r: rParse, ... }
        // let obj = parseRgba(string);

        "section": {
            "background": {
                "backgroundImage": "none",
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                },
                "backgroundRepeat": "none",
                "backgroundSize": {
                    "backgroundSizeX": "100%",
                    "backgroundSizeY": "100%"
                },
                "backgroundPosition": {
                    "backgroundPositionX": "auto",
                    "backgroundPositionY": "auto"
                }
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "alignContent": "initial"
        },
        "row": {
            "background": {
                "backgroundImage": "none",
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                },
                "backgroundRepeat": "none",
                "backgroundSize": {
                    "backgroundSizeX": "100%",
                    "backgroundSizeY": "100%"
                },
                "backgroundPosition": {
                    "backgroundPositionX": "auto",
                    "backgroundPositionY": "auto"
                }
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "alignItems": "initial",
        },
// elements
        "link": {
            "background": {
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                }
            },
            "textDecoration": {
                "textDecorationColor": "inherit",
                "textDecorationLine": "none",
                "textDecorationStyle": "solid"
            },
            "color": {
                "r": "0",
                "g": "0",
                "b": "0",
                "a": "0"
            },
            "font": {
                "fontFamily": "",
                "fontStyle": "",
                "fontWeight": "",
                "fontSize": ""
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "lineHeight": "inherit",
            "display": "inline-block",
            "textAlign": "initial"
        },
        "image": {
            "margin": {
                "marginTop": "0",
                "marginRight": "auto",
                "marginBottom": "0",
                "marginLeft": "auto"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "display": "block"
        },
        "icon": {
            "margin": {
                "marginTop": "0",
                "marginRight": "auto",
                "marginBottom": "0",
                "marginLeft": "auto"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "display": "block"
        },
        "heading": {
            "background": {
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                }
            },
            "textDecoration": {
                "textDecorationColor": "inherit",
                "textDecorationLine": "none",
                "textDecorationStyle": "solid"
            },
            "color": {
                "r": "0",
                "g": "0",
                "b": "0",
                "a": "0"
            },
            "font": {
                "fontFamily": "",
                "fontStyle": "",
                "fontWeight": "",
                "fontSize": ""
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "lineHeight": "inherit",
            "display": "block",
            "textAlign": "initial"
        },
        "text": {
            "background": {
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                }
            },
            "textDecoration": {
                "textDecorationColor": "inherit",
                "textDecorationLine": "none",
                "textDecorationStyle": "solid"
            },
            "color": {
                "r": "0",
                "g": "0",
                "b": "0",
                "a": "0"
            },
            "font": {
                "fontFamily": "",
                "fontStyle": "",
                "fontWeight": "",
                "fontSize": ""
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "lineHeight": "inherit",
            "display": "block",
            "textAlign": "initial"
        },
        "button": {
            "background": {
                "backgroundColor": {
                    "r": "255",
                    "g": "255",
                    "b": "255",
                    "a": "0"
                }
            },
            "textDecoration": {
                "textDecorationColor": "inherit",
                "textDecorationLine": "none",
                "textDecorationStyle": "solid"
            },
            "color": {
                "r": "0",
                "g": "0",
                "b": "0",
                "a": "0"
            },
            "font": {
                "fontFamily": "",
                "fontStyle": "",
                "fontWeight": "",
                "fontSize": ""
            },
            "margin": {
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0"
            },
            "padding": {
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            },
            "border": {
                "borderWidth": {
                    "borderWidthTop": "0",
                    "borderWidthRight": "0",
                    "borderWidthBottom": "0",
                    "borderWidthLeft": "0"
                },
                "borderStyle": {
                    "borderStyleTop": "none",
                    "borderStyleRight": "none",
                    "borderStyleBottom": "none",
                    "borderStyleLeft": "none"
                },
                "borderColor": {
                    "borderColorTop": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorRight": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorBottom": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    },
                    "borderColorLeft": {
                        "r": "0",
                        "g": "0",
                        "b": "0",
                        "a": "1"
                    }
                }
            },
            "borderRadius": {
                "borderRadiusTopLeft": "0",
                "borderRadiusTopRight": "0",
                "borderRadiusBottomRight": "0",
                "borderRadiusBottomLeft": "0"
            },
            "lineHeight": "inherit",
            "textAlign": "initial"
        }

    },

    activeTab: 'Content', // default
    tabs: [
        {
            name: 'Content',
        },
        {
            name: 'Styles',
        }
    ],
    imageLink: ''


};
*/
const initialState = {
    isActiveEditPanel: false,
    isActiveColorPicker: false,
    ActiveStructure: {
        id: '',
        name: ''
    },
    defaultStyle: {
        WorkArea: {
            backgroundColor: {
                r: 255,
                b: 255,
                g: 255,
                a: 0
            }
        },
        section: {
            background: {
                backgroundImage: 'none',
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                },
                backgroundRepeat: 'none',
                backgroundSize: {
                    backgroundSizeX: '100%',
                    backgroundSizeY: '100%'
                },
                backgroundPosition: {
                    backgroundPositionX: 'auto',
                    backgroundPositionY: 'auto'
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignContent: 'initial'
        },
        row: {
            background: {
                backgroundImage: 'none',
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                },
                backgroundRepeat: 'none',
                backgroundSize: {
                    backgroundSizeX: '100%',
                    backgroundSizeY: '100%'
                },
                backgroundPosition: {
                    backgroundPositionX: 'auto',
                    backgroundPositionY: 'auto'
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        },
        link: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'inline-block',
            textAlign: 'initial'
        },
        image: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        },
        icon: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        },
        heading: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'block',
            textAlign: 'initial'
        },
        text: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'block',
            textAlign: 'initial'
        },
        button: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            textAlign: 'initial'
        }
    },
    activeTab: 'Content',
    tabs: [
        {
            name: 'Content'
        },
        {
            name: 'Styles'
        }
    ],
    imageLink: 'data:image/jpeg;base64,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',
    id_0: {
        id: 'id_0',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 87,
                    g: 235,
                    b: 75,
                    a: 0.49
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '20',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignContent: 'initial'
        }
    },
    id_1: {
        id: 'id_1',
        currentStyle: {
            background: {
                backgroundImage: 'none',
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                },
                backgroundRepeat: 'none',
                backgroundSize: {
                    backgroundSizeX: '100%',
                    backgroundSizeY: '100%'
                },
                backgroundPosition: {
                    backgroundPositionX: 'auto',
                    backgroundPositionY: 'auto'
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignContent: 'initial'
        }
    },
    id_2: {
        id: 'id_2',
        currentStyle: {
            background: {
                backgroundImage: 'none',
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                },
                backgroundRepeat: 'none',
                backgroundSize: {
                    backgroundSizeX: '100%',
                    backgroundSizeY: '100%'
                },
                backgroundPosition: {
                    backgroundPositionX: 'auto',
                    backgroundPositionY: 'auto'
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignContent: 'initial'
        }
    },
    id_3: {
        id: 'id_3',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 182,
                    g: 64,
                    b: 64,
                    a: 0.63
                }
            },
            margin: {
                marginTop: '20',
                marginRight: '20',
                marginBottom: '20',
                marginLeft: '20'
            },
            padding: {
                paddingTop: '10',
                paddingRight: '10',
                paddingBottom: '10',
                paddingLeft: '10'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_5: {
        id: 'id_5',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 179,
                    g: 66,
                    b: 122,
                    a: 1
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_8: {
        id: 'id_8',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 198,
                    g: 200,
                    b: 245,
                    a: 1
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_14: {
        id: 'id_14',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 126,
                    g: 211,
                    b: 33,
                    a: 1
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_18: {
        id: 'id_18',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 74,
                    g: 144,
                    b: 226,
                    a: 1
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_23: {
        id: 'id_23',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 155,
                    g: 155,
                    b: 155,
                    a: 1
                }
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_25: {
        id: 'id_25',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 184,
                    g: 233,
                    b: 134,
                    a: 1
                }
            },
            margin: {
                marginTop: '40',
                marginRight: '50',
                marginBottom: '40',
                marginLeft: '50'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            alignItems: 'initial'
        }
    },
    id_29: {
        id: 'id_29',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_30: {
        id: 'id_30',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_31: {
        id: 'id_31',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'block',
            textAlign: 'initial'
        }
    },
    id_32: {
        id: 'id_32',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'block',
            textAlign: 'initial'
        }
    },
    id_33: {
        id: 'id_33',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            textAlign: 'initial'
        }
    },
    id_34: {
        id: 'id_34',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: 189,
                    g: 16,
                    b: 224,
                    a: 1
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            textAlign: 'initial'
        }
    },
    id_35: {
        id: 'id_35',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            textAlign: 'initial'
        }
    },
    id_36: {
        id: 'id_36',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_37: {
        id: 'id_37',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_38: {
        id: 'id_38',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_39: {
        id: 'id_39',
        currentStyle: {
            background: {
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '0'
                }
            },
            textDecoration: {
                textDecorationColor: 'inherit',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid'
            },
            color: {
                r: '0',
                g: '0',
                b: '0',
                a: '0'
            },
            font: {
                fontFamily: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: ''
            },
            margin: {
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            lineHeight: 'inherit',
            display: 'block',
            textAlign: 'initial'
        }
    },
    id_41: {
        id: 'id_41',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_43: {
        id: 'id_43',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    },
    id_47: {
        id: 'id_47',
        currentStyle: {
            margin: {
                marginTop: '0',
                marginRight: 'auto',
                marginBottom: '0',
                marginLeft: 'auto'
            },
            padding: {
                paddingTop: '0',
                paddingRight: '0',
                paddingBottom: '0',
                paddingLeft: '0'
            },
            border: {
                borderWidth: {
                    borderWidthTop: '0',
                    borderWidthRight: '0',
                    borderWidthBottom: '0',
                    borderWidthLeft: '0'
                },
                borderStyle: {
                    borderStyleTop: 'none',
                    borderStyleRight: 'none',
                    borderStyleBottom: 'none',
                    borderStyleLeft: 'none'
                },
                borderColor: {
                    borderColorTop: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorRight: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorBottom: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    },
                    borderColorLeft: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1'
                    }
                }
            },
            borderRadius: {
                borderRadiusTopLeft: '0',
                borderRadiusTopRight: '0',
                borderRadiusBottomRight: '0',
                borderRadiusBottomLeft: '0'
            },
            display: 'block'
        }
    }
};

const changeStyle = (state, action) => {
    switch (action.type) {
        // constant name
        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                background: {
                    backgroundColor: action.color
                }
            });
        case VALUE_PADDING:
            return Object.assign({}, state, {
                padding: {
                    ...state.padding,
                    [`padding${action.name}`]: action.value,
                }
            });
        case VALUE_MARGIN:
            return Object.assign({}, state, {
                margin: {
                    ...state.margin,
                    [`margin${action.name}`]: action.value,
                }
            });
        default:
            return state;
    }
};

const nodeStyle = (state, action, styles) => {

    switch (action.type) {
        case CREATE_NODE_STYLES:
            return {
                id: action.nodeId,
                currentStyle: {...styles},
            };

        case CHANGE_BACKGROUND_COLOR:
        case VALUE_PADDING:
        case VALUE_MARGIN:
            return Object.assign({}, state, {
                currentStyle: changeStyle(state.currentStyle, action)
            });

        default:
            return state
    }
};

const deleteNodeStyles = (state, nodeId) => {
    state = {...state};
    delete state[nodeId];
    return state;
};

// todo: create styles in object
export default function EditPanelReducer(state = initialState, action) {
    const {nodeId, type} = action;
    if (typeof nodeId === 'undefined') {
        switch (type) {

            case IS_ACTIVE_EDIT_PANEL:
                return Object.assign({}, state, {
                    isActiveEditPanel: action.boolean,
                    ActiveStructure: {
                        id: action.id,
                        name: action.name
                    },

                });
            case SELECT_EDIT_PANEL_NAVIGATION:
                return Object.assign({}, state, {
                    activeTab: action.name
                });
            case TOGGLE_COLOR_PICKER:
                return Object.assign({}, state, {
                    isActiveColorPicker: action.bool
                });
            case VALUE_IMAGE_LINK:
                return Object.assign({}, state, {
                    imageLink: action.link
                });

            default:
                return state;
        }
    }
    else {

        if (type === DELETE_NODE_STYLES) {
            return deleteNodeStyles(state, nodeId)
        }

        return Object.assign({}, state, {
            [nodeId]: nodeStyle(state[nodeId], action, state.defaultStyle[action.structure])
        });
    }

}

