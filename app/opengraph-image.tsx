import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Robin Mak";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.6 }}>
          robinmak.github.io
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1.05 }}>
            MAD in the Next Internet
          </div>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1.05 }}>
            Live and Learn
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, opacity: 0.75 }}>
          Robin Mak — agentic AI for finance & ESG
        </div>
      </div>
    ),
    { ...size }
  );
}
