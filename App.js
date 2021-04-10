import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Button} from 'react-native';

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Lisa',
        surname: 'Ivanova',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        email: 'asd@asd.eu',
      },
      {
        id: 2,
        name: 'Lisa',
        surname: 'Ivanova',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        email: 'asd@asd.eu',
      },
    ],
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={{uri: item.avatar}} />
        </View>
        <View>
          <Text style={styles.name}>{`${item.name} ${item.surname}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Users List</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
        <Button title="Show More" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 2,
  },
  container: {
    backgroundColor: '#5ecfff',
    height: '100%',
  },
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
  list: {
    padding: 10,
  },
});

export default App;
