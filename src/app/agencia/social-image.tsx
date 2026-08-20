import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function LogoMark() {
  return (
    <div
      style={{
        position: "relative",
        width: 220,
        height: 220,
        borderRadius: 38,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(246,255,251,0.96) 100%)",
        boxShadow: "0 24px 60px rgba(25, 96, 78, 0.16)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 22,
          borderRadius: 28,
          border: "16px solid #20b79d",
          opacity: 0.95,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          width: 34,
          height: 118,
          borderRadius: 18,
          background: "#ef6767",
          transform: "skewY(0deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          width: 34,
          height: 118,
          borderRadius: 18,
          background: "#ef6767",
          transform: "rotate(64deg)",
          transformOrigin: "top right",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 16,
          width: 34,
          height: 138,
          borderRadius: 18,
          background: "#2fd96b",
          transform: "rotate(-63deg)",
          transformOrigin: "bottom left",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 18,
          width: 34,
          height: 96,
          borderRadius: 18,
          background: "#2fd96b",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 46,
          height: 8,
          borderRadius: 999,
          background: "#ef6767",
          boxShadow: "0 14px 0 #ef6767, 0 -14px 0 #2fd96b",
        }}
      />
    </div>
  );
}

export function buildAgenciaSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "58px 64px",
          background:
            "linear-gradient(135deg, #f5fff8 0%, #e7fbf0 42%, #ffffff 100%)",
          color: "#0f172a",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 14% 24%, rgba(36, 194, 150, 0.14), transparent 28%), radial-gradient(circle at 88% 20%, rgba(239, 103, 103, 0.14), transparent 24%), radial-gradient(circle at 18% 85%, rgba(47, 217, 107, 0.16), transparent 26%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: 610,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              width: "fit-content",
              padding: "12px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.76)",
              border: "1px solid rgba(12, 20, 35, 0.08)",
              boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: -0.4,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg, #0f8f7c, #35d084)",
                color: "#fff",
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              W
            </span>
            Woortec Agencia
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.02,
                letterSpacing: -3,
                fontWeight: 800,
                color: "#07111f",
              }}
            >
              Agencia de marketing y automatización
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "#475569",
                maxWidth: 560,
                fontWeight: 500,
              }}
            >
              Estrategia, community management, automatización y reporting con foco en datos y KPIs.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            {["KPIs", "Reporting", "Automatización", "Datos"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 18px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(12, 20, 35, 0.08)",
                  boxShadow: "0 10px 28px rgba(15, 23, 42, 0.06)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: 390,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              padding: 28,
              borderRadius: 36,
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(12, 20, 35, 0.08)",
              boxShadow: "0 26px 70px rgba(15, 23, 42, 0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            <LogoMark />
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#07111f",
                  letterSpacing: -0.8,
                }}
              >
                Solo para esta página
              </div>
              <div
                style={{
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: "#64748b",
                  maxWidth: 280,
                }}
              >
                Un preview claro y específico para compartir la ruta /agencia.
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "18px 22px",
              borderRadius: 24,
              background: "rgba(7, 17, 31, 0.82)",
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: -0.2,
              boxShadow: "0 18px 40px rgba(7, 17, 31, 0.18)",
            }}
          >
            Woortec.com/agencia
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
