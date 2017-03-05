/**
 * Created by ruslan on 02.03.17.
 */
// lib
import React from 'react'
import {SketchPicker} from 'react-color'

export default function ColorPickerComponent(props) {
    //color => backgroundColor: {r: 255,	b: 255,	g: 255,	a: 1}
    const {
        color, isActiveColorPicker, handleChangeColor, handleClickColorPicker, handleCloseColorPicker
    } = props;

    return (
        <div style={{
            'position': 'relative'
        }}>
            <div style={{
                'background': 'rgba(255, 255, 255, 1)',
                'display': 'inline-block',
                'cursor': 'pointer',
            }} onClick={handleClickColorPicker}>
                <div className="pb-element-sketch-icon-transparent"/>

                <div style={{
                    'width': '2em',
                    'height': '2em',
                    'borderRadius': '2px',
                    'background': `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,

                }}/>
            </div>
            { isActiveColorPicker ? <div style={ {
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
                    }} onClick={handleCloseColorPicker}/>
                    <SketchPicker color={ color } onChange={ handleChangeColor }/>
                </div> : null }

        </div>
    )

}