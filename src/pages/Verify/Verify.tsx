import { Button, Stack } from '@chakra-ui/react';
import {
  authenticateMagicLinkTokenMutation,
  authenticateSessionMutation,
} from '../../inputs/AuthInputs';
import { mutation, params, types } from 'typed-graphqlify';
import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AppContext } from '../../AppContext';
import { StringInput } from '../../inputs/CommonInputs';
import { ZimmerClient } from '../../clients/ZimmerClient';
import { async } from '../../helpers/TypescriptHelper';
import { serializeInput } from '../../helpers/GraphqlHelper';
import { useSnackbar } from '@saas-ui/react';

export const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const snackbar = useSnackbar();
  const { setAppState } = useContext(AppContext);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    const token = searchParams.get('token');

    if (!!token) {
      const [sessionToken, getSessionTokenErr] = await async(
        ZimmerClient.graphQlRequest<StringInput>(
          authenticateMagicLinkTokenMutation({ value: token })
        )
      );
      if (!!getSessionTokenErr || !sessionToken) {
        snackbar.error('Unable to verify your log in link. Please try again!');
        navigate('/auth');
        return;
      }

      const m = mutation({
        authenticateSession: params(
          { input: serializeInput(sessionToken) },
          { value: types.string }
        ),
      }).toString();

      const [userId, getUserIdErr] = await async(
        ZimmerClient.graphQlRequest<StringInput>(m)
      );
      if (!!getUserIdErr) {
        snackbar.error('Unable to authenticate. Please try again!');
        navigate('/auth');
        return;
      }

      await setAppState((state: any) => ({
        ...state,
        isAuthenticated: true,
        sessionToken: sessionToken?.value,
        userId: userId?.value,
      }));
      snackbar.success('Successfully logged in!');
      navigate('/');
    } else {
      snackbar.error('Unable to verify your log in link. Please try again!');
      navigate('/auth');
    }
  };

  return (
    <Stack spacing='8'>
      <Stack spacing='6' align='center'>
        {/* <Logo /> */}
      </Stack>
      <Stack spacing='6'>
        <Button isLoading>Continue with email</Button>
      </Stack>
    </Stack>
  );
};
