import React, {Component} from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li><a href="/">App</a></li>
                    <li><a href="/account">Account</a></li>
                </ul>
            </nav>
        )
    }
}

