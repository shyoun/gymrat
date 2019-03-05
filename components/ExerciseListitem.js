import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export const ExerciseListItem = ({ onPress, title }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View>
				<Text style={styles.itemText}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

ExerciseListItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4a5c7a',
		marginTop: 10,
		alignSelf: 'stretch',
		height: 40,
	},
	itemText: {
		color: '#c9d2e0',
		fontSize: 25,
		textAlign: 'center',
		justifyContent: 'center',
	},
})
