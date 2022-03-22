import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  loadUnknown,
  loadUsers,
  nextPageUnknown,
  nextPageUsers,
} from '../redux/actions/actions';
import {RootState} from '../redux/store/types';
import {DEFAULT_MODAL_SETTINGS} from '../constants/constants';
import ModalWindow from './ModalWindow';
import UnknownItem from './UnknownItem';
import UserItem from './UserItem';

type ListProps = {
  typeData: string;
};

const List = ({typeData}: ListProps) => {
  const currentPage = useSelector((state: RootState) => {
    console.log(state);
    return typeData === 'users' ? state.pageUsersList : state.pageUnknownList;
  });
  const listData = useSelector((state: RootState) => {
    return typeData === 'users' ? state.usersList : state.unknownList;
  });
  const isHideBtn = useSelector((state: RootState) => {
    return typeData === 'users' ? state.isEndUsersList : state.isEndUnknownList;
  });
  const currentFiedsList = useSelector((state: RootState) => {
    return typeData === 'users' ? state.fieldsUsers : state.fieldsUnknown;
  });
  const dispatch = useDispatch();
  const [modalWindowSettings, changeModalWindow] = useState(
    DEFAULT_MODAL_SETTINGS,
  );
  useEffect(() => {
    if (typeData === 'users') {
      dispatch(loadUsers());
    } else {
      dispatch(loadUnknown());
    }
  }, [currentPage, dispatch, typeData]);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>
          {typeData === 'users' ? 'My Friends' : 'My Colors'}
        </Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() =>
            changeModalWindow({
              visible: true,
              item: null,
              typeList: typeData === 'users' ? 'usersList' : 'unknownList',
              fields: currentFiedsList,
            })
          }>
          <Icon name={'plus-circle'} size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={listData}
        renderItem={({item}) =>
          typeData === 'users' ? (
            <UserItem item={item} changeModalWindow={changeModalWindow} />
          ) : (
            <UnknownItem item={item} changeModalWindow={changeModalWindow} />
          )
        }
        keyExtractor={item => `${typeData}_${item.id}`}
        style={styles.list}
        ListFooterComponent={
          isHideBtn ? null : (
            <Button
              onPress={() => {
                typeData === 'users'
                  ? dispatch(nextPageUsers())
                  : dispatch(nextPageUnknown());
              }}
              title="Show More"
            />
          )
        }
      />
      <ModalWindow
        typeList={modalWindowSettings.typeList}
        item={modalWindowSettings.item}
        modalVisible={modalWindowSettings.visible}
        changeModalWindow={changeModalWindow}
        fields={modalWindowSettings.fields}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
  container: {
    backgroundColor: '#5ecfff',
    flex: 1,
  },
  list: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleWrap: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 2,
  },
  addBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
});

export default List;
