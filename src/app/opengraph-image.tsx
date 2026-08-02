import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BUSINESS, LOGO_HEADER } from "./lib/site";

export const alt = `${BUSINESS.name} — Amasya`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Logo dosyası 1024x1024 kare ve çevresi şeffaf; BrandLogo bileşenindeki
 * kırpma penceresinin aynısı burada da uygulanır ki marka aynı ölçekte görünsün.
 */
const CROP = { w: 457, h: 401, left: 273, top: 227 };

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), `public${LOGO_HEADER}`));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        {/* Üstte ve altta marka laciverdi şeritler */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "#17335F",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "#17335F",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",
            width: CROP.w,
            height: CROP.h,
            overflow: "hidden",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={1024}
            height={1024}
            style={{ position: "absolute", left: -CROP.left, top: -CROP.top }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#17335F",
            marginTop: 16,
            letterSpacing: -1,
          }}
        >
          {BUSINESS.name}
        </div>

        <div
          style={{
            display: "flex",
            width: 120,
            height: 4,
            background: "#C1912F",
            marginTop: 18,
            marginBottom: 18,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#475569",
          }}
        >
          Amasya’da Güvenilir Gayrimenkul Danışmanlığı
        </div>
      </div>
    ),
    { ...size }
  );
}
