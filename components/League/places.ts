import { useTranslation } from "react-i18next";
import { FIRST, SECOND, THIRD, FOURTH } from "./icons";
export function usePlaces() {
  const { t } = useTranslation();
  const places = [
    {
      key: "first",
      header: t("places.firstPlace"),
      description: t("places.firstPlaceDesc"),
      SvgComponent: FIRST,
    },
    {
      key: "second",
      header: t("places.secondPlace"),
      description: t("places.secondPlaceDesc"),
      SvgComponent: SECOND,
    },
    {
      key: "third",
      header: t("places.thirdPlace"),
      description: t("places.thirdPlaceDesc"),

      SvgComponent: THIRD,
    },
    {
      key: "fourth",
      header: t("places.fourthPlace"),
      description: t("places.fourthPlaceDesc"),

      SvgComponent: FOURTH,
    },
  ];
  return { places };
}
