import React, {useEffect, useState, FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {editItem, addItem} from '../redux/actions/actions';
import {DEFAULT_MODAL_SETTINGS} from '../constants/constants';
import IMAGE_NO_PHOTO from './../assets/image/no-photo.png';
import Icon from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import {SettingsDefault} from './../constants/types';
import {PayloadNewItem, PayloadEditItem} from '../redux/actions/types';
import {DataFetchUser} from '../api/types';
interface Props extends SettingsDefault {
  changeModalWindow: (args: SettingsDefault) => void;
}

const ModalWindow: FC<Props> = ({
  typeList,
  item,
  visible,
  changeModalWindow,
  fields,
}) => {
  const {control, handleSubmit, setValue} = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: PayloadNewItem | PayloadEditItem) => {
    if (item) {
      dispatch(editItem(typeList, item.id, data as PayloadEditItem));
    } else {
      dispatch(addItem(typeList, data as PayloadNewItem));
    }
    changeModalWindow(DEFAULT_MODAL_SETTINGS);
  };
  const imageNoPhotoUri = Image.resolveAssetSource(
    IMAGE_NO_PHOTO as ImageSourcePropType,
  ).uri;
  const [newAvatar, changeAvatar] = useState(imageNoPhotoUri);

  useEffect(() => {
    fields.forEach(el => {
      if (item) {
        if (el === 'avatar') {
          setValue(el, newAvatar);
        } else {
          setValue(el, item[el as keyof typeof item].toString());
        }
      } else {
        if (el === 'avatar') {
          setValue(el, newAvatar);
        } else {
          setValue(el, '');
        }
      }
    });
  });

  useEffect(() => {
    changeAvatar(item ? (item as DataFetchUser).avatar : imageNoPhotoUri);
  }, [changeAvatar, item, imageNoPhotoUri]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        changeModalWindow(DEFAULT_MODAL_SETTINGS);
      }}>
      <View style={styles.modalWrap}>
        <View style={styles.modal}>
          <Text style={styles.title}>{item ? 'Edit Item' : 'Add Item'}</Text>
          {typeList === 'usersList' ? (
            <View style={styles.imageWrap}>
              <Image style={styles.image} source={{uri: newAvatar}} />
              <TouchableOpacity
                onPress={async () => {
                  const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images],
                  });
                  setValue('avatar', res.uri);
                  changeAvatar(res.uri);
                }}
                style={styles.editArea}>
                <Icon name={'edit'} size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : null}
          {fields.map((el, index) => (
            <Controller
              control={control}
              key={index}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={
                    el === 'avatar'
                      ? [styles.input, {display: 'none'}]
                      : styles.input
                  }
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder={el}
                />
              )}
              name={el}
              defaultValue={''}
            />
          ))}
          <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textBtn}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
  imageWrap: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  editArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    alignItems: 'center',
    width: '90%',
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  btn: {
    marginBottom: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});

export default ModalWindow;
