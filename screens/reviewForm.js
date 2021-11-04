import React from 'react';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import { Button, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import FlatButton from '../styles/button';

let reviewSchema = yup.object().shape({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
			return parseInt(val) < 6 && parseInt(val) > 0;
		}),
});

const ReviewForm = ({ addReview }) => {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				validationSchema={reviewSchema}
				onSubmit={(values) => {
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput multiline minHeight={60} style={globalStyles.input} placeholder="Review title" onChangeText={props.handleChange('title')} value={props.values.title} />
						<Text style={globalStyles.errorText}>{props.errors.title}</Text>
						<TextInput multiline minHeight={60} style={globalStyles.input} placeholder="Review body" onChangeText={props.handleChange('body')} value={props.values.body} />
						<Text style={globalStyles.errorText}>{props.errors.body}</Text>
						<TextInput
							style={globalStyles.input}
							multiline
							minHeight={60}
							placeholder="Rating (1-5)"
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							keyboardType="numeric"
						/>
						<Text style={globalStyles.errorText}>{props.errors.rating}</Text>
						<FlatButton type="submit" text="Submit" onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	);
};

export default ReviewForm;
