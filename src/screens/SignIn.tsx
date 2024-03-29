import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../Input/Input';

export const SignIn = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems='center' bg={'gray.600'} px={8} pt={24}>
      <Logo />

      <Heading color={'gray.100'} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        placeholder='Email'
      />
      <Input
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        placeholder='Senha'
        secureTextEntry
      />
    </VStack>
  );
};
