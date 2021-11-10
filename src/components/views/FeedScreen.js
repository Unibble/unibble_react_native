//MainScreen.js
import React, { Component } from 'react';
import { Row, Col } from '@ant-design/react-native';
import { View, StyleSheet, Button, Image } from 'react-native';
import Text from 'components/common/Text';
import alertImage from 'assets/images/alertImage.png';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  white: {
    backgroundColor: 'white',
  },
});

export default class FeedScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.white}>
          <Image source={alertImage} onPress={() => this.goMainScreen()} />
          {/* <Button
            onPress
            title="Go Detail Screen"
          ></Button> */}
        </View>
        <View>
          <Text fontSize={30} fontFamily={'NotoSansKR-Bold'}>
            버블 모아보기
          </Text>
        </View>
      </View>
    );
  }
  goMainScreen() {
    this.props.navigation.navigate('DETAIL');
  }
}
