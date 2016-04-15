import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const LayoutAccount = ({page}) => (
    <div>
        <Header />
        <main className="layout--account">
            {page()}
        </main>
        <Footer />
    </div>
)
