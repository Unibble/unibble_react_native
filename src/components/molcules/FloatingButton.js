import React from 'react';
import { Fab, Box, Center, NativeBaseProvider } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
export const FloatingButton = () => {
  const navigation = useNavigation();
  return (
    <Box position="relative" h={100} w="100%" style={{ zIndex: 6 }}>
      <Fab
        position="absolute"
        right={-180}
        bottom={-570}
        size="sm"
        icon={<Icon name="plus" size={30} color="white" />}
        style={{ zIndex: 10, backgroundColor: '#7371FF', cursor: 'pointer' }}
        onPress={() => navigation.navigate('CREATE_BUBBLE')}
      />
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      {/* <Center flex={2} px="3"> */}
      <FloatingButton />
      {/* </Center> */}
    </NativeBaseProvider>
  );
};
