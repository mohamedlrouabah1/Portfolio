import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t('type.softwareDeveloper'),
          t('type.mulesoftDeveloper'),
          t('type.javaDeveloper'),
          t('type.salesforceDeveloper'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
