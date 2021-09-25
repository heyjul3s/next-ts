export const Heading = {
  baseStyle: {
    fontStyle: 'normal'
  },
  variants: {
    h1: {
      fontSize: ['45px', '45px', '65px'],
      fontWeight: ['600', '600', '600'],
      lineHeight: 1.1
    },

    h2: {
      fontSize: ['26px', '26px', '40px'],
      fontWeight: ['600', '600', '600'],
      lineHeight: 1.2
    },

    h3: {
      fontSize: ['20px', '20px', '22px'],
      fontWeight: 500,
      lineHeight: 1
    },

    h4: {
      fontSize: ['15px', '15px', '18px'],
      fontWeight: 500,
      lineHeight: 1.2
    }
  },
  defaultProps: {
    variant: 'h1'
  }
};
