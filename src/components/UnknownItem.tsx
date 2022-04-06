import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItem} from '../redux/actions/actions';
import {SettingsDefault} from './../constants/types';
import {DataFetchColor} from '../api/types';
import {RootState} from '../redux/store/types';

type Props = {
  changeModalWindow: (args: SettingsDefault) => void;
  item: DataFetchColor;
};

const UnknownItem: FC<Props> = ({item, changeModalWindow}) => {
  const dispatch = useDispatch();
  const fields: RootState['fieldsUnknown'] = useSelector(
    (state: RootState) => state.fieldsUnknown,
  );

  return (
    <TouchableOpacity
      onPress={() =>
        changeModalWindow({
          visible: true,
          item: item,
          typeList: 'unknownList',
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
            onPress: () => dispatch(deleteItem('unknownList', item.id)),
          },
        ])
      }>
      <View style={styles.listItem}>
        <View style={[styles.colorWrap, {backgroundColor: item.color}]} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{`${item.pantone_value} / ${item.year}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
