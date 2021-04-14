import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const UserItem = ({item}) => (
  <View style={styles.listItem}>
    <View style={styles.imageWrap}>
      <Image style={styles.image} source={{uri: item.avatar}} />
    </View>
    <View>
      <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
      <Text>{item.email}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  imageWrap: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  name: {
    fontSize: 18,
  },
});

export default UserItem;
