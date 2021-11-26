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

function AppBar(props) {
  const navigation = useNavigation();
  const [isAll, setIsAll] = useState(true);
  const [isRiceCategory, setIsRiceCategory] = useState(false);
  const [isBeerCategory, setIsBeerCategory] = useState(false);
  const [isStudyCategory, setIsStudyCategory] = useState(false);
  const [isGameCategory, setIsGameCategory] = useState(false);

  const allButtonClick = () => {
    setIsAll(!isAll);
  };

  const RiceCategoryButtonClick = () => {
    setIsRiceCategory(!isRiceCategory);
  };

  const BeerCategoryButtonClick = () => {
    setIsBeerCategory(!isBeerCategory);
  };
  const StudyCategoryButtonClick = () => {
    setIsStudyCategory(!isStudyCategory);
  };
  const GameCategoryButtonClick = () => {
    setIsGameCategory(!isGameCategory);
  };

  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="white" />
      <HStack bg="white" alignItems="flex-end" style={styles.content}>
        <VStack space={2}>
          <HStack space="2" alignItems="center">
            <Button
              style={{
                backgroundColor: 'transparent',
                paddingLeft: 0,
                paddingRight: 0,
              }}
              onPress={() => navigation.navigate('PROFILE')}
            >
              <Image size={34} source={ProfileImage} alt="profile-image" />
            </Button>
            <Text
              color="#323232"
              fontSize="14"
              fontWeight="bold"
              style={styles.profileName}
            >
              두식
            </Text>
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
          <HStack bg="white">
            <Box>
              <Heading mb="4" fontSize={24} style={styles.heading}>
                버블 모아보기
              </Heading>
              {/* <Text color="#323232" fontSize="30" fontWeight="bold">
              두식
            </Text> */}
            </Box>
          </HStack>
          <HStack bg="none">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={() => {
                console.log('Scrolling is End');
              }}
              style={{ paddingBottom: 20 }}
            >
              <View style={styles.viewStyle1}>
                <Button
                  onPress={allButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${isAll ? '#B66DFF' : 'white'}`,
                    },
                  ]}
                  title=""
                ></Button>
                <Text style={styles.text}>전체</Text>
              </View>
              <View style={styles.viewStyle2}>
                <Button
                  onPress={RiceCategoryButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${
                        isRiceCategory ? '#B66DFF' : 'white'
                      }`,
                    },
                  ]}
                  title=""
                >
                  <Image size={34} source={RiceImage} alt="rice-image" />
                </Button>
                <Text style={styles.text}>밥</Text>
              </View>
              <View style={styles.viewStyle3}>
                <Button
                  onPress={BeerCategoryButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${
                        isBeerCategory ? '#B66DFF' : 'white'
                      }`,
                    },
                  ]}
                  title=""
                >
                  <Image size={34} source={BeerImage} alt="beer-image" />
                </Button>
                <Text style={styles.text}>술</Text>
              </View>
              <View style={styles.viewStyle4}>
                <Button
                  onPress={StudyCategoryButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${
                        isStudyCategory ? '#B66DFF' : 'white'
                      }`,
                    },
                  ]}
                  title=""
                >
                  <Image size={34} source={StudyImage} alt="study-image" />
                </Button>
                <Text style={styles.text}>스터디</Text>
              </View>
              <View style={styles.viewStyle5}>
                <Button
                  onPress={GameCategoryButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${
                        isGameCategory ? '#B66DFF' : 'white'
                      }`,
                    },
                  ]}
                  title=""
                >
                  <Image size={34} source={GameImage} alt="game-image" />
                </Button>
                <Text style={styles.text}>게임</Text>
              </View>
              <View style={styles.viewStyle3}>
                <Button
                  onPress={RiceCategoryButtonClick}
                  style={[
                    styles.button,
                    {
                      backgroundColor: `${
                        isRiceCategory ? '#B66DFF' : 'white'
                      }`,
                    },
                  ]}
                  title=""
                >
                  <Image size={34} source={RiceImage} alt="rice-image" />
                </Button>
              </View>
            </ScrollView>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <AppBar />
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
