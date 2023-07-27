import { Heading, Stack, Text } from '@chakra-ui/react';
import { Page, Section, SectionBody, SectionHeader } from '@saas-ui-pro/react';

import { ArticlesContext } from './ArticlesContext';
import { useContext } from 'react';

export const Article = () => {
  const { state } = useContext(ArticlesContext);

  if (!state.selectedArticle || !state.selectedArticle.articleContent) {
    return <Page></Page>;
  }

  const { articleContent } = state.selectedArticle;

  return (
    <Page p='8'>
      <Section>
        {/* <SectionHeader title={state.selectedArticle?.title} /> */}
        <SectionBody>
          <Stack spacing='5' lineHeight='1.75'>
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
        </SectionBody>
      </Section>
    </Page>
  );
};
