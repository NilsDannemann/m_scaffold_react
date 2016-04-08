import React, {Component} from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="site-title">
                    <a href="/" alt="logo"><img alt="Logo" src="/images/logo_dark.svg" width="150" /></a>
                </h1>
                <Navigation />
            </header>
        )
    }
}