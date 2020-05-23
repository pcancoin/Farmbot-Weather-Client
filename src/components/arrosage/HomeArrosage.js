import React, { Component } from "react";
import localApi from "../../apis/localApi";
import { toast } from "react-toastify";
import "./HomeArrosage.css";

import ListArrosage from "./ListeArrosages";
import AdminWrapper from "../auth/AdminWrapper";

class HomeArrosage extends Component {
    onClickArrose = async () => {
        try {
            let res = await localApi.get("/arrosage/run");
            toast.success("Demande d'arrosage envoyée ! Réponse : " + res.data);
        } catch (error) {
            toast.error("Impossible d'envoyer la demande");
        }
    };

    render() {
        return (
            <div className="arrosage">
                <h1 className="title has-text-centered has-text-dark">
                    Arrosage
                </h1>
                <div className="columns">
                    <div className="column ">
                        <h2 className="subtitle has-text-centered has-text-dark">
                            Derniers arrosages
                        </h2>
                        <ListArrosage />
                    </div>
                    <AdminWrapper>
                        <div className="column">
                            <button
                                className="button is-success is-large"
                                onClick={this.onClickArrose}
                            >
                                Arroser maintenant
                            </button>
                        </div>
                    </AdminWrapper>
                </div>
            </div>
        );
    }
}

export default HomeArrosage;
