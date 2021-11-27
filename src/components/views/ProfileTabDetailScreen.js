import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NewProfileImage from 'assets/images/newProfileImage.png';
import ProfileTabStatusBar from 'components/molcules/ProfileTabStatusBar';
import { useNavigation } from '@react-navigation/native';

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
      status: '참여하기',
      totalNum: '5',
      joinNum: '1',
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
                height: '100%',
                zIndex: 4,
                top: 80,
                marginLeft: -50,
                position: 'absolute',
              }}
            ></HStack>
            <FlatList
              data={data}
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
                    <VStack style={{ maxWidth: '70%' }}>
                      <HStack>
                        <Avatar
                          size="28px"
                          border="1px solid #EAEAEA"
                          marginRight="10px"
                          source={{
                            uri: item.avatarUrl,
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
                          {item.fullName}
                        </Text>
                        <Text
                          _dark={{
                            color: 'warmGray.50',
                          }}
                          fontFamily="Noto Sans KR"
                          color="#4A4A4A"
                        >
                          {item.univName}
                        </Text>
                      </HStack>
                      <HStack style={{ marginTop: 10 }}>
                        <Badge
                          style={styles.badge}
                          alignSelf="center"
                          varient={'outline'}
                        >
                          <Text style={{ color: '#7371FF', fontSize: 12 }}>
                            밥
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
                          style={{
                            marginRight: 4,
                            marginTop: -3,
                          }}
                        >
                          {item.recentText}
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
                          {item.place}
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
                          {item.datetime}
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
                          {item.joinNum}/{item.totalNum}명
                        </Text>
                      </Badge>
                      <Button
                        onPress={() => navigations.navigate('DETAIL_BUBBLE')}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <Badge
                          alignSelf="center"
                          varient={'outline'}
                          opacity={`${item.status === '모집마감' ? 0.2 : 1}`}
                          style={{
                            marginTop: 47,
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
                                item.status === '참여하기' ? 'white' : '#323232'
                              }`,
                              fontSize: 12,
                            }}
                          >
                            {item.status}
                          </Text>
                        </Badge>
                      </Button>
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.id}
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
