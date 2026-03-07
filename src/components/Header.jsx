const TABS = [
  { id: "tools", label: "🛠 Stack de Herramientas" },
  { id: "checklist", label: "✅ Checklist de Calidad" },
];

export function Header({ activeTab, onTabChange, total, done, pct, pctColor, sectionCount }) {
  return (
    <div
      style={{
        background: "#0D1229",
        borderBottom: "1px solid #1E293B",
        padding: "28px 32px 20px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Title row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg,#00D4FF,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 8,
              }}
            >
              REST API · Node.js · PostgreSQL
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#F1F5F9",
                letterSpacing: "-0.02em",
              }}
            >
              Project Blueprint
            </div>
            <div style={{ color: "#64748B", fontSize: 12, marginTop: 4 }}>
              Stack completo · Checklist de calidad · {sectionCount} categorías · {total} tareas
            </div>
          </div>

          {/* Progress badge */}
          <div
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              borderRadius: 12,
              padding: "12px 20px",
              textAlign: "center",
              minWidth: 130,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "#64748B",
                marginBottom: 4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Progreso
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: pctColor,
                fontFamily: "'Space Grotesk',sans-serif",
              }}
            >
              {pct}%
            </div>
            <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>
              {done} / {total}
            </div>
            <div
              style={{
                background: "#1E293B",
                borderRadius: 4,
                height: 4,
                marginTop: 6,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: pct + "%",
                  background: pctColor,
                  borderRadius: 4,
                  transition: "width 0.4s",
                }}
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className="hov"
              onClick={() => onTabChange(tab.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Space Grotesk',sans-serif",
                background:
                  activeTab === tab.id
                    ? "linear-gradient(135deg,#00D4FF22,#A78BFA22)"
                    : "transparent",
                color: activeTab === tab.id ? "#E2E8F0" : "#64748B",
                border:
                  activeTab === tab.id
                    ? "1px solid #00D4FF44"
                    : "1px solid transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
