import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Words() {
  const { t } = useTranslation();
return (
  <div>
  <p>{t("chorus1")}</p>
  <p>{t("verse1-1")}</p>
  <p>{t("verse1-2")}</p>
  <p>{t("verse1-3")}</p>
  <p>{t("bridge1")}</p>
  <p>{t("chorus2")}</p>
  <p>{t("verse2-1")}</p>
  <p>{t("verse2-2")}</p>
  <p>{t("bridge2")}</p>
  <p>{t("chorus3")}</p>
  <p>{t("ending")}</p>
  
  </div>
);
  
}