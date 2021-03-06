import React, { useState } from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Badge,
  HStack,
  TextArea,
} from 'native-base';
import {
  StyleSheet,
  Text,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import token from 'config/key';

export default function CreateBubbleScreen({ route }) {
  const navigation = useNavigation();
  const [bubbleName, setBubbleName] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datetime, setDatetime] = React.useState('');
  const [bubbleLocation, setBubbleLocation] = React.useState('');
  const [bubbleGuests, setBubbleGuests] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [content, setContent] = React.useState('');

  const validate = () => {
    if (bubbleName.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return false;
    } else if (bubbleName.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      });
      return false;
    }
    return true;
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);

    hideDatePicker();
    setDatetime(date.format('yyyy-MM-dd HH:mm:ss'));
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/bubble/create_bubble/',
      data: {
        title: bubbleName.name,
        time2meet: datetime,
        location: `${route !== undefined ? route.params.placeName : ''}`,
        address: `${route !== undefined ? route.params.placeAddress : ''}`,
        lat: '1',
        lon: '1',
        guest_max: bubbleGuests['value'],
        'unit[]': unit,
        content: content.name,
      },
      headers: {
        Authorization: token,
      },
    }).then((response) =>
      axios({
        method: 'POST',
        url: `http://127.0.0.1:8000/bubble/participate_bubble/${response.data.id}/`,
        headers: {
          Authorization: 'token 274bf85fe885ed2556f0d05e1ead922d71fcf7fc',
        },
      }).then(() => navigation.navigate('MAIN')),
    );
  };
  return (
    <NativeBaseProvider>
      <Center flex={2} style={{ backgroundColor: 'white' }}>
        <VStack width="90%" mx="3">
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 20 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>????????? ????????? ???????????????.</Text>
              <Text style={styles.pointColor}> (?????? 20???)</Text>
            </FormControl.Label>
            <Input
              placeholder="????????? ???????????? ????????? ???????????????"
              onChangeText={(value) =>
                setBubbleName({ ...bubbleName, name: value })
              }
              value={bubbleName}
              style={{
                borderColor: '#DBDBDB',
                borderRightColor: 'transparent',
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                fontSize: 16,
              }}
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                {/* Name should contain atleast 3 character. */}
              </FormControl.HelperText>
            )}
          </FormControl>
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 20 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>?????? ?????? ????????????????</Text>
            </FormControl.Label>
            <TouchableOpacity onPress={showDatePicker}>
              <Input
                pointerEvents="none"
                placeholder="???, ???, ????????? ???????????????"
                value={datetime}
                editable={false}
                style={{
                  borderColor: '#DBDBDB',
                  borderRightColor: 'transparent',
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                  fontSize: 16,
                }}
              />
            </TouchableOpacity>
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 20 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>???????????? ?????? ????????????????</Text>
            </FormControl.Label>
            <TouchableOpacity
              onPress={() => navigation.navigate('SEARCH_PLACE')}
            >
              <Input
                placeholder="????????? ??????????????????"
                pointerEvents="none"
                editable={false}
                value={`${
                  route?.params?.placeName === undefined
                    ? ''
                    : route.params.placeName
                }`}
                style={{
                  borderColor: '#DBDBDB',
                  borderRightColor: 'transparent',
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                  fontSize: 16,
                }}
              />
            </TouchableOpacity>
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 20 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>
                ??? ?????? ????????? ?????? ????????????????
              </Text>
              <Text style={styles.pointColor}>(?????? 8???)</Text>
            </FormControl.Label>
            <Input
              placeholder="??????????????? ???????????????."
              onChangeText={(value) => setBubbleGuests({ value })}
              value={bubbleGuests}
              style={{
                borderColor: '#DBDBDB',
                borderRightColor: 'transparent',
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                fontSize: 16,
              }}
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <FormControl style={{ marginBottom: 20 }}>
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>?????? ????????? ??????????????????.</Text>
            </FormControl.Label>
            <HStack>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 1 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 1 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(1)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 20,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 1 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ???
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 2 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 2 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(2)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 20,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 2 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ???
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 3 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 3 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(3)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 3 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ??????
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 4 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 4 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(4)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 4 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ??????
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 5 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 5 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(5)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 5 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ??????
                  </Text>
                </Button>
              </Badge>
            </HStack>
            <HStack style={{ marginTop: 8 }}>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 6 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 6 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(6)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 6 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ??????
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 7 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 7 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(7)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 7 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ??????
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 8 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 8 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(8)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 50,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      { color: `${unit === 8 ? '#7371FF' : '#DBDBDB'}` },
                    ]}
                  >
                    ?????????
                  </Text>
                </Button>
              </Badge>
              <Badge
                style={[
                  styles.badge,
                  {
                    color: `${unit === 9 ? '#7371FF' : '#DBDBDB'}`,
                    borderColor: `${unit === 9 ? '#7371FF' : '#DBDBDB'}`,
                  },
                ]}
                alignSelf="center"
                varient={'outline'}
              >
                <Button
                  onPress={() => setUnit(9)}
                  style={{
                    backgroundColor: 'transparent',
                    height: 23,
                    width: 60,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                  }}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      {
                        color: `${unit === 9 ? '#7371FF' : '#DBDBDB'}`,
                      },
                    ]}
                  >
                    ????????????
                  </Text>
                </Button>
              </Badge>
            </HStack>
          </FormControl>
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 10 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>????????? ????????? ??????????</Text>
              <Text style={styles.pointColor}> (?????? 100???)</Text>
            </FormControl.Label>
            <TextArea
              h={24}
              placeholder="????????? ????????? ?????????, ???????????? ????????? ???????????????. ??????????????? ???????????? ????????? ????????? ?????????"
              w={{
                base: '100%',
                md: '25%',
              }}
              style={{ borderColor: '#DBDBDB', borderRadius: 12, fontSize: 14 }}
              onChangeText={(value) => setContent({ ...content, name: value })}
              value={content}
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <Button
            onPress={onSubmit}
            mt="5"
            style={{
              borderColor: '#DBDBDB',
              backgroundColor: '#7371FF',
              borderWidth: 1,
              borderRadius: 24,
            }}
          >
            <Text style={styles.unSubmitText}>?????? ?????????</Text>
          </Button>
        </VStack>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </Center>
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
  badge: {
    backgroundColor: 'white',
    fontFamily: 'Noto Sans KR',
    borderRadius: 18,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  badgeText: {
    color: '#7371FF',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Noto Sans KR',
    lineHeight: 24,
  },
  submitButton: {
    backgroundColor: 'transparent',
    borderColor: '#DBDBDB',
  },
  unSubmitText: {
    color: 'white',
    backgroundColor: '#7371FF',
    fontSize: 16,
    lineHeight: 24,
  },
});
