import React from 'react';

export const keyMaps = {
  alt: 18,
  tab: 9,
  shift: 16,
  enter: 13,
  ctrl: 17,
  home: 36,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  escape: 27,
  capsLock: 20,
  pauseBreak: 19,
  backspace: 8,
  delete: 46,
  rightArrow: 39,
  downArrow: 40,
  leftArrow: 37,
  upArrow: 38,
  insert: 45,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  select: 93,
  leftWindows: 91,
  rightWindows: 92,
  numpad0: 96,
  numpad1: 97,
  numpad2: 98,
  numpad3: 99,
  numpad4: 100,
  numpad5: 101,
  numpad6: 102,
  numpad7: 103,
  numpad8: 104,
  numpad9: 105,
  multiply: 106,
  divide: 111,
  decimalPoint: 110,
  add: 107,
  subtract: 109,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  singleQuote: 222,
  closeBracket: 221,
  openBracket: 219,
  backSlash: 220,
  equals: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardSlash: 191,
  graveAccent: 192,
  numLock: 144,
  scrollLock: 145,
  semiColon: 186,
  commandMeta: 224
};

export interface IUseKeyEventProps {
  callbackEvent: () => void;
  targetKey: keyof typeof keyMaps;
}

export function useKeyEvent({ callbackEvent, targetKey }: IUseKeyEventProps) {
  const handleUserKeyPress = React.useCallback(
    (event: KeyboardEvent) => {
      const { keyCode } = event;

      if (keyCode === keyMaps[targetKey]) {
        callbackEvent();
      }
    },
    [callbackEvent]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
}
