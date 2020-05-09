import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ReglagesForm extends Component {
    renderInput = ({ icon, input, label, meta: { touched, error } }) => {
        return (
            <div className="field">
                <label className="label" htmlFor={input.name}>
                    {label}
                </label>
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input"
                        type="text"
                        {...input}
                        id={input.name}
                    />
                    {touched && error && <span>{error}</span>}
                    <span
                        className="icon is-small is-left"
                        role="img"
                        aria-label={label}
                    >
                        {icon}
                    </span>
                </p>
            </div>
        );
    };

    //Appel du onSubmit du composant parent (Reglages.js)
    onSubmit = (reglages) => {
        this.props.onSubmit(reglages);
    };

    render() {
        console.log("Render form :", this.props);

        return (
            <div className="fields">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        name="toolID"
                        label="ID de l'outil d'arrosage"
                        icon="🔧"
                        component={this.renderInput}
                    />
                    <Field
                        name="sensorPin"
                        label="Pin du capteur d'humidité"
                        icon="🔌"
                        component={this.renderInput}
                    />
                    <Field
                        name="valvePin"
                        label="Pin de l'électrovanne"
                        icon="🔌"
                        component={this.renderInput}
                    />
                    <Field
                        name="wateringThreshold"
                        label="Seuil d'arrosage capteur"
                        icon="💦"
                        component={this.renderInput}
                    />
                    <Field
                        name="weatherThreshold"
                        label="Seuil d'arrosage météo"
                        icon="⛅"
                        component={this.renderInput}
                    />
                    <Field
                        name="lat"
                        label="Latitude du Robot"
                        icon="📍"
                        component={this.renderInput}
                    />
                    <Field
                        name="long"
                        label="Longitude du Robot"
                        icon="📍"
                        component={this.renderInput}
                    />

                    <button
                        className="button is-success"
                        disabled={this.props.submitting}
                    >
                        Valider
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: "reglages" })(ReglagesForm);
