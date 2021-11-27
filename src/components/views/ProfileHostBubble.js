import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import NewProfileImage from 'assets/images/newProfileImage.png';
import ProfileTabStatusBar from 'components/molcules/ProfileTabStatusBar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {
  VStack,
  HStack,
  Button,
  IconButton,
  Text,
  Badge,
  NativeBaseProvider,
  Center,
  Image,
  Box,
  StatusBar,
  Stack,
  ScrollView,
  Heading,
  Avatar,
  FlatList,
  Spacer,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ route }) {
  const title = route.params.title;
  const [hosts, setHosts] = useState([]);
  let today = new Date();
  const unitsTable = [
    '밥',
    '술',
    '운동',
    '미팅',
    '게임',
    '영화',
    '산책',
    '스터디',
    '기타만남',
  ];
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: '두식',
      univName: '건국대 서울캠 공학계열',
      recentText: '같이 훠궈 먹어요!',
      place: '하이라디오 건대점',
      status: '참여하기',
      datetime: '11월 3일 18시',
      totalNum: '4',
      joinNum: '2',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/user/get_host_bubble/',
      headers: {
        Authorization: 'token 508f7da65e78e5a65e076109fe987f18e245b18e',
      },
    }).then((response) => setHosts(response.data));
  }, [hosts]);
  return (
    <NativeBaseProvider>
      <ProfileTabStatusBar />
      <Box flex={9} style={{ backgroundColor: 'white', paddingLeft: 16 }}>
        <View style={styles.container}>
          <VStack space={4}>
            <HStack style={{ marginTop: 30 }}>
              <Text style={styles.sectionTitle}>{title}</Text>
            </HStack>
            <HStack
              style={{
                backgroundColor: '#F0F1F5',
                width: '150%',
                height: '900%',
                zIndex: 4,
                top: 80,
                marginLeft: -50,
                position: 'absolute',
              }}
            ></HStack>
            <FlatList
              data={hosts}
              style={{ overflow: 'hidden', zIndex: 7 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Box
                  borderBottomWidth="1"
                  backgroundColor="#ffffff"
                  borderRadius="10"
                  paddingTop="18px"
                  paddingLeft="18px"
                  marginTop="12px"
                  _dark={{
                    borderColor: 'gray.600',
                  }}
                  borderColor="coolGray.200"
                  pl="4"
                  pr="5"
                  py="2"
                >
                  <HStack space={3} justifyContent="space-between">
                    <VStack style={{ maxWidth: '60%' }}>
                      <HStack>
                        <Avatar
                          size="28px"
                          border="1px solid #EAEAEA"
                          marginRight="10px"
                          source={{
                            uri: data[0].avatarUrl,
                          }}
                        />
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
                          {item.host.nickName}
                        </Text>
                        <Text
                          _dark={{
                            color: 'warmGray.50',
                          }}
                          fontFamily="Noto Sans KR"
                          color="#4A4A4A"
                        >
                          {item.host.univName} {item.host.univCampus}{' '}
                          {item.host.major}
                        </Text>
                      </HStack>
                      <HStack style={{ marginTop: 10 }}>
                        <Badge
                          style={styles.badge}
                          alignSelf="center"
                          varient={'outline'}
                        >
                          <Text style={{ color: '#7371FF', fontSize: 12 }}>
                            {item.unit}
                          </Text>
                        </Badge>
                        <Text
                          _dark={{
                            color: 'warmGray.50',
                          }}
                          fontFamily="Noto Sans KR"
                          fontSize="18px"
                          color="#323232"
                          bold
                          style={{ marginRight: 4, marginTop: -3 }}
                        >
                          {item.title}
                        </Text>
                      </HStack>
                      <HStack style={{ marginTop: 10 }}>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: 'warmGray.200',
                          }}
                          fontFamily="Noto Sans KR"
                        >
                          {item.location}
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: 'warmGray.200',
                          }}
                          fontFamily="Noto Sans KR"
                          style={{ marginLeft: 9, marginRight: 9 }}
                        >
                          |
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: 'warmGray.200',
                          }}
                          fontFamily="Noto Sans KR"
                        >
                          {item.deadline.replace('T', '-').split('-')[1]}월
                          <Text> </Text>
                          {item.deadline.replace('T', '-').split('-')[2]}일
                          <Text> </Text>
                          {item.deadline
                            .replace('T', '-')
                            .split('-')[3]
                            .slice(0, 2)}
                          시
                        </Text>
                      </HStack>
                    </VStack>
                    <Spacer />
                    <VStack>
                      <Badge
                        style={styles.joinInformationBadge}
                        alignSelf="center"
                        varient={'outline'}
                      >
                        <Text style={{ color: '#323232', fontSize: 12 }}>
                          {item.guestNum}/{item.guestMax}명
                        </Text>
                      </Badge>
                      {/* {`${compareDate(item.deadline)}` <
                      `${today.getTime()}` ? (
                        <Button
                          onPress={() => navigations.navigate('DETAIL_BUBBLE')}
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <Badge
                            alignSelf="center"
                            varient={'outline'}
                            opacity={
                              `${compareDate(item.deadline)}` >
                              `${today.getTime()}`
                                ? 0.2
                                : 1
                            }
                            style={{
                              marginTop: 40,
                              backgroundColor: `${
                                item.status === '참여하기' ? '#323232' : 'white'
                              }`,
                              borderColor: `${
                                item.status === '참여하기' ? 'white' : '#323232'
                              }`,
                              borderRadius: 18,
                            }}
                          >
                            <Text
                              style={{
                                color: `${
                                  item.status === '참여하기'
                                    ? 'white'
                                    : '#323232'
                                }`,
                                fontSize: 12,
                              }}
                            >
                              모집마감
                            </Text>
                          </Badge>
                        </Button>
                      ) : ( */}
                      <Button
                        onPress={() => {
                          navigations.navigate('DETAIL_BUBBLE', {
                            bubbleId: `${item.bubbleId}`,
                            bubbleDeadline: `${item.deadline}`,
                            bubbleTitle: `${item.title}`,
                            bubbleStatus: `참여완료`,
                            hostNickname: `${item.host.nickName}`,
                            bubbleContent: `${item.content}`,
                            bubbleLocation: `${item.location}`,
                            hostUniv: `${item.host.univName}`,
                            hostMajor: `${item.host.major}`,
                            hostCampus: `${item.host.univCampus}`,
                            guestNum: `${item.guestNum}`,
                            guestMax: `${item.guestMax}`,
                          });
                        }}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <Badge
                          alignSelf="center"
                          varient={'outline'}
                          opacity={`${Date(item.deadline) < today ? 0.2 : 1}`}
                          style={{
                            marginTop: 40,
                            backgroundColor: 'white',
                            borderColor: '#323232',
                            borderRadius: 18,
                          }}
                        >
                          <Text
                            style={{
                              color: '#323232',
                              fontSize: 12,
                            }}
                          >
                            참여완료
                          </Text>
                        </Badge>
                      </Button>
                      {/* )} */}
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.bubbleId}
            />
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
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: '#343434',
    fontWeight: 'bold',
  },
  tabMenu: {
    backgroundColor: '#F0F1F5',
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
  badge: {
    backgroundColor: 'white',
    borderColor: '#7371FF',
    color: '#7371FF',
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    marginRight: 6,
  },
  joinInformationBadge: {
    borderColor: '#323232',
    backgroundColor: 'white',
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
