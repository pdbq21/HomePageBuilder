/**
 * Created by ruslan on 02.03.17.
 */

import React from 'react'
import {SketchPicker} from 'react-color'

class ColorPickerContainer extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

/*    handleChange = (color) => {
        this.setState({color: color.rgb});
        //ActionChangeBackgroundColor
    };*/

    render() {
        //color => backgroundColor: {r: 255,	b: 255,	g: 255,	a: 1}
        const {color, handleChangeColor} = this.props;
        return (
            <div style={{
                'position': 'relative'
            }}>
                <div style={{
                    'padding': '5px',
                    'background': 'rgba(0, 0, 0, 1)',
                    'borderRadius': '1px',
                    'boxShadow': '0 0 0 1px rgba(0,0,0,.1)',
                    'display': 'inline-block',
                    'cursor': 'pointer',
                }} onClick={ this.handleClick }>
                    <div style={ {
                        'width': '36px',
                        'height': '14px',
                        'borderRadius': '2px',
                        'background': `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,

                    } }/>
                </div>
                { this.state.displayColorPicker ? <div style={ {
                        'position': 'absolute',
                        'zIndex': '2',
                        'right': '0'
                    }}>
                        <div style={ {
                            'position': 'fixed',
                            'top': '0px',
                            'right': '0px',
                            'bottom': '0px',
                            'left': '0px',
                        }} onClick={ this.handleClose }/>
                        <SketchPicker color={ this.props.color } onChange={ handleChangeColor }/>
                    </div> : null }

            </div>
        )
    }
}

export default ColorPickerContainer