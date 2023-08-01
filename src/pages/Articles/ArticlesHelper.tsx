import { Badge, LoadingBadge } from '../../components/Badges';

import { SerializedArticle } from '../../types/Article';
import { Tooltip } from '@chakra-ui/react';

export const getStatusTableCell = (data: any) => {
  const val = data.getValue();
  if (!val) return '';

  return val === 'Ready' ? (
    <Badge text={val} badgeProps={{ colorScheme: 'green' }} />
  ) : (
    <LoadingBadge text={val} badgeProps={{ colorScheme: 'purple' }} />
  );
};

export const getTitleTableCell = (data: any) => {
  const val = data.getValue();
  if (!val) return '';

  return <Tooltip label={val}>{val.substring(0, 50) + '...'}</Tooltip>;
};

export const articleContentToHtml = (a: SerializedArticle) => {
  let result = `<body>\n\t<title> ${a.title}</title>\n\t<p>${a.articleContent.introduction}</p>`;

  ['A', 'B', 'C'].forEach((letter) => {
    result += `\n\t<h2>${
      (a.articleContent as any)[`section${letter}Subheading`]
    }</h2>`;
    (a.articleContent as any)[`section${letter}Paragraphs`].forEach(
      (p: string) => (result += `\n\t<p>${p}</p>`)
    );
  });
  result += `\n\t<p>${a.articleContent.conclusion}</p>`;
  result += `\n</body>`;

  return result;
};

export const articleContentToText = (a: SerializedArticle) => {
  let result = `${a.title}\n\n${a.articleContent.introduction}`;

  ['A', 'B', 'C'].forEach((letter) => {
    result += `\n\n${(a.articleContent as any)[`section${letter}Subheading`]}`;
    (a.articleContent as any)[`section${letter}Paragraphs`].forEach(
      (p: string) => (result += `\n\n${p}`)
    );
  });
  result += `\n\n${a.articleContent.conclusion}`;

  return result;
};

export const headerToHtml = (a: SerializedArticle) => {
  return `<head>\n\t<title>${a.title}</title>\n\t<meta name="description" content="${a.articleContent.metaDescription}">\n</head>`;
};
