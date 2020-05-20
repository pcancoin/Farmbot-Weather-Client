import React, { Component } from "react";

import "./Auth.css";

class Signup extends Component {
    render() {
        return (
            <div class="auth">
                <div class="auth-card">
                    <h1 className="title">Créer un compte</h1>
                    <form action="/api/auth/local/signup">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="email"
                                    placeholder="Email"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input
                                    class="input"
                                    type="password"
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
