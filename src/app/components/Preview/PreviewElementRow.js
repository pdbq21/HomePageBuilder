/**
 * Created by ruslan on 23.01.17.
 */
import React from 'react'

// template element of content
function ContentText(props) {
    return (
        <div className="item-contentType-Text">
            <input type="text" placeholder="enter text"/>
        </div>
    );
}
function ContentImage(props) {
    return (
        <div className="item-contentType-Image">
            <span className="glyphicon glyphicon-picture icon" aria-hidden="true"></span>
        </div>
    );
}
function ContentButton(props) {
    return (
        <div className="item-contentType">

        </div>
    );
}

// hover element add-new-content
function AddNewContent(props) {
    return (
      <div className="new-content-element">
          <div className="" id="add-new-icon-plus"></div>
      </div>
    );
}

function ElementCol(props) {
    const {col, index, content} = props;
    let colContentItem = [];
    content.map(function (key) {
        switch (key.contentType) {
            case 'Text':
                colContentItem = <ContentText
                />;
                break;
            case 'Image':
                colContentItem = <ContentImage
                />;
                break;
            default:
                console.error(key.contentType, 'Error: not found this content type');
        }
    });
    return (
        <div className={`content-block-item col-md-${col}`}
             data-index={index}
        >
            {colContentItem}
            <div className="new-content-element">
                <div className="add-new-icon-plus"></div>
            </div>
        </div>
    )
}

function PreviewElementRow(props) {
    const {name, cols, index} = props;
    const {handelDragEnter, handleDrop, handleDragOver, handleDragLeave} = props;
    let elementCols = cols.map(function (key, index) {
        return <ElementCol
            name={name}
            col={key.indexCol}
            key={`key-${index}`}
            index={index}
            content={key.content}
        />
    });

    return (
        <div className="content-block"
             onDragEnter={handelDragEnter}
             onDrop={handleDrop}
             onDragOver={handleDragOver}
             onDragLeave={handleDragLeave}

             data-index={index}
        >
            {elementCols}
        </div>
    );
}

export default PreviewElementRow;