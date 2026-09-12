import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0a09",
          color: "#f3f0e9",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ fontSize: 28, color: "#eb7635", letterSpacing: 2 }}>{SITE.name}</span>
        <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          Transformo a necessidade do seu negócio em um site que funciona de verdade.
        </span>
        <span style={{ fontSize: 24, color: "#9c958a" }}>{SITE.role}</span>
      </div>
    ),
    { ...size }
  );
}
