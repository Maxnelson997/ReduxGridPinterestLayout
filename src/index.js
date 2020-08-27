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

import { connect } from 'react-redux';

const Root = ({favoritedPhotos, notFavoritedPhotos}) => {
    return (
        <Layout>
            <PinterestGrid title='foto feed' photos={notFavoritedPhotos}/>
            <PinterestGrid title='favorited' photos={favoritedPhotos}/>
        </Layout>
    )
};

function mapStateToProps(state) {
    let notFavoritedPhotos = state.photos.photos.filter(photo => {
        return !photo.favorited
    })
    let favoritedPhotos = state.photos.photos.filter(photo => {
        return photo.favorited
    })
    return {
        notFavoritedPhotos,
        favoritedPhotos
    }
}

const RootWithRedux = connect(mapStateToProps)(Root);

const createStoreWithDevTools = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension():f=>f)(createStore)))

ReactDOM.render(
    <Provider store={createStoreWithDevTools(reducers)}>
        <RootWithRedux/>
    </Provider>,
    document.getElementById('app-wrapper')
)

module.hot.accept();

