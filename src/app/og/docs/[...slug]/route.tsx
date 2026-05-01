import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

export const revalidate = false;

function toAscii(input?: string) {
  if (!input) return "";

  // Prevent next/og font parser crashes on complex glyph substitution tables during static export.
  return input
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/docs/[...slug]">,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const safeTitle = toAscii(page.data.title) || "MASA Docs";
  const safeDescription = toAscii(page.data.description);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        background:
          "linear-gradient(135deg, rgb(8, 12, 20) 0%, rgb(18, 26, 46) 50%, rgb(37, 19, 54) 100%)",
        color: "white",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: 28,
          backgroundColor: "rgba(255,255,255,0.12)",
        }}>
        MASA
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.2,
            fontWeight: 700,
            textAlign: "left",
          }}>
          {safeTitle}
        </div>

        {safeDescription ? (
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.86)",
              textAlign: "left",
            }}>
            {safeDescription}
          </div>
        ) : null}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
