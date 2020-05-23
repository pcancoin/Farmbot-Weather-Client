import React, { Component } from "react";

import "./Auth.css";

class Signup extends Component {
    render() {
        return (
            <div class="auth">
                <div class="auth-card">
                    <h1 className="title">Se connecter</h1>
                    <form action="/api/auth/login" method="post">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="text"
                                    name="username"
                                    placeholder="Email"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input
                                    class="input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success">
                                    Envoyer
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
