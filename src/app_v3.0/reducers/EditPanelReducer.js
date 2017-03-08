/**
 * Created by ruslan on 17.02.17.
 */
// import constants from '../constants'
import {
    IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR, CREATE_NODE_STYLES, DELETE_NODE_STYLES,
    SELECT_EDIT_PANEL_NAVIGATION, TOGGLE_COLOR_PICKER, VALUE_IMAGE_LINK
} from '../constants/EditPanelConstants'
// default data state
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
        Section: {
            backgroundColor: {
                r: 255,
                b: 255,
                g: 255,
                a: 0
            }
        },
        Row: {
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


const changeStyle = (state, action) => {
    switch (action.type) {
        // constant name
        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                background: {
                    backgroundColor: action.color
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

