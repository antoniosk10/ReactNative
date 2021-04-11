import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Button} from 'react-native';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.currentPage = 1;
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`https://reqres.in/api/users?page=${this.currentPage}`)
      .then(res => {
        this.setState(state => {
          state.data.push(...res.data.data);
          return state.data;
        });
      });
  }

  getNextPage() {
    this.currentPage++;
    this.getData();
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={{uri: item.avatar}} />
        </View>
        <View>
          <Text style={styles.name}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
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
        <Button onPress={() => this.getNextPage()} title="Show More" />
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
