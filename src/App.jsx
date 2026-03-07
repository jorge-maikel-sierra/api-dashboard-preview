import { useState } from "react";
import { useChecklist } from "./hooks/useChecklist";
import { Header } from "./components/Header";
import { ToolsTab } from "./components/ToolsTab";
import { ChecklistTab } from "./components/ChecklistTab";
import { checklist } from "./data/checklist";

export default function App() {
  const [activeTab, setActiveTab] = useState("tools");
  const checklistState = useChecklist();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0E1A",
        color: "#E2E8F0",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0E1A; }
        ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 3px; }
        .hov:hover { opacity: 0.8; cursor: pointer; }
        .hovbg:hover { background: rgba(255,255,255,0.04) !important; cursor: pointer; }
        .card { transition: transform 0.2s; }
        .card:hover { transform: translateY(-2px); }
      `}</style>

      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        total={checklistState.total}
        done={checklistState.done}
        pct={checklistState.pct}
        pctColor={checklistState.pctColor}
        sectionCount={checklist.length}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 32px" }}>
        {activeTab === "tools" && <ToolsTab />}
        {activeTab === "checklist" && (
          <ChecklistTab
            toggle={checklistState.toggle}
            toggleSection={checklistState.toggleSection}
            isSectionOpen={checklistState.isSectionOpen}
            isItemChecked={checklistState.isItemChecked}
            total={checklistState.total}
          />
        )}
      </div>
    </div>
  );
}
