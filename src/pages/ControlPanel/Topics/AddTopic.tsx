import { Button, useDisclosure } from '@chakra-ui/react';
import { FormDialog, FormLayout, useSnackbar } from '@saas-ui/react';

import { AppContext } from '../../../AppContext';
import { ControlPanelContext } from '../ControlPanelContext';
import { ZimmerClient } from '../../../clients/ZimmerClient';
import { async } from '../../../helpers/TypescriptHelper';
import { getKeywordsQuery } from '../../../inputs/KeywordInput';
import { initiateCreateTopicFlowMutation } from '../../../inputs/TopicInput';
import { useContext } from 'react';

export const AddTopic = () => {
  const disclosure = useDisclosure();
  const snackbar = useSnackbar();
  const { appState } = useContext(AppContext);
  const { state, setState } = useContext(ControlPanelContext);

  const onSubmit = async (data: any) => {
    const [topic, createTopicErr] = await async(
      ZimmerClient.graphQlRequest(
        initiateCreateTopicFlowMutation({
          subject: data.subject,
          user: { id: appState.userId!! },
        })
      )
    );
    const [keywords, getKeywordsErr] = await async(
      ZimmerClient.graphQlRequest(
        getKeywordsQuery({
          where: { user: { id: appState.userId!! } },
        })
      )
    );

    if (!!createTopicErr || !!getKeywordsErr) {
      snackbar.error('Something went wrong! The team is on it.');
      return;
    }

    await setState((state: any) => ({
      ...state,
      selectedTopic: topic,
      topics: [topic, ...state.topics],
      keywords: [keywords, ...state.keywords],
      selectedKeywords: keywords,
    }));

    snackbar.success(
      `Topic saved! We'll take care of the Keyword research, check back in a couple of seconds!`
    );
    disclosure.onClose();
  };

  return (
    <>
      <Button variant='primary' onClick={() => disclosure.onOpen()}>
        Add topic
      </Button>

      <FormDialog
        title='New Topic'
        defaultValues={{ subject: '' }}
        {...disclosure}
        onSubmit={onSubmit}
      >
        {({ Field }) => (
          <FormLayout>
            <Field
              name='subject'
              label='Subject'
              type='text'
              rules={{ required: 'Subject is required' }}
              placeholder='Eg. Cybersecurity for SMBs'
              autoFocus
            />
            {/* <Field name='description' type='textarea' label='Description' /> */}
          </FormLayout>
        )}
      </FormDialog>
    </>
  );
};
