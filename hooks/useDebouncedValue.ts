import React from 'react';

export function useDebouncedValue<TValue extends unknown>(
  value: TValue,
  delay: number
): TValue {
  const [debouncedValue, setDebouncedValue] = React.useState<TValue>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
