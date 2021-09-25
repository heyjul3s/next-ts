import React from 'react';

type MatchMediaProps = {
  query: string;
  children: (isMatch: boolean) => React.ReactNode;
};

export default function MatchMedia({
  query,
  children
}: MatchMediaProps): React.ReactNode {
  const matchListRef = React.useRef<MediaQueryList | null>(null);
  const [isMatch, setIsMatch] = React.useState<boolean>(false);
  const onMediaQueryListEvent = React.useCallback((e: MediaQueryListEvent) => {
    setIsMatch(e.matches);
  }, []);

  React.useEffect(() => {
    if (!!window?.matchMedia) {
      matchListRef.current = window.matchMedia(query);
      matchListRef.current.addEventListener('change', onMediaQueryListEvent);
      setIsMatch(matchListRef.current.matches);
    } else {
      console.error('Error: typeof "window" is undefined.');
      setIsMatch(false);
    }

    return function unmountMatchMedia() {
      if (!!matchListRef?.current) {
        matchListRef.current.removeEventListener(
          'change',
          onMediaQueryListEvent
        );
      }
    };
  }, [query]);

  return !!isMatch ? (
    <React.Fragment>{children(isMatch)}</React.Fragment>
  ) : null;
}
