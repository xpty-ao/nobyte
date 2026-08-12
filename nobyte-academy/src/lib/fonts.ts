import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

export const manrope = localFont({
  src: "../fonts/Manrope.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});
