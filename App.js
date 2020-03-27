/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Challenge Árvore Educação
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Main} from './src/js/scenes';
import Theme from './src/js/utils/Theme';
import Api from './src/js/utils/Api';
import reducers from './src/js/reducers';

export default class App extends Component {
  UNSAFE_componentWillMount() {
    Api.search('Harry')
      .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router>
          <Scene key="root">
            <Scene
              key="main"
              component={Main}
              initial={true}
              hideNavBar={Platform.OS === 'ios' ? false : true}
              headerForceInset={{top: 'never'}}
              navigationBarStyle={{
                backgroundColor: Theme.blue,
                borderBottomColor: 'transparent',
              }}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
