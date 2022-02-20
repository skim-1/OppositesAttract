import React, { useState } from 'react';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

import { View, StatusBar } from 'react-native';
export default function App() {
  return (
    <Navigator />
  );
}