import { Component } from "react";
import { connect } from "react-redux";

class AdminWrapper extends Component {
    render() {
        if (this.props.user && this.props.user.admin) {
            return this.props.children;
        }
        return null;
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    };
};

export default connect(mapStateToProps)(AdminWrapper);
