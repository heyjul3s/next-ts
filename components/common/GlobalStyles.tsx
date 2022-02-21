import React from 'react';
import { Global } from '@emotion/react';

export function GlobalStyles(): React.ReactElement {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

        html,
        body {
          font-family: 'Inter', sans-serif;
        }
      `}
    />
  );
}
