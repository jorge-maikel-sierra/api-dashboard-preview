import { checklist } from "../data/checklist";

function ChecklistItem({ item, isChecked, color, onToggle }) {
  return (
    <div
      className="hovbg"
      onClick={onToggle}
      style={{
        padding: "10px 16px",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        background: isChecked ? `${color}0D` : "transparent",
      }}
    >
      {/* Checkbox */}
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          flexShrink: 0,
          marginTop: 1,
          border: `2px solid ${isChecked ? color : "#374151"}`,
          background: isChecked ? color : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.15s",
        }}
      >
        {isChecked && (
          <span style={{ fontSize: 9, color: "#0A0E1A", fontWeight: 700 }}>
            ✓
          </span>
        )}
      </div>

      {/* Text */}
      <span
        style={{
          fontSize: 12,
          color: isChecked ? "#64748B" : "#CBD5E1",
          textDecoration: isChecked ? "line-through" : "none",
          lineHeight: 1.6,
          transition: "all 0.15s",
        }}
      >
        {item}
      </span>
    </div>
  );
}

function ChecklistSection({ section, si, toggle, toggleSection, isSectionOpen, isItemChecked }) {
  const secDone = section.items.filter((_, ii) => isItemChecked(si, ii)).length;
  const isOpen = isSectionOpen(si);

  return (
    <div
      style={{
        background: "#0F1629",
        border: `1px solid ${section.color}22`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div
        className="hovbg"
        onClick={() => toggleSection(si)}
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: `${section.color}0D`,
          borderBottom: isOpen ? `1px solid ${section.color}22` : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: section.color,
            }}
          >
            {section.section}
          </span>
          <span
            style={{
              fontSize: 10,
              padding: "2px 7px",
              borderRadius: 20,
              fontWeight: 600,
              background: `${section.color}22`,
              color: section.color,
            }}
          >
            {secDone}/{section.items.length}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 70,
              background: "#1E293B",
              borderRadius: 4,
              height: 3,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(secDone / section.items.length) * 100}%`,
                background: section.color,
                borderRadius: 4,
                transition: "width 0.3s",
              }}
            />
          </div>
          <span style={{ color: "#475569", fontSize: 12 }}>
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {/* Items */}
      {isOpen && (
        <div>
          {section.items.map((item, ii) => (
            <div
              key={ii}
              style={{
                borderBottom:
                  ii < section.items.length - 1 ? "1px solid #1E293B" : "none",
              }}
            >
              <ChecklistItem
                item={item}
                isChecked={isItemChecked(si, ii)}
                color={section.color}
                onToggle={() => toggle(si, ii)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ChecklistTab({ toggle, toggleSection, isSectionOpen, isItemChecked, total }) {
  return (
    <div>
      <p style={{ color: "#64748B", fontSize: 12, marginBottom: 20 }}>
        Haz click en cada tarea para marcarla. {checklist.length} categorías ·{" "}
        {total} tareas en total.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {checklist.map((section, si) => (
          <ChecklistSection
            key={si}
            section={section}
            si={si}
            toggle={toggle}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
            isItemChecked={isItemChecked}
          />
        ))}
      </div>
    </div>
  );
}
