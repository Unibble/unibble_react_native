import React, { useState, useEffect } from 'react';
import BubbleDetailStatusBar from 'components/molcules/BubbleDetailStatusBar';
import {
  VStack,
  HStack,
  IconButton,
  Text,
  NativeBaseProvider,
  Box,
  FormControl,
  View,
  Input,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SafeAreaView, StyleSheet } from 'react-native';
import CreateBubbleStatusBar from 'components/molcules/CreateBubbleStatusBar';

import axios from 'axios';

export default function DetailBubbleScreen({ route }) {
  const [place, setPlace] = useState({});
  const [places, setPlaces] = useState([]);
  const [placeInfo, setPlaceInfo] = useState({});

  useEffect(() => {
    axios({
      method: 'POST',
      url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${place.name}`,
      headers: {
        Authorization: 'KakaoAK c2c089315c04689df141ea47a6c3f660',
      },
    }).then((response) => setPlaces(response.data.documents));
  }, [places]);

  return (
    <NativeBaseProvider>
      <CreateBubbleStatusBar
        placeName={placeInfo.placeName}
        placeAddress={placeInfo.placeAddress}
      />

      <Box flex={9} style={{ backgroundColor: 'white', paddingLeft: 16 }}>
        <View style={styles.container}>
          <VStack space={4}>
            <FormControl style={{ marginBottom: 20, marginTop: 30 }}>
              <FormControl.Label _text={{ bold: true }}>
                <Text style={styles.defaultText}>
                  어디에서 만날 버블인가요?
                </Text>
                <Text style={styles.pointColor}></Text>
              </FormControl.Label>
              <Input
                placeholder="장소를 입력해주세요"
                onChangeText={(value) => setPlace({ ...place, name: value })}
                value={place}
                style={{
                  borderColor: '#DBDBDB',
                  borderRightColor: 'transparent',
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                  fontSize: 16,
                }}
              />
            </FormControl>
            {places.map((document) => (
              <Box
                borderBottomWidth="1"
                borderRadius="10"
                paddingTop="15px"
                paddingLeft="18px"
                marginTop="2px"
                _dark={{
                  borderColor: 'gray.600',
                }}
                pl="4"
                pr="5"
                py="2"
                style={{
                  backgroundColor: `${
                    placeInfo.placeName === document.place_name
                      ? '#EDF6FF'
                      : '#FCFCFC'
                  }`,
                  borderColor: 'white',
                  width: '95%',
                }}
              >
                <HStack>
                  <Text style={styles.placeTitle}>{document.place_name}</Text>
                  <HStack style={{ marginLeft: 120 }}>
                    <IconButton
                      icon={
                        <FeatherIcon
                          name="cards-diamond"
                          size={20}
                          color="white"
                        />
                      }
                      onPress={() =>
                        setPlaceInfo({
                          placeName: `${document.place_name}`,
                          placeAddress: `${document.road_address_name}`,
                        })
                      }
                      style={{
                        backgroundColor: `${
                          placeInfo.placeName === document.place_name
                            ? '#7371FF'
                            : '#DBDBDB'
                        }`,
                        borderRadius: 50,
                      }}
                    />
                  </HStack>
                </HStack>
                <Text style={styles.placeAddress}>
                  {document.road_address_name}
                </Text>
              </Box>
            ))}
          </VStack>
        </View>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  pointColor: {
    color: '#DBDBDB',
    fontSize: 14,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    lineHeight: 21,
  },
  defaultText: {
    color: '#323232',
    fontSize: 16,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  placeTitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#323232',
    marginBottom: 6,
    width: 190,
  },
  placeAddress: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#4A4A4A',
  },
  choiceButton: {
    borderRadius: 50,
  },
});
