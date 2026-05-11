import { ru } from "@/locales/ru";
import { en } from "@/locales/en";

const lang = import.meta.env.VITE_LANG;

export const useLang = () => (lang === "en" ? en : ru);
