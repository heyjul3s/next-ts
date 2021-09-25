import React from 'react';
import { Global } from '@emotion/react';

export default function GlobalStyles(): React.ReactElement {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
      `}
    />
  );
}
