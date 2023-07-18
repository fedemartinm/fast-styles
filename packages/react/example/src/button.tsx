import { Text, TouchableOpacity, type ViewStyle } from 'react-native';

import React, { type PropsWithChildren } from 'react';
import { styled } from '@fast-styles/react';

const ButtonRoot = styled(TouchableOpacity, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      'solid': {},
      'outline': {
        backgroundColor: 'transparent',
        borderWidth: 3,
      },
      'solid+primary': {
        backgroundColor: '#6b5faf',
      },
      'solid+negative': {
        backgroundColor: '#ff5867',
      },
      'solid+disabled': {
        backgroundColor: '#aaaaaa',
      },
      'outline+primary': {
        borderColor: '#6b5faf',
      },
      'outline+negative': {
        borderColor: '#ff5867',
      },
      'outline+disabled': {
        borderColor: '#aaaaaa',
      },
    },
    type: {
      primary: {},
      negative: {},
      disabled: {},
    },
    size: {
      small: {
        height: 40,
        width: '100%',
        maxWidth: 261,
        borderRadius: 20,
      },
      medium: {
        height: 50,
        width: '100%',
        maxWidth: 327,
        borderRadius: 25,
      },
      large: {
        height: 60,
        width: '100%',
        maxWidth: 393,
        borderRadius: 30,
      },
    },
  },
});

const ButtonText = styled(Text, {
  variants: {
    type: {
      primary: {},
      negative: {},
      disabled: {},
    },
    variant: {
      'solid': {
        color: '#ffffff',
      },
      'outline': {},
      'outline+primary': {
        color: '#6b5faf',
      },
      'outline+negative': {
        color: '#ff5867',
      },
      'outline+disabled': {
        color: '#aaaaaa',
      },
    },
    size: {
      small: {
        fontSize: 14,
      },
      medium: {
        fontSize: 16,
      },
      large: {
        fontSize: 18,
      },
    },
  },
});

interface ButtonProps extends PropsWithChildren<any> {
  size?: 'large' | 'medium' | 'small';
  type?: 'primary' | 'negative';
  variant?: 'outline' | 'solid';
  style?: ViewStyle;
  onPress?: () => void;
}

type NonOptionalProps<T> = {
  [K in keyof T]-?: T[K];
};

export const Button: React.FC<ButtonProps> = (props) => {
  const propsWithDefault = props as NonOptionalProps<ButtonProps>;
  return (
    <ButtonRoot
      variant={propsWithDefault.variant}
      size={propsWithDefault.size}
      type={propsWithDefault.type}
      style={props.style}
      onPress={props.onPress}
    >
      <ButtonText
        variant={propsWithDefault.variant}
        size={propsWithDefault.size}
        type={propsWithDefault.type}
      >
        {props.children}
      </ButtonText>
    </ButtonRoot>
  );
};

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  variant: 'solid',
};
