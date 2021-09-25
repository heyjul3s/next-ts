export const Text = {
  variants: {
    largeP: {
      fontSize: ['18px', '18px', '23px'],
      fontWeight: 500,
      lineHeight: 1.5
    },

    p: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.5
    },

    smallP: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.5
    },

    xSmallP: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: 1.5
    },

    pullQuote: {
      fontSize: ['25px', '25px', '30px'],
      fontWeight: 500,
      lineHeight: [1.1, 1.1, 1.25]
    },

    meta: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: 1.3
    }
  },
  defaultProps: {
    variant: 'p'
  }
};
