import 'regenerator-runtime/runtime'
import Layout from './components/layout';

import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import PinterestGrid from './components/pinterestGrid';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Layout>
            <PinterestGrid title='Foto Feed'/>
            <PinterestGrid title='Favorites'/>
        </Layout>
    </Provider>,
    document.getElementById('app-wrapper')
)

module.hot.accept();