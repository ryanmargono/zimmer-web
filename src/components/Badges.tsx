import { Badge as ChakraBadge, HStack, Text } from '@chakra-ui/react';

import { LoadingSpinner } from '@saas-ui/react';

export const LoadingBadge = (props: { text: string; badgeProps?: any }) => {
  return (
    <ChakraBadge {...props.badgeProps}>
      <HStack>
        <LoadingSpinner size='sm' thickness='2px' m='1' />
        <Text mr='1'> {props.text} </Text>
      </HStack>
    </ChakraBadge>
  );
};

export const Badge = (props: { text: string; badgeProps?: any }) => {
  return (
    <ChakraBadge {...props.badgeProps}>
      <HStack>
        <Text m='1'> {props.text} </Text>
      </HStack>
    </ChakraBadge>
  );
};
