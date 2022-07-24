import { HStack, IconButton, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';
export const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
      <HStack
        w='full'
        justifyContent='space-between'
        alignContent='center'
        bg='gray.700'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
    </VStack>
  );
};
