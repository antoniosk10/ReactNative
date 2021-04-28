import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import UserItem from './UserItem';
import UnknownItem from './UnknownItem';
import {useSelector, useDispatch} from 'react-redux';
import {
  loadUsers,
  nextPageUsers,
  loadUnknown,
  nextPageUnknown,
} from '../redux/actions/actions';

const List = ({typeData}) => {
  const currentPage = useSelector(state => {
    return typeData === 'users' ? state.pageUsersList : state.pageUnknownList;
  });
  const listData = useSelector(state => {
    return typeData === 'users' ? state.usersList : state.unknownList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeData === 'users') {
      dispatch(loadUsers());
    } else {
      dispatch(loadUnknown());
    }
  }, [currentPage, dispatch, typeData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{typeData} List</Text>
      <FlatList
        data={listData}
        renderItem={typeData === 'users' ? UserItem : UnknownItem}
        keyExtractor={item => `${typeData}_${item.id}`}
        style={styles.list}
        ListFooterComponent={
          <Button
            onPress={() => {
              console.log(typeData);
              typeData === 'users'
                ? dispatch(nextPageUsers())
                : dispatch(nextPageUnknown());
            }}
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

export default List;
