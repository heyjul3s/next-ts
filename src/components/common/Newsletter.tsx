import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { validator } from '@/utils/formSchema';
import { Form } from './Form';
import { TextField } from './TextField';

import type { DefaultFormFields } from 'react-mailchimp-subscribe';

export function Newsletter() {
  const validationSchema = Joi.object({
    newsletter_email: validator.email()
  });

  const onSubmit =
    (enrollNewsletter: (props: DefaultFormFields) => void) => (values: any) => {
      if (!!values?.email) {
        enrollNewsletter({ EMAIL: values.newsletter_email });
      }
    };

  return (
    <MailchimpSubscribe
      url={process?.env?.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL || ''}
      render={({ subscribe, status }) => {
        const hasSignedUp = status === 'success';
        const isMailchimpSubmissionError = status === 'error';

        return (
          <Form
            config={{ resolver: joiResolver(validationSchema) }}
            onSubmitForm={onSubmit(subscribe)}
          >
            {isMailchimpSubmissionError && (
              <div>Failed to submit. Please try again later.</div>
            )}

            {hasSignedUp && (
              <div>You have successfully signed up for our newsletter</div>
            )}

            {!hasSignedUp && (
              <Flex alignItems="center">
                <TextField
                  name="newsletter_email"
                  placeholder="Enter your email address"
                  type="email"
                  labelText="Sign up to our newsletter"
                />

                <Button type="submit" disabled={hasSignedUp}>
                  Submit
                </Button>
              </Flex>
            )}
          </Form>
        );
      }}
    />
  );
}
