import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  let fontData: ArrayBuffer | null = null;

  try {
    const res = await fetch(
      "https://fonts.gstatic.com/s/notosansjp/v53/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.woff2",
    );
    fontData = await res.arrayBuffer();
  } catch {
    // Fall back to system font — Japanese glyphs may not render
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2742",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: fontData ? "'Noto Sans JP'" : "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color: "#F97316",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}
        >
          建設業向けAI事務サポート
        </div>

        {/* Service name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          現場秘書
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#CBD5E1",
            fontSize: 34,
            fontWeight: 700,
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 52,
          }}
        >
          建設業の事務作業を、AIでサポート
        </div>

        {/* CTA pill */}
        <div
          style={{
            background: "#F97316",
            color: "#ffffff",
            padding: "16px 40px",
            borderRadius: 8,
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          LINEで無料相談
        </div>

        {/* Decorative right block */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            minWidth: 280,
          }}
        >
          {["見積書作成", "請求書作成", "顧客管理"].map((item) => (
            <div
              key={item}
              style={{
                color: "#ffffff",
                fontSize: 22,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#F97316",
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Noto Sans JP",
                data: fontData,
                style: "normal",
                weight: 700,
              },
            ],
          }
        : {}),
    },
  );
}
