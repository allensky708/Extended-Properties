/**
 * Simplified Chinese - core dictionary.
 *
 * Translations live as data in `zh.json` and fall back to English for any
 * missing key, matching the reference dictionary in `en.json`.
 */
import type { StringDict } from "../i18n";
import data from "./zh.json";

export const coreZh = data as StringDict;
