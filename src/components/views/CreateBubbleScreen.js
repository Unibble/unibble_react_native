import React, { useState } from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Container,
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
import format from 'utils/datetime';

export default function CreateBubbleScreen() {
  const [bubbleName, setBubbleName] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datetime, setDatetime] = React.useState('');

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
  console.log(datetime);

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
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
              <Text style={styles.defaultText}>버블에 제목을 붙여주세요.</Text>
              <Text style={styles.pointColor}> (최대 20자)</Text>
            </FormControl.Label>
            <Input
              placeholder="간단한 제목으로 약속을 알려주세요"
              onChangeText={(value) =>
                setBubbleName({ ...bubbleName, name: value })
              }
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
              <Text style={styles.defaultText}>언제 만날 버블인가요?</Text>
            </FormControl.Label>
            <TouchableOpacity onPress={showDatePicker}>
              <Input
                pointerEvents="none"
                placeholder="월, 일, 시간을 적어주세요"
                // onChangeText={(value) =>
                //   setBubbleName({ ...bubbleName, name: value })
                // }
                value={datetime}
                editable={false}
                // onPress={showDatePicker}
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
              <Text style={styles.defaultText}>어디에서 만날 버블인가요?</Text>
            </FormControl.Label>
            <Input
              placeholder="장소를 입력해주세요"
              onChangeText={(value) =>
                setBubbleName({ ...bubbleName, name: value })
              }
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
              <Text style={styles.defaultText}>
                몇 명의 인원이 만날 예정인가요?
              </Text>
              <Text style={styles.pointColor}>(최대 8명)</Text>
            </FormControl.Label>
            <Input
              placeholder="최소인원, 최대인원을 적어주세요."
              onChangeText={(value) =>
                setBubbleName({ ...bubbleName, name: value })
              }
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
          <FormControl style={{ marginBottom: 20 }}>
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>관련 유닛을 선택해주세요.</Text>
            </FormControl.Label>
            {/* <View>{menuList}</View> */}
            <HStack>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>밥</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>술</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>운동</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>미팅</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>게임</Text>
              </Badge>
            </HStack>
            <HStack style={{ marginTop: 8 }}>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>영화</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>산책</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>스터디</Text>
              </Badge>
              <Badge
                style={styles.badge}
                alignSelf="center"
                varient={'outline'}
              >
                <Text style={styles.badgeText}>기타만남</Text>
              </Badge>
            </HStack>
          </FormControl>
          <FormControl
            isInvalid={'name' in errors}
            style={{ marginBottom: 10 }}
          >
            <FormControl.Label _text={{ bold: true }}>
              <Text style={styles.defaultText}>추가할 내용이 있나요?</Text>
              <Text style={styles.pointColor}> (최대 100자)</Text>
            </FormControl.Label>
            <TextArea
              h={24}
              placeholder="약속에 필요한 준비물, 구체적인 장소를 알려주세요. 필요하다면 오픈채팅 링크를 남겨도 좋아요"
              w={{
                base: '100%',
                md: '25%',
              }}
              style={{ borderColor: '#DBDBDB', borderRadius: 12, fontSize: 14 }}
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
          <Button
            onPress={onSubmit}
            mt="5"
            style={{
              borderColor: '#DBDBDB',
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderRadius: 24,
            }}
          >
            <Text style={styles.unSubmitText}>버블 띄우기</Text>
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

// export default function () {
//   return (
//     <NativeBaseProvider>
//       <Center flex={2} style={{ backgroundColor: 'white' }}>
//         <CreateBubbleScreen />
//       </Center>
//     </NativeBaseProvider>
//   );
// }

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
    borderColor: '#7371FF',
    color: '#7371FF',
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
    color: '#DBDBDB',
    fontSize: 16,
    lineHeight: 24,
    // paddingTop: 6,
    // paddingBottom: 6,
  },
});
