import React, {useState, FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';

const Camera: FC = () => {
  const [cameraMode, turnMode] = useState(false);
  const [photoUri, setUri] = useState('');

  const takePicture = async function (camera: RNCamera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setUri(data.uri);
    turnMode(false);
  };

  return (
    <View style={styles.container}>
      {cameraMode ? (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}>
          {({camera}) => {
            return (
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Icon name={'camera'} size={20} color="#000" />
              </TouchableOpacity>
            );
          }}
        </RNCamera>
      ) : (
        <>
          {photoUri ? (
            <Image style={styles.img} source={{uri: photoUri}} />
          ) : null}
          <TouchableOpacity onPress={() => turnMode(true)} style={styles.btn}>
            <Text>Take a photo</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5ecfff',
  },
  preview: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignSelf: 'center',
    margin: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    width: '80%',
    height: '80%',
    marginBottom: 20,
  },
});

export default Camera;
