import {
  FlatList, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from '../displays/CardDisplay';

import data from '../../data.json';

export default function Home({ navigation }) {
  const { navigate } = navigation;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#323232',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <FlatList
        data={data}
        renderItem={CardDisplay}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
      <Button title="Detail View" onPress={() => navigate('Detail')} />
    </>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
