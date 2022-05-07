/* eslint-disable react/no-array-index-key */
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import chatIcon from '../../assets/chat-icon.png';

const rickImageURL = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
  },
  picture: {
    width: '40%',
    height: '100%',
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
    gap: 5,
  },
  about: {
    color: '#000',
    fontSize: 14,
    width: '100%',
  },
  author: {
    color: '#454545',
    fontSize: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#f5f5f5',
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 5,
    fontSize: 6,
  },
  commentsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  commentsIcon: {
    height: 20,
    width: 25,
  },
  comments: {
    color: '#454545',
    fontSize: 10,
  },
});

export default function CardDisplay({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: rickImageURL }} style={styles.picture} />
      <View style={styles.cardBody}>
        <Text style={styles.about} numberOfLines={2}>{item.about}</Text>
        <Text style={styles.author}>{`By ${item.author}`}</Text>
        <View style={{ height: 10 }} />
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, idx) => <Text key={idx} style={styles.tag}>{tag}</Text>)}
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.commentsContainer}>
          <Image source={chatIcon} style={styles.commentsIcon} />
          <Text style={styles.comments}>{`Comments ${item.comments.length}`}</Text>
        </View>
      </View>
    </View>
  );
}

CardDisplay.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
