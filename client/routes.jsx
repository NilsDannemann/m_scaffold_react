import React from 'react';
import {mount} from 'react-mounter';
import {LayoutAccount} from './layouts/LayoutAccount.jsx';
import {LayoutApp} from './layouts/LayoutApp.jsx';
import App from './pages/App.jsx';
import Account from './pages/Account.jsx';

// Account Page
FlowRouter.route('/account', {
    name: 'account',
    action() {
        mount(LayoutAccount, {
            content: () => (<Account />)
        });
    }
});

// App Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(LayoutApp, {
            content: () => (<App />)
        });
    }
});
