import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {editItem, addItem} from './../redux/actions/actions';
import {DEFAULT_MODAL_SETTINGS} from './../constants';

const ModalWindow = ({
  typeList,
  item,
  modalVisible,
  changeModalWindow,
  fields,
}) => {
  const {control, handleSubmit, setValue} = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    if (item) {
      dispatch(editItem(typeList, item.id, data));
    } else {
      dispatch(addItem(typeList, data, fields));
    }
    changeModalWindow(DEFAULT_MODAL_SETTINGS);
  };

  useEffect(() => {
    fields.map(el => {
      if (item) {
        setValue(el, item[el].toString());
      } else {
        setValue(el, '');
      }
    });
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        changeModalWindow(DEFAULT_MODAL_SETTINGS);
      }}>
      <View style={styles.modalWrap}>
        <View style={styles.modal}>
          <Text style={styles.title}>{item ? 'Edit Item' : 'Add Item'}</Text>
          {console.log(fields)}
          {fields.map((el, index) => (
            <Controller
              control={control}
              key={index}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
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
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
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
