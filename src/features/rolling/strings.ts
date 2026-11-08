/** Rolling-module locale strings - data in `strings.json` (F4: i18n as data). */
import type { StringDict } from "../../i18n/i18n";
import data from "./strings.json";
import dataZh from "./strings.zh.json";

export const rollingEn = data as StringDict;
export const rollingZh = dataZh as StringDict;
