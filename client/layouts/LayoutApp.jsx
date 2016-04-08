import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const LayoutApp = ({content}) => (
    <div>
        <Header />
        <main className="layout--app">
            {content()}
        </main>
        <Footer />
    </div>
)