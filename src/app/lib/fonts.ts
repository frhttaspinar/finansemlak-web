import { Playfair_Display } from "next/font/google";

/**
 * Tek font örneği. Hem layout hem de Hero09 buradan içe aktarır;
 * böylece aynı font ikinci kez indirilmez.
 */
export const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
});
