import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import  Home from './screens/home';
import  BasicAuth from './screens/basicAuth';


const appNavigator = StackNavigator({
    Home: {
        screen: Home
    },
    BasicAuth: {
        screen: BasicAuth
    }
}, {
    initialRoute: 'Home',
    headerMode: 'none'
});

AppRegistry.registerComponent('testapp', () => appNavigator);
