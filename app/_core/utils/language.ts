import { i18n } from "next-i18next";

export const localeWithAlias = (locale) => (locale === "fa" ? "fa-IR" : locale);

export const localeQS = (locale) =>
    `locale=${localeWithAlias(locale || i18n.language)}`;
