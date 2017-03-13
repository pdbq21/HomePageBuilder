/**
 * Created by ruslan on 02.03.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import container
//import component
import {
    EditPanelComponent,
    ImageEditPanelComponent
} from '../../../components/Toolbar/ContentMenu/ContentPanels/EditPanelComponent'
import ColorPickerComponent from '../../../components/Toolbar/ContentMenu/ContentPanels/EditPanel/ColorPickerComponent'
import MarginPaddingComponent from '../../../components/Toolbar/ContentMenu/ContentPanels/EditPanel/MarginPaddingComponent'
// import actions
import * as EditPanelActions from '../../../actions/EditPanelActions'
import * as WorkAreaActions from '../../../actions/WorkAreaActions'

class EditPanelContainer extends Component {
    constructor(props) {
        super(props);
        this.renderEditPanel = this.renderEditPanel.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleCloseColorPicker = this.handleCloseColorPicker.bind(this);
        this.handleClickLink = this.handleClickLink.bind(this);
        this.handleChangeLink = this.handleChangeLink.bind(this);
        this.handelClickMargin = this.handelClickMargin.bind(this);
        this.handelClickPadding = this.handelClickPadding.bind(this);
        this.handelChangeMargin = this.handelChangeMargin.bind(this);
        this.handelChangePadding = this.handelChangePadding.bind(this);
    }

    componentDidMount() {
        // empty
    }

    componentWillMount() {
        // empty
    }

    handleChangeColor(id, color) {
        const {ActionChangeBackgroundColor} = this.props.mapDispactchEditPanel;
        //console.log(id, color.rgb);
        ActionChangeBackgroundColor(id, color.rgb);
    }

    handleClickColorPicker(bool) {
        const {ActionToggleColorPicker} = this.props.mapDispactchEditPanel;
        ActionToggleColorPicker(!bool);
    }

    handleCloseColorPicker() {
        const {ActionToggleColorPicker} = this.props.mapDispactchEditPanel;
        ActionToggleColorPicker(false);
    }

    handleClickLink() {
        const {imageLink, ActiveStructure} = this.props.mapStateEditPanel;
        const {ActionAddImageLink} = this.props.mapDispactchWorkArea;
        //todo: check for correct url
        ActionAddImageLink(ActiveStructure.id, imageLink);
    }

    handleChangeLink({target}) {
        const {ActionValueImageLink} = this.props.mapDispactchEditPanel;
        ActionValueImageLink(target.value)
    }

    handelClickMargin({target}, id, name) {
        const {ActionValueMargin} = this.props.mapDispactchEditPanel;
        const {currentStyle} = this.props.mapStateEditPanel[id];
        let marginValue = currentStyle.margin[`margin${name}`];
        marginValue = (target.getAttribute('data-counter') === '+') ? ++marginValue : --marginValue;
        //console.log(id, name, marginValue);
        if (marginValue >= 0){
            ActionValueMargin(id, name, marginValue);
        }
    }

    handelClickPadding({target}, id, name) {
        const {ActionValuePadding} = this.props.mapDispactchEditPanel;
        const {currentStyle} = this.props.mapStateEditPanel[id];
        let paddingValue = currentStyle.padding[`padding${name}`];
        paddingValue = (target.getAttribute('data-counter') === '+') ? ++paddingValue : --paddingValue;
        //console.log(id, name, paddingValue);
        if (paddingValue >= 0) {
            ActionValuePadding(id, name, paddingValue);
        }
    }

    handelChangeMargin({target}, id, name) {
        //console.log(id, name, target.value);
        const {ActionValueMargin} = this.props.mapDispactchEditPanel;
        if (target.value >= 0) {
            ActionValueMargin(id, name, target.value);
        }
    }

    handelChangePadding({target}, id, name) {
        const {ActionValuePadding} = this.props.mapDispactchEditPanel;
        if (target.value >= 0) {
            ActionValuePadding(id, name, target.value);
        }
    }

    renderEditPanel() {
        const {ActiveStructure, isActiveColorPicker} = this.props.mapStateEditPanel;
        //stop if click on Edit in WorkArea / need currentStyle for WorkArea
        if (ActiveStructure.id === '') {
            return <EditPanelComponent />;
        }
        const {currentStyle} = this.props.mapStateEditPanel[ActiveStructure.id];
        const {background} = currentStyle;
        //const {} = this.props.mapStateWorkArea;
        //console.log(ActiveStructure.id);
        /// ActiveStructure => id, name
        //currentStyle
        switch (ActiveStructure.name) {
            case 'section':
            case 'row':
            case 'link':
            case 'heading':
            case 'text':
            case 'button':
                return (<EditPanelComponent>
                        <ColorPickerComponent
                            color={background.backgroundColor}
                            isActiveColorPicker={isActiveColorPicker}
                            handleChangeColor={(color) => this.handleChangeColor(ActiveStructure.id, color)}
                            handleClickColorPicker={() => this.handleClickColorPicker(isActiveColorPicker)}
                            handleCloseColorPicker={this.handleCloseColorPicker}
                        />
                        <div >
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickMargin(event, ActiveStructure.id, 'Top')}
                                onChange={(event) => this.handelChangeMargin(event, ActiveStructure.id, 'Top')}
                                value={currentStyle.margin.marginTop}
                                name="Top"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickMargin(event, ActiveStructure.id, 'Right')}
                                onChange={(event) => this.handelChangeMargin(event, ActiveStructure.id, 'Right')}
                                value={currentStyle.margin.marginRight}
                                name="Right"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickMargin(event, ActiveStructure.id, 'Bottom')}
                                onChange={(event) => this.handelChangeMargin(event, ActiveStructure.id, 'Bottom')}
                                value={currentStyle.margin.marginBottom}
                                name="Bottom"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickMargin(event, ActiveStructure.id, 'Left')}
                                onChange={(event) => this.handelChangeMargin(event, ActiveStructure.id, 'Left')}
                                value={currentStyle.margin.marginLeft}
                                name="Left"
                            />
                        </div>

                        <div >
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickPadding(event, ActiveStructure.id, 'Top')}
                                onChange={(event) => this.handelChangePadding(event, ActiveStructure.id, 'Top')}
                                value={currentStyle.padding.paddingTop}
                                name="Top"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickPadding(event, ActiveStructure.id, 'Right')}
                                onChange={(event) => this.handelChangePadding(event, ActiveStructure.id, 'Right')}
                                value={currentStyle.padding.paddingRight}
                                name="Right"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickPadding(event, ActiveStructure.id, 'Bottom')}
                                onChange={(event) => this.handelChangePadding(event, ActiveStructure.id, 'Bottom')}
                                value={currentStyle.padding.paddingBottom}
                                name="Bottom"
                            />
                            <MarginPaddingComponent
                                onClick={(event) => this.handelClickPadding(event, ActiveStructure.id, 'Left')}
                                onChange={(event) => this.handelChangePadding(event, ActiveStructure.id, 'Left')}
                                value={currentStyle.padding.paddingLeft}
                                name="Left"
                            />
                        </div>

                    </EditPanelComponent>
                );
            case 'image':
                return (<ImageEditPanelComponent
                    onChangeLink={this.handleChangeLink}
                    onClickLink={this.handleClickLink}
                />);
            case 'icon':
                return (<EditPanelComponent>

                    </EditPanelComponent>
                );

            default:
                return <div>Error: {ActiveStructure.name}</div>;
        }


    }

    render() {
        return (
            this.renderEditPanel()
        );
    }
}


function mapStateToProps(state) {
    return {
        mapStateEditPanel: state.EditPanelReducer,
        mapStateWorkArea: state.WorkAreaReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchEditPanel: bindActionCreators(EditPanelActions, dispatch),
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPanelContainer)