import i18next from 'i18next';
import { z as zDefault } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/pt/zod.json';

i18next.init({
  lng: 'pt',
  resources: {
    pt: { zod: translation },
  },
});

zDefault.setErrorMap(zodI18nMap);

export * as zodCustom from 'zod';
