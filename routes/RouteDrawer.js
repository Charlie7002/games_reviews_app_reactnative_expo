import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Home from '../screens/Home';
import CustomHeader from '../shared/CustomHeader';

const Drawer = createDrawerNavigator();

export default RouteDrawer = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'slateblue' } }}>
			<Drawer.Screen name="Home" component={Home} options={{ headerTitle: (props) => <CustomHeader title="GameZoom" {...props} /> }} />
			<Drawer.Screen name="About" component={About} options={{ headerTitle: (props) => <CustomHeader title="About" {...props} /> }} />
		</Drawer.Navigator>
	);
};
