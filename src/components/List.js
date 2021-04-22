import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';
import UserItem from './UserItem';
import UnknownItem from './UnknownItem';

const UsersList = ({typeData}) => {
  const [data, changeData] = useState([]);
  const [currentPage, changeCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const responseData = await axios(
        `https://reqres.in/api/${typeData}?page=${currentPage}`,
      );
      changeData(dataState => [...dataState, ...responseData.data.data]);
    };
    getData();
  }, [currentPage, typeData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{typeData} List</Text>
      <FlatList
        data={data}
        renderItem={typeData === 'users' ? UserItem : UnknownItem}
        keyExtractor={item => `${typeData}_${item.id}`}
        style={styles.list}
        ListFooterComponent={
          <Button
            onPress={() => changeCurrentPage(currentPage + 1)}
            title="Show More"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 2,
  },
  container: {
    backgroundColor: '#5ecfff',
    flex: 1,
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default UsersList;
