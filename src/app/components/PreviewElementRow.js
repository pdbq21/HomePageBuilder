/**
 * Created by ruslan on 23.01.17.
 */
import React from 'react'


function ElementCol(props) {
    return(
        <div className={`content-block col-md-${props.col}`}>
            {props.name}
        </div>
    )
}

function PreviewElementRow(props) {
    const { name, cols } = props;

    let elementCols = cols.map(function(key) {
        return <ElementCol name={name} col={key.indexCol}/>
    });

    return (
        <div className="content-block" >
            {elementCols}
        </div>
    );
}

export default PreviewElementRow;