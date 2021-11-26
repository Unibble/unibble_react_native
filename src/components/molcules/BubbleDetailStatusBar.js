import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Text,
  NativeBaseProvider,
  Center,
  Image,
  Box,
  StatusBar,
  Stack,
  ScrollView,
  Heading,
} from 'native-base';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileImage from 'assets/images/profileImage.png';
import RiceImage from 'assets/images/riceImage.png';
import StudyImage from 'assets/images/studyImage.png';
import BeerImage from 'assets/images/beerImage.png';
import GameImage from 'assets/images/gameImage.png';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

export default function BubbleDetailStatusBar(props) {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="white" />
        <HStack bg="white" alignItems="flex-end" style={styles.content}>
          <VStack space={2}>
            <HStack space="2" alignItems="center">
              <IconButton
                icon={
                  <Icon
                    name="ios-chevron-back-outline"
                    size={20}
                    color="#4A4A4A"
                    onPress={() => {
                      navigation.navigate('MAIN');
                    }}
                  />
                }
                style={styles.backButton}
              />
              <Text
                color="#323232"
                fontSize="14"
                fontWeight="bold"
                style={styles.profileName}
              ></Text>
              <IconButton
                icon={
                  <Icon
                    name="ios-notifications"
                    size={20}
                    color="#4A4A4A"
                    onPress={() => {
                      navigation.navigate('DETAIL');
                    }}
                  />
                }
                style={styles.icon}
              />
            </HStack>
          </VStack>
        </HStack>
      </>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 16,
  },

  profileName: {
    width: 300,
  },
  icon: {
    textAlign: 'right',
  },
  backButton: {
    backgroundColor: '#F0F1F5',
    borderRadius: 50,
  },
  heading: {
    marginTop: 20,
  },
  horizontalView: {
    marginTop: 10,
  },
  button: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 54,
    marginBottom: 10,
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 1,
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 2,
    marginRight: 16,
    // margin

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },

  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#323232',
    marginLeft: -10,
  },
});

const SortingButton = styled(Button)`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
  border-radius: 35px;
  margin-right: 10px;
  shadowColor: rgba(0, 0, 0, 0.06);
  shadowOpacity: 1;
  shadowOffset: { height: 5 width: 2 };
  shadowRadius: 2px;
`;
