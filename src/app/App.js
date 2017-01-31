import React, {Component} from 'react';
//import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="view-constructor-block">

                    <div className="section-block"
                         data-address=".0"
                    >
                        <div className="control-panel">
                            <em className="control-panel__drag"></em>
                            <em className="control-panel__copy"></em>
                            <em className="control-panel__delete"></em>
                        </div>
                        <div className="row-block"
                             data-address=".0.0"
                        >
                            <div className="control-panel">
                                <em className="control-panel__drag"></em>
                                <em className="control-panel__col-structure"></em>
                                <em className="control-panel__copy"></em>
                                <em className="control-panel__delete"></em>
                            </div>

                            <div className="col-block"
                                 data-address=".0.0.0"
                            >

                            </div>
                            <div className="col-block"
                                 data-address=".0.0.0"
                            >

                            </div>
                            <button className="add-new-structure-block">Add new col.</button>
                        </div>
                        <div className="row-block"
                             data-address=".0.1"
                        >
                            <div className="control-panel">
                                <em className="control-panel__drag"></em>
                                <em className="control-panel__copy"></em>
                                <em className="control-panel__delete"></em>
                            </div>

                            <div className="col-block"
                                 data-address=".0.1.0"
                            >

                            </div>
                            <button className="add-new-structure-block">Add new col.</button>
                        </div>
                        <button className="add-new-structure-block">Add new row.</button>
                    </div>
                    <div className="section-block"
                         data-address=".1"
                    >
                        <div className="control-panel">
                            <em className="control-panel__drag"></em>
                            <em className="control-panel__copy"></em>
                            <em className="control-panel__delete"></em>
                        </div>
                        <div className="row-block"
                             data-address=".1.0"
                        >
                            <div className="control-panel">
                                <em className="control-panel__drag"></em>
                                <em className="control-panel__copy"></em>
                                <em className="control-panel__delete"></em>
                            </div>
                            <div className="col-block"
                                 data-address=".1.0.0"
                            >

                            </div>
                            <button className="add-new-structure-block">Add new col.</button>
                        </div>
                        <button className="add-new-structure-block">Add new row.</button>
                    </div>
                    <button className="add-new-structure-block">Add new section.</button>
                </div>

                <div className="toolbar-block">
                    <div className="toolbar-block__nav">
                        <ul className="">
                            <li className="toolbar-block__nav-navigation navigation-active">
                                <a href="" className="nav-navigation-name">Content</a>
                            </li>
                            <li className="toolbar-block__nav-navigation">
                                <a href="" className="nav-navigation-name">Templates</a>
                            </li>
                            <li className="toolbar-block__nav-navigation">
                                <a href="" className="nav-navigation-name">Other</a>
                            </li>
                        </ul>
                    </div>
                    <div className="toolbar-block__tab-panel">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
