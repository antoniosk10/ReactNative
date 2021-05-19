import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UnknownItem = ({item}) => (
  <View style={styles.listItem}>
    <View style={[styles.colorWrap, {backgroundColor: item.color}]} />
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{`${item.pantone_value} / ${item.year}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  colorWrap: {
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
  title: {
    fontSize: 20,
  },
});

export default UnknownItem;
