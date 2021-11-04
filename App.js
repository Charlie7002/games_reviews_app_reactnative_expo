import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_300Light, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';

import ReviewDetails from './screens/ReviewDetails';
import RouteDrawer from './routes/RouteDrawer';
import CustomHeader from './shared/CustomHeader';

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_300Light,
		Poppins_700Bold,
		Poppins_400Regular,
	});

	const Stack = createNativeStackNavigator();

	if (!fontsLoaded) {
		//wait the font
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'slateblue' } }}>
						{/* Ne s'affiche pas renvoi direct au home du drawer sinon 2 header */}
						<Stack.Screen name="Hoooome que je veux cacher" component={RouteDrawer} options={{ headerShown: false }} />
						<Stack.Screen
							name="ReviewDetails"
							component={ReviewDetails}
							options={{ headerTitle: (props) => <CustomHeader title="Review Details" {...props} /> }}
							// options={{ title: "Review Details", headerStyle: { backgroundColor: "slateblue" }, headerTitleStyle: { color: "white" }, height: 60 }}
						/>
					</Stack.Group>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
