import React from 'react';
import { RootNavigator } from './navigation/navigator';

// Ép kiểu RootNavigator thành một React Component hợp lệ để TypeScript không báo lỗi JSX
const NavigationComponent = RootNavigator as unknown as React.ComponentType<any>;

export default function App() {
  return <NavigationComponent />;
}