import {
  Dancing_Script,
  Libre_Baskerville,
  Inter,
  Noto_Serif_JP,
  Lora,
} from "next/font/google";

// 手書き風のフォント
export const DancingScriptFont = Dancing_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-DancingScript",
});

// 見出し（日本語）
export const NotoSerifJPFont = Noto_Serif_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-NotoSerifJP",
});

// 見出し（英語）
export const LoraFont = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-Lora",
});

// 小見出し
export const LibreBaskervilleFont = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-LibreBaskerville",
});

// 本文
export const InterFont = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-Inter",
});
