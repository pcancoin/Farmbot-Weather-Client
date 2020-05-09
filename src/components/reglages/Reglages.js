import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSettings, fetchSettings } from "../../actions/ReglagesActions";

import "./Reglages.css";

import ReglagesForm from "./ReglagesForm";

class Reglages extends Component {
    
    componentDidMount() {        
        this.props.fetchSettings();
    }

    onSubmit = reglages => {
        this.props.submitSettings(reglages);
    };

    renderForm = () => {
        if (Object.keys(this.props.reglages).length !== 0) {
            return <ReglagesForm  onSubmit={this.onSubmit} initialValues={this.props.reglages}/>;
        }
    }

    render() {        
        return (
            <div className="reglages">
                <h1 className="title is-1 has-text-centered has-text-dark">
                    Réglages
                </h1>
                {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        reglages: state.reglages,
    };
};

export default connect(mapStateToProps, { submitSettings, fetchSettings })(
    Reglages
);
