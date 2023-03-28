import { useCallback } from 'react';

import useTranslation from 'next-translate/useTranslation';

import LocalizeType from '@type/LocalizeType';

const getDefaultNS = (type?: LocalizeType): string | undefined => {
  switch (type) {
    case LocalizeType.COMMON:
      return 'common';

    default:
      return undefined;
  }
};

const useLocalize = (type?: LocalizeType) => {
  const { t } = useTranslation(getDefaultNS(type));

  const to = useCallback((element: string): string => t(element), [t]);

  return { to };
};

export default useLocalize;
