import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {deleteItem} from '../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {DataFetchUser} from '../api/types';
import {RootState} from '../redux/store/types';
import {SettingsDefault} from './../constants/types';

type Props = {
  changeModalWindow: (args: SettingsDefault) => void;
  item: DataFetchUser;
};

const UserItem: FC<Props> = ({item, changeModalWindow}) => {
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.fieldsUsers);
  return (
    <TouchableOpacity
      onPress={() =>
        changeModalWindow({
          visible: true,
          item: item,
          typeList: 'usersList',
          fields: fields,
        })
      }
      onLongPress={() =>
        Alert.alert('Delete item', 'Are you shure?', [
          {
            text: 'Cancel',
          },
          {
            text: 'OK',
            onPress: () => dispatch(deleteItem('usersList', item.id)),
          },
        ])
      }>
      <View style={styles.listItem}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={{uri: item.avatar}} />
        </View>
        <View>
          <Text
            style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
