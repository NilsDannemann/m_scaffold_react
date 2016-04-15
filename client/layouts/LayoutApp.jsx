import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const LayoutApp = ({page}) => (
    <div>
        <Header />
        <main className="layout--app">
            {page()}
        </main>
        <Footer />
    </div>
)
