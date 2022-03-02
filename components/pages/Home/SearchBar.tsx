import React from 'react';
import { useSetRecoilState } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';

import { searchbarQueryState } from '@/state/searchBar/atoms';
import { TextField } from '@/components/common/index';

export function SearchBar(): React.ReactElement {
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
          onChange={
            onChange as
              | (React.ChangeEventHandler<HTMLInputElement> &
                  React.FormEventHandler<HTMLLabelElement> &
                  React.FormEventHandler<HTMLDivElement> &
                  ((event: any) => void))
              | undefined
          }
        />
      </form>
    </FormProvider>
  );
}
