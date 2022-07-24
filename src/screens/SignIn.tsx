import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import { useState } from 'react';
import Logo from '../assets/logo_primary.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  const handleSignIn = () => {
    console.log(email, password);
  };

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
        onChangeText={setEmail}
      />
      <Input
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        placeholder='Senha'
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button onPress={handleSignIn} title='Entrar' w='full' mt={8} size='xs' />
    </VStack>
  );
};
