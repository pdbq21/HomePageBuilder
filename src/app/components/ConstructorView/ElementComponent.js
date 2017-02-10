/**
 * Created by ruslan on 09.02.17.
 */
import React from 'react'


export default function ElementComponent(props) {

    const {type, children} = props;

    let element;
    switch (type) {
        case 'Text':
            element =
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>;
            break;
        case 'Image':
            element = <img src="images/noimage.png" className="pb-image" alt=""/>;
            break;
        case 'Button':
            element = <button className="mdl-button mdl-js-button mdl-button--raised">
                Shop now
            </button>;
            break;
        case 'Title':
            element = <h1>Title</h1>;
            break;
        default:
            break;
    }
    return (
        <div className="mdl-card pb-card pb-card--col mdl-shadow--2dp">

            {/* horizontal bar component*/}
            {children}

            <div className="pb-background mdl-shadow--2dp">
                {element}
            </div>
        </div>
    );
}
