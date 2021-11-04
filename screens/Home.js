import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
	const [reviews, setReviews] = useState([
		{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: "It's so cool, i just cry my mother", key: '1' },
		{ title: 'The Witcher 4, Yen attack', rating: 5, body: "It's so cool, i just eat my keyboard", key: '2' },
		{ title: 'Mass Effect Andromerdique', rating: 1, body: "It's so sad, Where is my nasty Shepard", key: '3' },
	]);

	const [modalVisible, setModalVisible] = useState(false);
	const addReview = (review) => {
		review.key = Math.random().toString();
		setReviews((oldState) => {
			return [...oldState, review];
		});
		setModalVisible(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalVisible} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<AntDesign style={{ ...styles.modalToogle, ...styles.modalClose }} name="close" size={24} color="black" onPress={() => setModalVisible(false)} />
						<Text style={styles.intro}>Enter a new review</Text>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<AntDesign name="pluscircleo" style={styles.modalToogle} size={24} color="black" onPress={() => setModalVisible(true)} />

			<FlatList
				data={reviews}
				//item = on destructure reviews
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
							<Card>
								<Text style={globalStyles.titleText}>{item.title}</Text>
							</Card>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	modalToogle: {
		marginBottom: 10,
		padding: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
	},
	modalContent: {
		flex: 1,
	},
	intro: {
		textAlign: 'center',
		fontSize: 15,
	},
});

export default Home;
