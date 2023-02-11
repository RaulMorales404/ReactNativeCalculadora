import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Calculadora from './src/screens/Calculadora.tsx';
import { styles } from './src/theme/AppTheme';
export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
