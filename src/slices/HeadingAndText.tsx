import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { PrismicSlice, PrismicKeyText, PrismicRichText } from '../prismic';

const Heading = styled.h1`
  margin-top: 0;
`;

const Text = styled.div`
`;

interface HeadingAndTextNonRepeatable {
  heading: PrismicKeyText;
  text: PrismicRichText;
}

export type HeadingAndTextSlice = PrismicSlice<HeadingAndTextNonRepeatable, null, 'headinge_and_text'>;

const HeadingAndText: React.FunctionComponent<HeadingAndTextNonRepeatable> = props => {
  const heading = oc(props).heading();
  const text = oc(props).text();

  if (!heading) {
    throw new Error('No heading');
  }

  if (!text) {
    throw new Error('No text');
  }

  return (
    <>
      <Heading>{heading}</Heading>
      <Text>{RichText.render(text)}</Text>
    </>
  )
};

export default HeadingAndText;
