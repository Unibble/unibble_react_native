//MainScreen.js
import React, { Component } from 'react';
// import { View, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import Text from 'components/common/Text';
// import Card from 'components/molcules/Card';
import profileImage from 'assets/images/profileImage.png';
import AppBar from 'components/molcules/Appbar.js';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  Left,
  Button,
  IconButton,
  NativeBaseProvider,
  Badge,
  Center,
} from 'native-base';

function FeedScreen({ navigation }) {
  return (
    <>
      <AppBar navigation={navigation} />
    </>
    // </Container>
    // </View>
    // <NativeBaseProvider>
    //   <Container>
    //     <Header>
    //       <Left>
    //         <Button transparent>
    //           <Icon name="menu" />
    //         </Button>
    //       </Left>
    //     </Header>
    //   </Container>
    // </NativeBaseProvider>
    // <View>
    //   <View style={styles.container}>
    //     <View style={styles.HeaderContainer}>
    //       <Image style={styles.HeaderText} source={profileImage} />
    //       <Text style={styles.HeaderText}>Selfly</Text>
    //     </View>
    //     <View>
    //       <Icon
    //         name="ios-notifications"
    //         size={30}
    //         onPress={() => this.goMainScreen()}
    //       />
    //       <Text
    //         fontSize={30}
    //         fontFamily={'NotoSansKR-Bold'}
    //         style={styles.title}
    //       >
    //         버블 모아보기
    //       </Text>
    //     </View>
    //     <View style={styles.middleSection}></View>

    //     <View style={styles.content}>
    //       <FlatList
    //         keyExtractor={(item) => item.toString()}
    //         data={arr}
    //         renderItem={({ item }) => <Card num={item} />}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
  // }
  // goMainScreen() {
  //   this.props.navigation.navigate('DETAIL');
  // }
}

export default () => {
  return (
    <NativeBaseProvider>
      <FeedScreen />
    </NativeBaseProvider>
  );
};
