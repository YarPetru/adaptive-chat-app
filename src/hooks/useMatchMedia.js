import { useState, useLayoutEffect } from 'react';

const queries = [
  '(min-width: 0px) and (max-width: 766px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  });

  const typesOfScreen = ['isMobile', 'isTablet', 'isDesktop'];

  return typesOfScreen.reduce(
    (acc, screen, idx) => ({
      ...acc,
      [screen]: values[idx],
    }),
    {}
  );
};

export default useMatchMedia;
