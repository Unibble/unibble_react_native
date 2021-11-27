import React, { useState, useEffect } from 'react';
import BubbleDetailStatusBar from 'components/molcules/BubbleDetailStatusBar';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Image,
  Badge,
  StatusBar,
  Stack,
  Input,
} from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import datetimeImage from 'assets/images/datetimeImage.png';

import ProfileImage from 'assets/images/profileImage.png';
import PlaceImage from 'assets/images/placeImage.png';
import NewProfileImage from 'assets/images/newProfile.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default function DetailBubbleScreen({ route }) {
  const [bubble, setBubble] = useState({});
  const item = {
    status: '참여완료',
    participants: '2/5',
  };
  let bubbleData = route.params;

  console.log(bubble);
  return (
    <NativeBaseProvider>
      <BubbleDetailStatusBar bubbleId={bubbleData.bubbleId} />

      <Box flex={9} style={{ backgroundColor: 'white', paddingLeft: 16 }}>
        <VStack style={{ marginTop: 20 }}>
          <HStack>
            <Image
              size={42}
              source={ProfileImage}
              alt="profile-image"
              style={{ marginRight: 10 }}
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
                {bubbleData.hostNickname}
              </Text>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                fontFamily="Noto Sans KR"
                color="#4A4A4A"
              >
                {bubbleData.hostUniv} {bubbleData.hostCampus}{' '}
                {bubbleData.hostMajor}
              </Text>
            </VStack>
            <Badge
              alignSelf="center"
              varient={'outline'}
              opacity={`${bubbleData.bubbleStatus === '모집마감' ? 0.2 : 1}`}
              style={{
                marginTop: 0,
                backgroundColor: `${
                  item.status === '참여하기' ? '#323232' : 'white'
                }`,
                borderColor: `${
                  item.status === '참여하기' ? 'white' : '#323232'
                }`,
                borderRadius: 18,
                marginLeft: 100,
              }}
            >
              <Text
                style={{
                  color: `${
                    bubbleData.bubbleStatus === '참여하기' ? 'white' : '#323232'
                  }`,
                  fontSize: 16,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 6,
                  paddingRight: 6,
                  fontWeight: '400',
                }}
              >
                {bubbleData.bubbleStatus}
              </Text>
            </Badge>
          </HStack>
        </VStack>
        <VStack style={{ marginTop: 16 }}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Text style={styles.Title}>{bubbleData.bubbleTitle}</Text>
              <Text style={styles.timeLineDescription}>스터디 1시간 전</Text>
            </Stack>

            <Text style={styles.subDescription}>
              {bubbleData.bubbleContent}
            </Text>
            <Badge style={styles.placeDescription}>
              <VStack style={{ marginLeft: -150 }}>
                <HStack>
                  <Image
                    size={21}
                    source={datetimeImage}
                    alt="profile-image"
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.boldText}>
                    {bubbleData.bubbleDeadline.replace('T', '-').split('-')[1]}
                    월<Text> </Text>
                    {bubbleData.bubbleDeadline.replace('T', '-').split('-')[2]}
                    일<Text> </Text>
                    {bubbleData.bubbleDeadline
                      .replace('T', '-')
                      .split('-')[3]
                      .slice(0, 2)}
                    시
                  </Text>
                  <Text>에 만나요!</Text>
                </HStack>
                <HStack style={{ marginTop: 16 }}>
                  <Image
                    size={21}
                    source={PlaceImage}
                    alt="place-image"
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.boldText}>
                    {bubbleData.bubbleLocation}
                  </Text>
                </HStack>
                <HStack style={{ marginTop: 4, marginLeft: 32 }}>
                  <Text
                    style={{ fontSize: 12, lineHeight: 18, fontWeight: '400' }}
                  >
                    서울 광진구 능동로 103 (화양동)
                  </Text>
                </HStack>
              </VStack>
            </Badge>
          </Stack>
          <Stack p="4" space={2}>
            <Stack space={2}>
              <HStack>
                <Image
                  size={42}
                  source={NewProfileImage}
                  alt="profile-image"
                  style={{ marginLeft: -10 }}
                />
                <Image
                  size={42}
                  source={NewProfileImage}
                  alt="profile-image"
                  style={{ marginLeft: -20 }}
                />
                <HStack style={{ marginTop: 10, marginLeft: 10 }}>
                  <Text style={styles.boldText}>{bubbleData.hostNickname}</Text>
                  <Text>님 외 {bubbleData.guestNum - 1}명 참여중</Text>
                </HStack>
                <HStack style={{ marginLeft: 10 }}>
                  <Badge
                    alignSelf="center"
                    varient={'outline'}
                    opacity={`${item.status === '모집마감' ? 0.2 : 1}`}
                    style={{
                      marginTop: 0,
                      backgroundColor: `${
                        item.status === '참여하기' ? '#323232' : 'white'
                      }`,
                      borderColor: `${
                        item.status === '참여하기' ? 'white' : '#323232'
                      }`,
                      borderRadius: 18,
                      marginLeft: 100,
                    }}
                  >
                    <Text
                      style={{
                        color: `${
                          item.status === '참여하기' ? 'white' : '#323232'
                        }`,
                        fontSize: 16,
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        paddingRight: 6,
                        fontWeight: '400',
                      }}
                    >
                      {bubbleData.guestNum}/{bubbleData.guestMax}명
                    </Text>
                  </Badge>
                </HStack>
              </HStack>
              <VStack
                style={{
                  backgroundColor: '#F9F9F9',
                  height: '200%',
                  width: '120%',
                  marginTop: 20,
                  marginLeft: -30,
                  paddingLeft: 30,
                  paddingTop: 10,
                }}
              >
                <Text style={styles.commentTotalCount}>댓글 1</Text>
                <HStack style={{ marginTop: 20 }}>
                  <Image
                    size={42}
                    source={ProfileImage}
                    alt="profile-image"
                    style={{ marginRight: 10 }}
                  />

                  <VStack>
                    <HStack>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        fontFamily="Noto Sans KR"
                        fontSize="14px"
                        color="#4A4A4A"
                        bold
                        style={{ marginRight: 4, lineHeight: 21 }}
                      >
                        지식
                      </Text>
                      <Badge
                        alignSelf="center"
                        varient={'outline'}
                        opacity={`${item.status === '모집마감' ? 0.2 : 1}`}
                        style={{
                          marginTop: 0,
                          backgroundColor: `${
                            item.status === '참여하기'
                              ? '#7371FF'
                              : 'transparent'
                          }`,
                          borderColor: `${
                            item.status === '참여하기'
                              ? 'transparent'
                              : '#7371FF'
                          }`,
                          borderRadius: 18,
                          marginLeft: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: `${
                              item.status === '참여하기' ? 'white' : '#7371FF'
                            }`,
                            fontSize: 12,
                            lineHeight: 18,
                            paddingTop: 2,
                            paddingBottom: 2,
                            paddingLeft: 10,
                            paddingRight: 10,
                          }}
                        >
                          참여 유니버
                        </Text>
                      </Badge>
                    </HStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      fontFamily="Noto Sans KR"
                      color="#4A4A4A"
                    >
                      건국대 서울캠 사회계열
                    </Text>
                  </VStack>

                  <Text
                    style={{
                      color: `${
                        item.status === '참여하기' ? 'white' : '#DBDBDB'
                      }`,
                      fontSize: 16,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 6,
                      paddingRight: 6,
                      fontWeight: '400',
                      marginLeft: 100,
                    }}
                  >
                    방금 전
                  </Text>
                </HStack>
              </VStack>
            </Stack>
          </Stack>
        </VStack>
      </Box>
      <Box
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          height: 100,
          backgroundColor: 'white',
          borderTopColor: '#DBDBDB',
          borderTopWidth: 1,
        }}
      >
        <Center flex={1} px="3">
          <HStack>
            <Input
              style={{
                marginTop: -20,
                borderRadius: 16,
                height: 48,
                borderColor: '#DBDBDB',
                paddingLeft: 20,
                marginLeft: -10,
              }}
              mx="3"
              placeholder="댓글을 입력해주세요."
              w={{
                base: '90%',
                md: '25%',
              }}
            />
            <IconButton
              style={{
                backgroundColor: '#F0F1F5',
                marginTop: -15,
                marginLeft: -55,
                borderRadius: 50,
                height: 35,
              }}
              icon={<Icon name="pencil" size={20} color="#4A4A4A" />}
            />
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: '#323232',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
    fontFamily: 'Noto Sans KR',
    marginLeft: -10,
  },
  timeLineDescription: {
    color: '#DBDBDB',
    fontSize: 14,
    fontFamily: 'Noto Sans KR',
    marginLeft: -10,
  },
  subDescription: {
    fontSize: 16,
    color: '#323232',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    marginTop: 20,
    marginLeft: -10,
  },
  placeDescription: {
    textAlign: 'left',
    width: '100%',
    marginLeft: -10,
    fontSize: 14,
    lineHeight: 21,
    color: '#323232',
    backgroundColor: 'transparent',
    borderColor: '#DBDBDB',
    borderRadius: 9,
    paddingTop: 20,
    paddingBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  commentTotalCount: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#4A4A4A',
  },
});
