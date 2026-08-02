import type { BrandAccent } from "@/lib/types";

/** Точка-маркер: сплошная заливка оттенками бренда. */
export const accentDot: Record<BrandAccent, string> = {
  deep: "bg-brand-900",
  mid: "bg-[#007A8A]",
  bright: "bg-brand-700",
  light: "bg-[#00A89A]",
};

/** Насыщенный градиент для плашек и аватаров. */
export const accentGradient: Record<BrandAccent, string> = {
  deep: "bg-[linear-gradient(135deg,#006270_0%,#00E0C7_100%)]",
  mid: "bg-[linear-gradient(135deg,#007A8A_0%,#00E0C7_100%)]",
  bright: "bg-[linear-gradient(135deg,#009394_0%,#00E0C7_100%)]",
  light: "bg-[linear-gradient(135deg,#00A89A_0%,#00E0C7_100%)]",
};

/** Приглушённый градиент-подложка для превью кейсов. */
export const accentWash: Record<BrandAccent, string> = {
  deep: "bg-[linear-gradient(135deg,rgba(0,98,112,0.09)_0%,rgba(0,224,199,0.06)_100%)]",
  mid: "bg-[linear-gradient(135deg,rgba(0,122,138,0.09)_0%,rgba(0,224,199,0.06)_100%)]",
  bright:
    "bg-[linear-gradient(135deg,rgba(0,147,148,0.09)_0%,rgba(0,224,199,0.06)_100%)]",
  light:
    "bg-[linear-gradient(135deg,rgba(0,168,154,0.09)_0%,rgba(0,224,199,0.06)_100%)]",
};
