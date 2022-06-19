import { validationRegex } from '@/utils/index';

describe('formValidationRegex', () => {
  it('should return FALSE when provided an invalid e-mail address', () => {
    expect(validationRegex.email.test('hellogmailcom')).toEqual(false);
    expect(validationRegex.email.test('hellogmail.com')).toEqual(false);
    expect(validationRegex.email.test(' ')).toEqual(false);
  });

  it('should return TRUE when provided a valid e-mail address', () => {
    expect(validationRegex.email.test('hello@gmail.com')).toEqual(true);
  });
});
