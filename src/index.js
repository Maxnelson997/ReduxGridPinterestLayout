import 'regenerator-runtime/runtime'
import Layout from './components/layout';

import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import PinterestGrid from './components/pinterestGrid';

ReactDOM.render(
    <Layout>
        <PinterestGrid title='Foto Feed'/>
        <PinterestGrid title='Favorites'/>
    </Layout>,
    document.getElementById('app-wrapper')
)

module.hot.accept();