import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getItemStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error);
  }
};
