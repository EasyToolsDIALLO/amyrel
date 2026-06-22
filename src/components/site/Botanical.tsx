import oliveAsset from "@/assets/botanicals/olive.png.asset.json";
import pomegranateAsset from "@/assets/botanicals/pomegranate.png.asset.json";
import watermelonAsset from "@/assets/botanicals/watermelon.png.asset.json";
import baobabAsset from "@/assets/botanicals/baobab.png.asset.json";
import marulaAsset from "@/assets/botanicals/marula.png.asset.json";
import loofahAsset from "@/assets/botanicals/loofah.png.asset.json";
import hibiscusAsset from "@/assets/botanicals/hibiscus.png.asset.json";
import cocoAsset from "@/assets/botanicals/coco.png.asset.json";
import datesAsset from "@/assets/botanicals/dates.png.asset.json";

export const botanicals = {
  olive: oliveAsset.url,
  pomegranate: pomegranateAsset.url,
  watermelon: watermelonAsset.url,
  baobab: baobabAsset.url,
  marula: marulaAsset.url,
  loofah: loofahAsset.url,
  hibiscus: hibiscusAsset.url,
  coco: cocoAsset.url,
  dates: datesAsset.url,
} as const;

export type BotanicalName = keyof typeof botanicals;

type Props = {
  name: BotanicalName;
  className?: string;
  opacity?: number;
  rotate?: number;
  flip?: boolean;
  tint?: "ink" | "light";
};

export function Botanical({ name, className = "", opacity = 0.18, rotate = 0, flip = false, tint = "ink" }: Props) {
  return (
    <img
      src={botanicals[name]}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none select-none ${tint === "light" ? "botanical-light" : "botanical-ink"} ${className}`}
      style={{
        opacity,
        transform: `${flip ? "scaleX(-1)" : ""} rotate(${rotate}deg)`,
      }}
    />
  );
}