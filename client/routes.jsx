import React from 'react';
import {mount} from 'react-mounter';
import {LayoutAccount} from './layouts/LayoutAccount.jsx';
import {LayoutApp} from './layouts/LayoutApp.jsx';
import PageApp from './pages/PageApp.jsx';
import PageAccount from './pages/PageAccount.jsx';

// App Page
FlowRouter.route('/', {
    name: 'app',
    action() {
        mount(LayoutApp, {
            page: () => (<PageApp />)
        });
    }
});

// Account Page
FlowRouter.route('/account', {
    name: 'account',
    action() {
        mount(LayoutAccount, {
            page: () => (<PageAccount />)
        });
    }
});
