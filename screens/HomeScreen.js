import React from 'react'
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native'
import { Constants, Gyroscope } from 'expo'
import { MonoText } from '../components/StyledText'
import { ExerciseListItem } from '../components/ExerciseListitem'

const ExerciseList = [
	{ title: '벤치프레스' },
	{ title: '바벨컬' },
	{ title: '스쿼트' },
]

export default class HomeScreen extends React.Component {
	state = {
		gyroscopeData: {},
	}

	componentDidMount = () => {
		this.toggle()
	}

	componentWillUnmount = () => {
		this.unsubscribe()
	}

	toggle = () => {
		if (this.subscription) {
			this.unsubscribe()
			return
		}
		this.subscribe()
	}

	slow = () => {
		Gyroscope.setUpdateInterval(1000)
	}

	fast = () => {
		Gyroscope.setUpdateInterval(16)
	}

	subscribe = () => {
		this.subscription = Gyroscope.addListener(result => {
			this.setState({ gyroscopeData: result })
		})
	}

	unsubscribe = () => {
		this.subscription && this.subscription.remove()
		this.subscription = null
	}

	render() {
		let { x, y, z } = this.state.gyroscopeData

		return (
			<View style={styles.centeredContainer}>
				<Text>HomeScreen</Text>
				<Text>x: {x}</Text>
				<Text>y: {y}</Text>
				<Text>z: {z}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusBar: {
		backgroundColor: '#4a5c7a',
		height: Constants.statusBarHeight,
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		// marginHorizontal: 50,
		// height: Constants.statusBarHeight,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	titleText: {
		fontSize: 40,
		color: 'rgba(96,100,109, 1)',
		// lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
})
