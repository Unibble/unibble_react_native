import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppBar from 'components/molcules/Appbar.js';
import FloatingButton from 'components/molcules/FloatingButton.js';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {
  NativeBaseProvider,
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Text,
  Center,
  Button,
  Badge,
  View,
} from 'native-base';

function FeedScreen({ navigation }) {
  const navigations = useNavigation();
  const [bubbles, setBubbles] = useState([]);
  const [participants, setParticipants] = useState([]);
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
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: '미식',
      univName: '건국대 서울캠 공학계열',
      recentText: '곱창전골 먹을 사람!!',
      place: '왕가네 곱창 건대점',
      status: '모집마감',
      datetime: '11월 7일 18시',
      totalNum: '6',
      joinNum: '5',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: '두식',
      univName: '건국대 서울캠 공학계열',
      recentText: '카공하자.. 시험기간이다..',
      place: '엔제리너스 건대점',
      datetime: '11월 8일 18시',
      status: '참여완료',
      totalNum: '5',
      joinNum: '2',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: '두식',
      univName: '건국대 서울캠 공학계열',
      recentText: '곱창전골 먹을 사람!!',
      place: '왕가네 곱창 건대점',
      status: '참여완료',
      datetime: '11월 7일 18시',
      totalNum: '5',
      joinNum: '1',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: '미식',
      univName: '건국대 서울캠 인문계열',
      recentText: '같이 훠궈 먹어요!',
      place: '왕가네 곱창 건대점',
      datetime: '11월 7일 18시',
      status: '모집마감',
      totalNum: '5',
      joinNum: '1',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d73',
      fullName: '두식',
      univName: '건국대 서울캠 공학계열',
      recentText: '곱창전골 먹을 사람!!',
      place: '왕가네 곱창 건대점',
      datetime: '11월 7일 18시',
      status: '참여하기',
      totalNum: '5',
      joinNum: '1',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d74',
      fullName: '두식',
      univName: '건국대 서울캠 공학계열',
      recentText: '곱창전골 먹을 사람!!',
      place: '왕가네 곱창 건대점',
      datetime: '11월 7일 18시',
      status: '모집마감',
      totalNum: '5',
      joinNum: '1',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
  ];

  const isParticipate = (bubbleId) => {
    for (let i = 0; i < participants.length; i++) {
      if (participants[i].id === bubbleId) {
        return '참여완료';
      }
    }
    return '참여하기';
  };

  const compareDate = (datetime) => {
    let dateParsingData = datetime.split('-');
    let date = new Date(
      `${dateParsingData[0]}-${dateParsingData[1]}-${dateParsingData[2]}`,
    );
    return date.getTime();
  };

  const inviteBubble = (bubbleId) => {
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/bubble/participate_bubble/${bubbleId}/`,
      headers: {
        Authorization: 'token 274bf85fe885ed2556f0d05e1ead922d71fcf7fc',
      },
    }).then((response) => console.log('api'));
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/bubble/get_feed_bubble/',
      headers: {
        Authorization: 'token 274bf85fe885ed2556f0d05e1ead922d71fcf7fc',
      },
    }).then((response) => setBubbles(response.data));
  }, [bubbles]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/user/get_participate_bubble/',
      headers: {
        Authorization: 'token 274bf85fe885ed2556f0d05e1ead922d71fcf7fc',
      },
    }).then((response) => setParticipants(response.data));
  }, [participants]);
  return (
    <>
      <AppBar navigation={navigation} style={{ zIndex: 4 }} />
      <View style={styles.container}>
        <Center style={{ overflow: 'hidden' }}>
          <Box
            w={{
              base: 373,
              md: '100%',
            }}
            style={{ overflow: 'hidden' }}
          >
            <Center flex={1} px="3" style={{ zIndex: 10 }}>
              <FloatingButton />
            </Center>
            <FlatList
              data={bubbles}
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
                            {unitsTable[item.unit - 1]}
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
                      {`${compareDate(item.deadline)}` <
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
                      ) : (
                        <Button
                          onPress={() => {
                            `${isParticipate(item.bubbleId)}` !== '참여하기'
                              ? navigations.navigate('DETAIL_BUBBLE', {
                                  bubbleId: `${item.bubbleId}`,
                                  bubbleDeadline: `${item.deadline}`,
                                  bubbleTitle: `${item.title}`,
                                  bubbleStatus: `${isParticipate(
                                    item.bubbleId,
                                  )}`,
                                  hostNickname: `${item.host.nickName}`,
                                  bubbleContent: `${item.content}`,
                                  bubbleLocation: `${item.location}`,
                                  bubbleAddress: `${item.address}`,
                                  hostUniv: `${item.host.univName}`,
                                  hostMajor: `${item.host.major}`,
                                  hostCampus: `${item.host.univCampus}`,
                                  guestNum: `${item.guestNum}`,
                                  guestMax: `${item.guestMax}`,
                                })
                              : `${inviteBubble(item.bubbleId)}`;
                          }}
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <Badge
                            alignSelf="center"
                            varient={'outline'}
                            opacity={`${Date(item.deadline) < today ? 0.2 : 1}`}
                            style={{
                              marginTop: 40,
                              backgroundColor: `${
                                isParticipate(item.bubbleId) === '참여하기'
                                  ? '#323232'
                                  : 'white'
                              }`,
                              borderColor: `${
                                isParticipate(item.bubbleId) === '참여하기'
                                  ? 'white'
                                  : '#323232'
                              }`,
                              borderRadius: 18,
                            }}
                          >
                            <Text
                              style={{
                                color: `${
                                  isParticipate(item.bubbleId) === '참여하기'
                                    ? 'white'
                                    : '#323232'
                                }`,
                                fontSize: 12,
                              }}
                            >
                              {isParticipate(item.bubbleId)}
                            </Text>
                          </Badge>
                        </Button>
                      )}
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.bubbleId}
            />
          </Box>
        </Center>
      </View>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <FeedScreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    zIndex: 3,
    marginTop: -330,
  },
});
