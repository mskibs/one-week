import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Words() {
  const { t, i18n } = useTranslation();
  // or const [t, i18n] = useTranslation();

  return <p>{t("hello")}</p>
}