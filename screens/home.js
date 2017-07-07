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
            <View style={styles.container}>
                <Text style={styles.heading}>Menu</Text>
                <View style={styles.menu}>
                    <View style={styles.menuItem}>
                        <Button title="Auth - Email & Password" onPress={() => {this.props.navigation.navigate('BasicAuth')}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    heading: {
        textAlign: 'center',
        fontSize: 25
    },
    menu: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    menuItem: {
        marginVertical: 10
    },
    button: {
        height: 30,
        alignSelf: 'stretch'
    }
});