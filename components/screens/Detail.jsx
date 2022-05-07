import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>BAZINGA !</Text>
      <Text>For version 2</Text>
      <Text>Stack navigation for detailed information of the post</Text>
    </View>
  );
}
