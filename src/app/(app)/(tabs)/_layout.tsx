import { Tabs } from 'expo-router'
import React from 'react'

import { Home } from '@/components/icons/Home'
import { Profile } from '@/components/icons/Profile'
import { TabBarAddPasswordIcon } from '@/components/shared/TabBarAddPasswordIcon'
import { TabBarIcon } from '@/components/shared/TabBarIcon'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

const Layout = () => {
	const tabScreenOptions: BottomTabNavigationOptions = React.useMemo(
		() => ({
			tabBarActiveTintColor: '#fff',
			tabBarInactiveTintColor: '#fff',
			tabBarShowLabel: false,
			tabBarStyle: {
				backgroundColor: '#f1f1f1',
				borderRadius: 10,
				paddingBottom: 0,
				marginHorizontal: 20,
				marginBottom: 20,
				height: 64,
				elevation: 0,
				position: 'absolute',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-evenly',
				flexDirection: 'row',
			},
		}),
		[],
	)

	return (
		<Tabs initialRouteName="index" screenOptions={tabScreenOptions}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused}>
							<Home />
						</TabBarIcon>
					),
				}}
			/>

			<Tabs.Screen
				name="addNewPassword"
				options={{
					title: 'Add New Password',
					headerShown: false,
					tabBarIcon: () => <TabBarAddPasswordIcon />,
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused}>
							<Profile />
						</TabBarIcon>
					),
				}}
			/>
		</Tabs>
	)
}

export default Layout
