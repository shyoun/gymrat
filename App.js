import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
	render() {
		return <HomeScreen />
	}
}
