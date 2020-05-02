import React, { Component } from "react";
import { connect } from "react-redux";

class LogButton extends Component {
    render() {
        if (this.props.user !== null) {
            if (this.props.user !== false) {
                return (
                    <a className="navbar-item" href="/api/auth/logout">
                        <span role="img" aria-label="Icône réglages">
                            🔒
                        </span>
                        {this.props.user.name}
                    </a>
                );
            } else {
                return (
                    <a className="navbar-item" href="/api/auth/google">
                        <span role="img" aria-label="Icône réglages">
                            🔓
                        </span>
                        Connexion
                    </a>
                );
            }
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth,
    };
};

export default connect(mapStateToProps)(LogButton);
