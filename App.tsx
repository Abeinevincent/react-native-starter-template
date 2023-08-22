import 'react-native-gesture-handler';
import React from 'react';
import {MainStackScreens} from './src/navigation/MainStackScreens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainStackScreens />
    </QueryClientProvider>
  );
};

export default App;
