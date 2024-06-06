import CASUALWHITE from "../../assets/selectColor/CASUALWHITE.svg";
import CASUALBLACK from "../../assets/selectColor/CASUALBLACK.svg";
import CASUALRANDOM from "../../assets/selectColor/CASUALRANDOM.svg";
import ASSISTED from "../../assets/selectColor/ASSISTED.svg";
import NOASSIST from "../../assets/selectColor/NOASSIST.svg";
import FULLASSISTED from "../../assets/selectColor/FULLASSISTED.svg";
import { useTranslation } from "react-i18next";

export function useAvatars() {
  const { t } = useTranslation();
  const avatars = [
  {
    key: "CASUALWHITE",
    SvgComponent: CASUALWHITE,
    text: t("vsBots.white"),
  },
  {
    key: "CASUALRANDOM",
    SvgComponent: CASUALRANDOM,
    text: t("vsBots.random"),
  },
  {
    key: "CASUALBLACK",
    SvgComponent: CASUALBLACK,
    text: t("vsBots.black"),
  },
];
  return { avatars };
}

export function useAssist() {
  const { t } = useTranslation();
const assist = [
  {
    key: "NOASSIST",
    SvgComponent: NOASSIST,
    text:  t("vsBots.noassist"),
  },
  {
    key: "ASSISTED",
    SvgComponent: ASSISTED,
    text:  t("vsBots.assisted"),
  },
  {
    key: "FULLASSISTED",
    SvgComponent: FULLASSISTED,
    text:  t("vsBots.fullassisted"),
  },
];
  return { assist };
}


export const avatars = [
  {
    key: "CASUALWHITE",
    SvgComponent: CASUALWHITE,
    text: "WHITE",
  },
  {
    key: "CASUALRANDOM",
    SvgComponent: CASUALRANDOM,
    text: "RANDOM",
  },
  {
    key: "CASUALBLACK",
    SvgComponent: CASUALBLACK,
    text: "BLACK",
  },
];
export const assist = [
  {
    key: "NOASSIST",
    SvgComponent: NOASSIST,
    text: "NOASSIST",
  },
  {
    key: "ASSISTED",
    SvgComponent: ASSISTED,
    text: "ASSISTED",
  },
  {
    key: "FULLASSISTED",
    SvgComponent: FULLASSISTED,
    text: "FULLASSISTED",
  },
];