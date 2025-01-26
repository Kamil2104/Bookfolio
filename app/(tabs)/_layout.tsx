import React from 'react';

import { Tabs } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { TabBar } from '@/interfaces/Tabs';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {

  return <MaterialCommunityIcons size={28} style={{ marginBottom: -2 }} {...props} />;
}

export default function TabLayout() {
  const tabBars: TabBar[] = [
    { name: 'index', title: 'Strona główna', icon: 'home' },
    { name: 'two', title: 'Biblioteka', icon: 'bookshelf' }
  ]

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60
        }
      }}>
      {tabBars.map((tab: TabBar) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            title: tab.title,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}