import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const LayoutAccount = ({content}) => (
    <div>
        <Header />
        <main className="layout--account">
            {content()}
        </main>
        <Footer />
    </div>
)