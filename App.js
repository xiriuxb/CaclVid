import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>

      <NativeRouter><Main></Main></NativeRouter>    
    </PaperProvider>
  );
}