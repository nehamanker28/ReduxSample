/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './Redux/store';
import { decrement, increment } from './Redux/Counter/counterSlice';
import { RootState, AppDispatch } from './Redux/store';

function Root() {
  const counter = useSelector((state: RootState) => state.counterReducer.value); // Read state
  const dispatch = useDispatch<AppDispatch>(); // Dispatch actions
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {counter}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch(increment())}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch(decrement())}
      />
    </View>
  );
}
function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  counterText: {fontSize: 24, marginBottom: 20},
});

export default App;
