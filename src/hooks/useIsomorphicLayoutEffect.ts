import { useLayoutEffect, useEffect } from 'react';

export const useIsomorphicLayoutEffect = !!window ? useLayoutEffect : useEffect;
