const ALL_TABS = [
  { id: "tools", label: "🛠 Stack de Herramientas", onlyFor: "nodejs" },
  { id: "checklist", label: "✅ Checklist de Calidad", onlyFor: null },
];

export function Header({
  activeTab,
  onTabChange,
  total,
  done,
  pct,
  pctColor,
  sectionCount,
  courses,
  activeCourse,
  onCourseChange,
  badge,
  subtitle,
}) {
  // Filtrar tabs según el curso activo
  const tabs = ALL_TABS.filter(
    (t) => t.onlyFor === null || t.onlyFor === activeCourse
  );

  return (
    <div
      style={{
        background: "#0D1229",
        borderBottom: "1px solid #1E293B",
        padding: "28px 32px 20px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Selector de cursos */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
          {courses.map((c) => (
            <button
              key={c.id}
              className="hov"
              onClick={() => onCourseChange(c.id)}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Space Grotesk',sans-serif",
                letterSpacing: "0.05em",
                background:
                  activeCourse === c.id
                    ? "linear-gradient(135deg,#00D4FF33,#A78BFA33)"
                    : "#111827",
                color: activeCourse === c.id ? "#E2E8F0" : "#475569",
                border:
                  activeCourse === c.id
                    ? "1px solid #00D4FF55"
                    : "1px solid #1E293B",
                transition: "all 0.2s",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

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
              {badge}
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
              {subtitle} · {sectionCount} categorías · {total} tareas
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
          {tabs.map((tab) => (
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
