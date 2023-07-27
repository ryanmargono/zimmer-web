import { Button, Heading, Input, Stack } from '@chakra-ui/react';

import { ZimmerClient } from '../../clients/ZimmerClient';
import { async } from '../../helpers/TypescriptHelper';
import { sendMagicLinkEmailMutation } from '../../inputs/AuthInputs';
import { useSnackbar } from '@saas-ui/react';
import { useState } from 'react';

// import { Logo } from './Logo'

type AuthState = {
  email: string;
  submitLoading: boolean;
};

export const Auth = () => {
  const [state, setState] = useState<AuthState>({} as AuthState);
  const snackbar = useSnackbar();

  const handleSubmit = async () => {
    await setState((state) => ({ ...state, submitLoading: true }));

    const [_, err] = await async(
      ZimmerClient.graphQlRequest(sendMagicLinkEmailMutation({ value: state.email }))
    );
    !!err
      ? snackbar.error('Unable to send your log in link email. Please try again!')
      : snackbar.success('Your log in link has been sent. Please check your email!');

    await setState((state) => ({ ...state, submitLoading: false }));
  };

  return (
    <Stack spacing='8'>
      <Stack spacing='6' align='center'>
        {/* <Logo /> */}
        <Heading size={{ base: 'xs', md: 'sm' }}>Sign up or log in</Heading>
      </Stack>
      <Stack spacing='6'>
        <Input
          type='email'
          placeholder='Enter your email'
          onChange={(e: any) =>
            setState((state) => ({ ...state, email: e.target.value }))
          }
        />
        <Button onClick={handleSubmit} isLoading={state.submitLoading}>
          Continue with email
        </Button>
      </Stack>
    </Stack>
  );
};
