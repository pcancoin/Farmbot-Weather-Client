import React, { Component } from "react";
import ReactLoading from 'react-loading';
import { connect } from "react-redux";
import { fetchArrosages } from "../../actions/ArrosageActions";

import ItemArrosage from "./ItemArrosage";

class ListeArrosages extends Component {
    componentDidMount() {
        this.props.fetchArrosages();
    }

    renderFilamentList = arrosages => {
        return arrosages.map(arrosage => (
            <ItemArrosage key={arrosage._id} {...arrosage} />
        ));
    };

    render() {
        if (this.props.arrosages === null) {
            return <ReactLoading type="spinningBubbles" color="black" height={60} width={60} />;
        } 
        return (
            <table className="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th className="has-text-centered">Date</th>
                        <th className="has-text-centered">Humidité</th>
                        <th className="has-text-centered">Indicateur météo</th>
                    </tr>
                </thead>
                <tbody>{this.renderFilamentList(this.props.arrosages)}</tbody>
            </table>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        arrosages: state.arrosages ? Object.values(state.arrosages) : null,
    };
};

export default connect(mapStateToProps, { fetchArrosages })(ListeArrosages);
