import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import firebase from "firebase";


export default class BasicAuth extends Component {
    constructor() {
        super();
        this.state = {
            email: 'Login',
            password: '',
            user: 'Logged Out',
            loadingStatus: 'offline',
            error: 'none'
        };

        let config = {
            apiKey: "AIzaSyDhxDmwphXGc-cF7_n0dfZ1nFm1cfDJJ6U",
            authDomain: "reactnativetestapp-295a8.firebaseapp.com",
            databaseURL: "https://reactnativetestapp-295a8.firebaseio.com",
            projectId: "reactnativetestapp-295a8",
            storageBucket: "reactnativetestapp-295a8.appspot.com",
            messagingSenderId: "159865958286"
        };

        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser.email
                });
            } else {
                this.setState({
                    user: 'Logged Out'
                });
            }
        })
    }

    performAuth() {
        this.setState({
            loadingStatus: 'Loading...',
            error: 'none'
        });

        let promise = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        promise.then(firebaseUser => {
            this.setState({
                loadingStatus: 'offline',
                error: 'none'
            })
        })
            .catch(err => {
                this.setState({
                    loadingStatus: 'offline',
                    error: err.message
                });

                console.log(err.message);
            })
    }

    addUser() {
        this.setState({
            loadingStatus: 'Loading...'
        });

        let promise = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        promise.then(firebaseUser => {
            this.setState({
                loadingStatus: 'offline',
                error: 'none'
            })
        })
            .catch(err => {
                this.setState({
                    loadingStatus: 'offline',
                    error: err.message
                });

                console.log(err.message);
            })
    }

    signOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Firebase Auth
                </Text>
                <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})} style={styles.input}/>
                <TextInput placeholder="Password" onChangeText={(password) => this.setState({password})}
                           style={styles.input}/>
                <View style={styles.btnWrapper}>
                    <Button title="Login" style={styles.button} onPress={() => {
                        this.performAuth()
                    }}/>
                    <Button title="Register" style={styles.button} onPress={() => {
                        this.addUser()
                    }}/>
                    <Button title="Logout" style={[styles.button, styles.red]} onPress={() => {
                        this.signOut()
                    }}/>
                </View>
                <View style={styles.statusBoard}>
                    <View>
                        <Text>
                            User Status: {this.state.user}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Errors: {this.state.error}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {this.state.loadingStatus}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btnWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        alignSelf: 'stretch'
    },
    button: {
        margin: 10,
        padding: 10
    },
    statusBoard: {
        paddingVertical: 20
    },
    red: {
        backgroundColor: '#f00'
    }
});
