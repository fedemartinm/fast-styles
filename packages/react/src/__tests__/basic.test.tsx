import { Text, View } from 'react-native';

import React from 'react';
import type { StyleProperties } from '../types';
import { render } from '@testing-library/react-native';
import { styled } from '../';

describe('Basic Component Styles', () => {
  it('work fine with an empty object', () => {
    const WrappedComponent = styled(View, {});
    const { root } = render(<WrappedComponent />);

    expect(root).toHaveStyle({});
  });

  it('applies default styles', () => {
    const styles: StyleProperties = {
      display: 'flex',
      flexDirection: 'row',
    };
    const Row = styled(View, styles);
    const { root } = render(<Row />);

    expect(root).toHaveStyle(styles);
  });

  it('combines style props and default styles', () => {
    const Row = styled(View, {
      display: 'flex',
      styleProps: {
        direction: 'flexDirection',
      },
    });
    const { root, rerender } = render(<Row direction="column" />);

    expect(root).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
    });

    rerender(<Row direction="row" />);
    expect(root).toHaveStyle({
      display: 'flex',
      flexDirection: 'row',
    });
  });

  it('set custom attributes', () => {
    const StyledComponent = styled(Text, {
      flex: 1,
      attributes: {
        children: 'Test',
      },
    });
    const { root } = render(<StyledComponent direction="column" />);

    expect(root).toHaveProp('children', 'Test');
    expect(root).toHaveStyle({
      flex: 1,
    });
  });
});
