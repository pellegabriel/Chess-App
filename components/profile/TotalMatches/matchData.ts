import BULLET from "../../../assets/stats/BULLET.svg";
import BLITZ from "../../../assets/stats/BLITZ.svg";
import QUICK from "../../../assets/stats/QUICK.svg";
import { useTranslation } from "react-i18next";

export function useStats() {
  const { t } = useTranslation();
  const statsData = [
    {
      title: "BULLET",
      Icon: BULLET,
      stats: [
        { originalLabel: "W", label: t("totalMatches.w"), value: "32", percentage: "1%" },
        { originalLabel: "L", label: t("totalMatches.l"), value: "32", percentage: "1%" },
        { originalLabel: "D", label: t("totalMatches.d"), value: "32", percentage: "1%" }
      ]
    },
    {
      title: "BLITZ",
      Icon: BLITZ,
      stats: [
        { originalLabel: "W", label: t("totalMatches.w"), value: "32", percentage: "1%" },
        { originalLabel: "L", label: t("totalMatches.l"), value: "32", percentage: "1%" },
        { originalLabel: "D", label: t("totalMatches.d"), value: "32", percentage: "1%" }
      ]
    },
    {
      title: "QUICK",
      Icon: QUICK,
      stats: [
        { originalLabel: "W", label: t("totalMatches.w"), value: "32", percentage: "1%" },
        { originalLabel: "L", label: t("totalMatches.l"), value: "32", percentage: "1%" },
        { originalLabel: "D", label: t("totalMatches.d"), value: "32", percentage: "1%" }
      ]
    },
  ];
  return { statsData };
}