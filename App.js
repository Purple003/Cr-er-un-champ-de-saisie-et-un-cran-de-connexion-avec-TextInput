import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import LoginScreen from './components/LoginScreen';
// import WelcomeScreen from './components/WelcomeScreen'; // You can swap screens here

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <AppHeader />
                <LoginScreen />
            </View>
            <View style={styles.footerContainer}>
                <AppFooter />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#333333',
    },
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    footerContainer: {
        backgroundColor: '#333333',
    },
});
