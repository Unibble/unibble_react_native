//MainScreen.js
import React, { Component } from 'react';
import { Row, Col } from '@ant-design/react-native';
import { View, StyleSheet, Button, Image } from 'react-native';
import Text from 'components/common/Text';
import Icon from 'react-native-vector-icons/Ionicons';
// import {
//   Container,
//   Content,
//   Thumbnail,
//   Header,
//   Left,
//   Right,
//   Body,
// } from 'native-base';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  header: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'white',
    height: '40%',
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  white: {
    backgroundColor: 'white',
  },
});

export default class FeedScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <Icon
              name="ios-notifications"
              size={30}
              onPress={() => this.goMainScreen()}
            />
          </View>

          <Icon
            name="ios-notifications"
            size={30}
            onPress={() => this.goMainScreen()}
          />
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
