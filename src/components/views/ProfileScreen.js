import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileImage from 'assets/images/newProfileImage.png';
import BubbleDetailStatusBar from 'components/molcules/BubbleDetailStatusBar';
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
  Avatar,
} from 'native-base';
export default function ProfileScreen() {
  return (
    <NativeBaseProvider>
      <BubbleDetailStatusBar />
      <Box flex={9} style={{ backgroundColor: 'white', paddingLeft: 16 }}>
        <View style={styles.container}>
          <VStack space={4}>
            <HStack>
              <Image
                size="84px"
                border="1px solid #EAEAEA"
                marginRight="20px"
                source={ProfileImage}
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  fontFamily="Noto Sans KR"
                  fontSize="14px"
                  color="#4A4A4A"
                  bold
                  style={{ marginRight: 4 }}
                >
                  두식
                </Text>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  fontFamily="Noto Sans KR"
                  color="#4A4A4A"
                >
                  sdfsdf
                </Text>
              </VStack>
            </HStack>
            <HStack></HStack>
            <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
          </VStack>
          {/* </Center> */}
        </View>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 3,
    margin: 38,
    marginLeft: 16,
    // backgroundColor: 'white',
    // marginTop: -330,
  },
});
