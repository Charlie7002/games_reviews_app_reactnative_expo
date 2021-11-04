import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
	const { title, body, rating } = route.params;
	console.log(rating);

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{title}</Text>
				<Text>{body}</Text>
				<View style={styles.rating}>
					<Text>GameZoom rating:</Text>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	rating: {
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: "#eee",
	},
});

export default ReviewDetails;
