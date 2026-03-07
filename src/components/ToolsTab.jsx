import { tools } from "../data/tools";

function ToolCard({ cat }) {
  return (
    <div
      className="card"
      style={{
        background: "#0F1629",
        border: `1px solid ${cat.color}22`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* Card header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: `1px solid ${cat.color}22`,
          background: `${cat.color}0D`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 15 }}>{cat.icon}</span>
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: 12,
            color: cat.color,
          }}
        >
          {cat.category}
        </span>
      </div>

      {/* Items list */}
      <div style={{ padding: "10px 0" }}>
        {cat.items.map((item, ii) => (
          <div
            key={ii}
            style={{
              padding: "9px 16px",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              borderBottom:
                ii < cat.items.length - 1 ? "1px solid #1E293B" : "none",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: cat.color,
                marginTop: 5,
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#CBD5E1",
                  fontFamily: "'Space Grotesk',sans-serif",
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#475569",
                  marginTop: 2,
                  lineHeight: 1.5,
                }}
              >
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NpmBlock() {
  return (
    <div
      style={{
        marginTop: 28,
        background: "#0F1629",
        border: "1px solid #1E293B",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* Terminal title bar */}
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid #1E293B",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          {["#F87171", "#FBBF24", "#34D399"].map((c, i) => (
            <div
              key={i}
              style={{ width: 10, height: 10, borderRadius: "50%", background: c }}
            />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "#64748B" }}>terminal</span>
      </div>

      {/* Commands */}
      <div style={{ padding: "18px 22px" }}>
        <div
          style={{
            fontSize: 10,
            color: "#64748B",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Dependencies
        </div>
        <code
          style={{
            fontSize: 11,
            color: "#34D399",
            display: "block",
            lineHeight: 1.9,
            wordBreak: "break-all",
          }}
        >
          npm install express prisma @prisma/client pg passport passport-local
          passport-jwt jsonwebtoken bcryptjs express-session cors helmet
          express-validator dotenv apicache swagger-jsdoc swagger-ui-express
        </code>

        <div
          style={{
            fontSize: 10,
            color: "#64748B",
            margin: "14px 0 8px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Dev Dependencies
        </div>
        <code
          style={{
            fontSize: 11,
            color: "#A78BFA",
            display: "block",
            lineHeight: 1.9,
          }}
        >
          npm install -D nodemon jest supertest eslint prettier
        </code>
      </div>
    </div>
  );
}

export function ToolsTab() {
  return (
    <div>
      <p style={{ color: "#64748B", fontSize: 12, marginBottom: 20 }}>
        Todas las dependencias organizadas por categoría con su rol exacto en el
        proyecto.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(420px,1fr))",
          gap: 14,
        }}
      >
        {tools.map((cat, ci) => (
          <ToolCard key={ci} cat={cat} />
        ))}
      </div>
      <NpmBlock />
    </div>
  );
}
