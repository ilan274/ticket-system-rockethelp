import { IInputProps, Input as NativeBaseInput } from 'native-base';

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      bg='gray.700'
      height={14}
      size='md'
      borderWidth={0}
      fontSize='md'
      fontFamily='body'
      color='white'
      placeholderTextColor='gray.300'
      mt={4}
      {...rest}
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        backgroundColor: 'gray.700',
      }}
    />
  );
};
