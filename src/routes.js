import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screans/Home";
import Profile from "./screans/Profile";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarShowLabel: "black",
            tabBarInactiveTintColor: "gray",
        }}>
            <Tab.Screen options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" size={24} color={color} />) }}
                name="Home" component={Home} />
            <Tab.Screen options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" size={24} color={color} />) }}
                name="profile" component={Profile} />
        </Tab.Navigator>
    );
}