import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
	},
	titleText: {
		fontFamily: 'Poppins_700Bold',
		fontSize: 18,
		color: '#333',
	},
	paragraph: {
		marginVerticla: 8,
		lineHeight: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 6,
		fontSize: 18,
		margin: 5,
		padding: 4,
	},
	errorText: {
		color: 'crimson',
		marginTop: 5,
		marginBottom: 10,
		textAlign: 'center',
	},
});

export const images = {
	ratings: {
		1: require('../assets/rating-1.png'),
		2: require('../assets/rating-2.png'),
		3: require('../assets/rating-3.png'),
		4: require('../assets/rating-4.png'),
		5: require('../assets/rating-5.png'),
	},
};
