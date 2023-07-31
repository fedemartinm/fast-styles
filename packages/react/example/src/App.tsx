import * as React from 'react';

import { defaultTheme, styled } from '@fast-styles/react';

import { View } from 'react-native';

const Stack = styled(View, {
  display: 'flex',
  styleProps: {
    w: 'width',
    h: 'height',
    gap: 'gap',
    wrap: 'flexWrap',
    direction: 'flexDirection',
  },
});

const ColorBox = styled(View, {
  borderRadius: defaultTheme.borderRadiuses.$3,
  height: defaultTheme.spacings.$12,
  width: defaultTheme.spacings.$12,
  styleProps: {
    bg: 'backgroundColor',
  },
});

export default function App() {
  return (
    <Stack direction="row" wrap={'wrap'} gap={defaultTheme.spacings.$1} w={412} h={360}>
      {Object.values(defaultTheme.colors).map((value: any, index) => (
        <ColorBox key={index} bg={value} />
      ))}
    </Stack>
  );
}
