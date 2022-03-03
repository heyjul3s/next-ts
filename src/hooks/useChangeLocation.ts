import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import addDays from 'date-fns/addDays';

export function useChangeLocation(): void {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    if (cookie.NEXT_LOCALE !== locale) {
      const expires = addDays(new Date(), 100);
      setCookie('NEXT_LOCALE', locale, { path: '/', expires });
    }
  }, [locale, defaultLocale, cookie.NEXT_LOCALE, setCookie]);
}
