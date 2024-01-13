import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import React, { useState } from "react";
import { BottomNavigation, Icon, useTheme } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "@/views/HomeScreen";
import StylesScreen from "@/views/StylesScreen";
import { CommonActions } from "@react-navigation/native";



type Item = {
    render: React.ComponentType<any>,
    key: string,
    title: string,
    icon: string
}

type Props = {
    listItems: Item[],
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

const Tab = createBottomTabNavigator();

const BottomBar = ({ listItems, navigation }: Props) => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    compact
                    shifting
                    navigationState={state}
                    safeAreaInsets={insets}
                    activeColor={theme.colors.primary}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label = options.tabBarLabel as string
                        return label;
                    }}
                    activeIndicatorStyle={{
                        backgroundColor: 'transparent',
                    }}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon source="home" size={size+5} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Styles"
                component={StylesScreen}
                options={{
                    tabBarLabel: 'Styles',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon source="brush-variant" size={size+5} color={color} />;
                    },
                }}
            />
        </Tab.Navigator >

    );
};

export default BottomBar

