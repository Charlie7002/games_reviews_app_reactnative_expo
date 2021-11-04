import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const CustomHeader = ({ title }) => {
	return (
		<View style={styles.headerCustom}>
			<Image style={{ width: 40, height: 40, marginRight: 30 }} source={require('../assets/heart_logo.png')} />
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerCustom: {
		backgroundColor: 'slateblue',
		color: 'white',
		height: 50,
		width: 300,
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	title: { color: 'white', fontSize: 20, padding: 4 },
});

export default CustomHeader;
