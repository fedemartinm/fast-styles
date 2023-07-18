import * as React from 'react';

import { Button } from './button';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Button size="small" type="negative" variant="outline">
        Text
      </Button>
      <Button size="small" type="negative" variant="solid">
        Text
      </Button>
      <Button size="small" type="primary" variant="outline">
        Text
      </Button>
      <Button size="small" type="primary" variant="solid">
        Text
      </Button>
      <Button size="medium" type="negative" variant="outline">
        Text
      </Button>
      <Button size="medium" type="negative" variant="solid">
        Text
      </Button>
      <Button size="medium" type="primary" variant="outline">
        Text
      </Button>
      <Button size="medium" type="primary" variant="solid">
        Text
      </Button>
      <Button size="large" type="negative" variant="outline">
        Text
      </Button>
      <Button size="large" type="negative" variant="solid">
        Text
      </Button>
      <Button size="large" type="primary" variant="outline">
        Text
      </Button>
      <Button size="large" type="primary" variant="solid">
        Text
      </Button>
    </ScrollView>
  );
}
