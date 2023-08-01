import {
  Button,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Page, Section, SectionBody, SectionHeader } from '@saas-ui-pro/react';
import {
  Property,
  PropertyLabel,
  PropertyList,
  PropertyValue,
  useSnackbar,
} from '@saas-ui/react';
import {
  articleContentToHtml,
  articleContentToText,
  headerToHtml,
} from './ArticlesHelper';

import { ArticlesContext } from './ArticlesContext';
import copy from 'copy-text-to-clipboard';
import { useContext } from 'react';

export const Article = () => {
  const { state } = useContext(ArticlesContext);
  const snackbar = useSnackbar();

  if (!state.selectedArticle || !state.selectedArticle.articleContent) {
    return <Page></Page>;
  }

  const { articleContent } = state.selectedArticle;

  return (
    <Page p='8' overflowY='auto'>
      <VStack divider={<StackDivider />}>
        <Section variant='annotated'>
          <SectionHeader title='HTML Tags' />
          <SectionBody>
            <Card>
              <CardBody>
                <Button
                  onClick={() => {
                    copy(headerToHtml(state.selectedArticle!!));
                    snackbar.success('Copied to clipboard!');
                  }}
                >
                  Copy HTML
                </Button>
                <PropertyList>
                  <Property>
                    <PropertyLabel>Title</PropertyLabel>
                    <PropertyValue>{state.selectedArticle!!.title}</PropertyValue>
                  </Property>
                  <Property>
                    <PropertyLabel>Meta Description</PropertyLabel>
                    <PropertyValue>
                      {state.selectedArticle.articleContent.metaDescription}
                    </PropertyValue>
                  </Property>
                </PropertyList>
              </CardBody>
            </Card>
          </SectionBody>
        </Section>
        <Section variant='annotated'>
          <SectionHeader title='Contents' />
          <SectionBody>
            <Card>
              <CardBody>
                <Stack spacing='5' lineHeight='1.75'>
                  <Button
                    onClick={() => {
                      copy(articleContentToHtml(state.selectedArticle!!));
                      snackbar.success('Copied to clipboard!');
                    }}
                  >
                    Copy HTML
                  </Button>
                  <Button
                    onClick={() => {
                      copy(articleContentToText(state.selectedArticle!!));
                      snackbar.success('Copied to clipboard!');
                    }}
                  >
                    Copy text
                  </Button>

                  <Heading as='h1'> {articleContent.title} </Heading>
                  <Text> {articleContent.introduction} </Text>
                  <Heading as='h2'> {articleContent.sectionASubheading} </Heading>
                  {articleContent.sectionAParagraphs.map((p) => (
                    <Text> {p} </Text>
                  ))}

                  <Heading as='h2'> {articleContent.sectionBSubheading} </Heading>
                  {articleContent.sectionBParagraphs.map((p) => (
                    <Text> {p} </Text>
                  ))}

                  <Heading as='h2'> {articleContent.sectionCSubheading} </Heading>
                  {articleContent.sectionCParagraphs.map((p) => (
                    <Text> {p} </Text>
                  ))}

                  <Text> {articleContent.conclusion} </Text>
                </Stack>
              </CardBody>
            </Card>
          </SectionBody>
        </Section>
      </VStack>

      <Section>
        {/* <SectionHeader title={state.selectedArticle?.title} /> */}
      </Section>
    </Page>
  );
};
