import { CSSProperties } from 'react';

// type MultiStyles = { [key: string]: CSSProperties };
type NamedStyles<T> = { [P in keyof T]: CSSProperties };

const create = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): T | NamedStyles<T> => styles;

const merge = (...styles: CSSProperties[]): CSSProperties => {
  const r = {};
  if (styles.length > 0) {
    styles.map((s) => Object.assign(r, s));
  }
  return r;
};

export default { create, merge };
