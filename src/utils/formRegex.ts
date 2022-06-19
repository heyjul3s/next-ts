export const validationRegex = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)?(?=.*[@$!%*#?&-])[A-Za-z\d@$!%*#?&-]{6,}$/
};
