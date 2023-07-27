import { rawString } from 'typed-graphqlify';

export const serializeInput = (input: any): any => {
  if (typeof input === 'string') {
    return rawString(input);
  } else if (Array.isArray(input)) {
    return input.map((item: any) => serializeInput(item));
  } else if (typeof input === 'object' && input !== null) {
    const serializedObject: any = {};

    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        serializedObject[key] = serializeInput(input[key]);
      }
    }

    return serializedObject;
  }

  return input;
};
