import 'regenerator-runtime/runtime'
import Layout from './components/layout';

import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import PinterestGrid from './components/pinterestGrid';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithDevTools = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension():f=>f)(createStore)))

ReactDOM.render(
    <Provider store={createStoreWithDevTools(reducers)}>
        <Layout>
            <PinterestGrid title='Foto Feed'/>
            <PinterestGrid title='Favorites'/>
        </Layout>
    </Provider>,
    document.getElementById('app-wrapper')
)

module.hot.accept();