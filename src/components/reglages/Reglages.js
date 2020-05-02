import React, { Component } from "react";

import "./Reglages.css";

export default class Reglages extends Component {
    renderInput({ field, label, icon }) {
        return (
            <div class="field">
                <label class="label" for={field}>
                    {label}
                </label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" id={field} name={field} />
                    <span
                        class="icon is-small is-left"
                        role="img"
                        aria-label={label}
                    >
                        {icon}
                    </span>
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className="reglages">
                <h1 className="title is-1 has-text-centered has-text-dark">
                    Réglages
                </h1>
                <div className="fields">
                    {this.renderInput({
                        field: "toolPin",
                        label: "ID de l'outil arrosage",
                        icon: "🔧",
                    })}
                    {this.renderInput({
                        field: "sensorPin",
                        label: "Pin du capteur d'humidité",
                        icon: "🔌",
                    })}
                    {this.renderInput({
                        field: "valvePin",
                        label: "Pin de l'électrovanne",
                        icon: "🔌",
                    })}
                    {this.renderInput({
                        field: "wateringThreshold",
                        label: "Seuil d'arrosage capteur",
                        icon: "💦",
                    })}
                    {this.renderInput({
                        field: "weatherThreshold",
                        label: "Seuil d'arrosage météo",
                        icon: "⛅",
                    })}

                    <button class="button is-success">Valider</button>
                </div>
            </div>
        );
    }
}
