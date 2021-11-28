import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import NewProfileImage from 'assets/images/newProfileImage.png';
import ProfileStatusBar from 'components/molcules/ProfileStatusBar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {
  VStack,
  HStack,
  IconButton,
  Text,
  Badge,
  NativeBaseProvider,
  Image,
  Box,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileParticipateBubbleScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/user/get_unibber/',
      headers: {
        Authorization: 'token 274bf85fe885ed2556f0d05e1ead922d71fcf7fc',
      },
    }).then((response) => setUser(response.data));
  }, []);

  return (
    <NativeBaseProvider>
      <ProfileStatusBar />
      <Box flex={9} style={{ backgroundColor: 'white', paddingLeft: 16 }}>
        <View style={styles.container}>
          <VStack space={4}>
            <HStack>
              <Image
                size="84px"
                border="1px solid #EAEAEA"
                marginRight="20px"
                source={NewProfileImage}
                alt="profile-image"
              />
              <VStack>
                <HStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    fontFamily="Noto Sans KR"
                    fontSize="20px"
                    color="#4A4A4A"
                    bold
                    style={{ marginRight: 4, marginTop: 10 }}
                  >
                    {user.nickname}
                  </Text>
                  <Badge
                    alignSelf="center"
                    varient={'outline'}
                    opacity={'1'}
                    style={{
                      marginTop: 13,
                      backgroundColor: 'white',
                      borderColor: '#7371FF',
                      borderRadius: 18,
                      marginLeft: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#7371FF',
                        fontSize: 12,
                        lineHeight: 18,
                        paddingTop: 2,
                        paddingBottom: 2,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      학교 인증 완료
                    </Text>
                  </Badge>
                </HStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  fontFamily="Noto Sans KR"
                  color="#4A4A4A"
                  fontSize="16px"
                >
                  {user.university} {user.campus} {user.major}
                </Text>
              </VStack>
            </HStack>
            <HStack style={{ marginTop: 30 }}>
              <Text style={styles.sectionTitle}>버블</Text>
            </HStack>
            <HStack>
              <Box style={styles.tabMenu} bg="FCFCFC" pl="4" pr="5" py="2">
                <HStack>
                  <Text style={styles.tabMenuTitle}>약속한 버블 </Text>
                  <IconButton
                    onPress={() =>
                      navigation.navigate('PROFILE_TAB_PARTICIPATE', {
                        title: '약속한 버블',
                      })
                    }
                    style={{
                      borderRadius: 20,
                      marginTop: -7,
                      right: 0,
                    }}
                    icon={
                      <Icon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#4A4A4A"
                      />
                    }
                  />
                </HStack>
              </Box>
            </HStack>
            <HStack>
              <Box style={styles.tabMenu} bg="FCFCFC" pl="4" pr="5" py="2">
                <HStack>
                  <Text style={styles.tabMenuTitle}>내가 띄운 버블</Text>
                  <IconButton
                    onPress={() =>
                      navigation.navigate('PROFILE_TAB_HOST', {
                        title: '내가 띄운 버블',
                      })
                    }
                    style={{
                      borderRadius: 20,
                      marginTop: -10,
                    }}
                    icon={
                      <Icon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#4A4A4A"
                      />
                    }
                  />
                </HStack>
              </Box>
            </HStack>
            <HStack>
              <Box style={styles.tabMenu} bg="FCFCFC" pl="4" pr="5" py="2">
                <HStack>
                  <Text style={styles.tabMenuTitle}>내가 찜한 버블</Text>
                  <IconButton
                    onPress={() =>
                      navigation.navigate('PROFILE_TAB_Like', {
                        title: '내가 찜한 버블',
                      })
                    }
                    style={{
                      borderRadius: 20,
                      marginTop: -10,
                    }}
                    icon={
                      <Icon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#4A4A4A"
                      />
                    }
                  />
                </HStack>
              </Box>
            </HStack>
            <HStack style={{ marginTop: 30 }}>
              <Text style={styles.sectionTitle}>서비스 관리</Text>
            </HStack>
            <HStack>
              <Box style={styles.tabMenu} bg="FCFCFC" pl="4" pr="5" py="2">
                <HStack>
                  <Text style={styles.tabMenuTitle}>공지사항</Text>
                  <IconButton
                    onPress={() =>
                      navigation.navigate('PROFILE_TAB_DETAIL', {
                        title: '공지사항',
                      })
                    }
                    style={{
                      borderRadius: 20,
                      marginTop: -10,
                    }}
                    icon={
                      <Icon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#4A4A4A"
                      />
                    }
                  />
                </HStack>
              </Box>
            </HStack>
            <HStack>
              <Box style={styles.tabMenu} bg="FCFCFC" pl="4" pr="5" py="2">
                <HStack>
                  <Text style={styles.tabMenuTitle}>신고하기</Text>
                  <IconButton
                    onPress={() =>
                      navigation.navigate('PROFILE_TAB_DETAIL', {
                        title: '신고하기',
                      })
                    }
                    style={{
                      borderRadius: 20,
                      marginTop: -10,
                    }}
                    icon={
                      <Icon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#4A4A4A"
                      />
                    }
                  />
                </HStack>
              </Box>
            </HStack>
          </VStack>
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
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 27,
    color: '#343434',
    fontWeight: 'bold',
  },
  tabMenu: {
    backgroundColor: '#FCFCFC',
    borderRadius: 9,
    width: '100%',
  },
  tabMenuTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Noto Sans KR',
    width: '93%',
    paddingTop: 5,
  },
});
