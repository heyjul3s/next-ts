import React from 'react';
import { useSetRecoilState } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';

import { searchbarQueryState } from './state/atoms';
import { TextField } from '@/components/common/index';

export default function Searchbar(): React.ReactElement {
  const setSearchQuery = useSetRecoilState(searchbarQueryState);

  const form = useForm({
    mode: 'all'
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <FormProvider {...form}>
      <form noValidate>
        <TextField
          id="searchbar"
          data-cy="searchbar"
          name="searchbar"
          type="search"
          labelText="Search"
          onChangeField={onChange}
          control={form.control}
        />
      </form>
    </FormProvider>
  );
}
