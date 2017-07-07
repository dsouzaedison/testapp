import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View>
                <Text>Dummy Text</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});