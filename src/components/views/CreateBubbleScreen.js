import React, { Component } from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Container,
} from 'native-base';
import { StyleSheet, View, Text } from 'react-native';

function CreateBubbleScreen() {
  const [bubbleName, setBubbleName] = React.useState({});
  const [errors, setErrors] = React.useState({});
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

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl isInvalid={'name' in errors} style={{ marginBottom: 20 }}>
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
      <FormControl isInvalid={'name' in errors} style={{ marginBottom: 20 }}>
        <FormControl.Label _text={{ bold: true }}>
          <Text style={styles.defaultText}>언제 만날 버블인가요?</Text>
        </FormControl.Label>
        <Input
          placeholder="월, 일, 시간을 적어주세요"
          onChangeText={(value) =>
            setBubbleName({ ...bubbleName, name: value })
          }
          style={{
            borderColor: '#DBDBDB',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
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
      <FormControl isInvalid={'name' in errors} style={{ marginBottom: 20 }}>
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
      <FormControl isInvalid={'name' in errors} style={{ marginBottom: 20 }}>
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
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={2} style={{ backgroundColor: 'white' }}>
        <CreateBubbleScreen />
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
});
