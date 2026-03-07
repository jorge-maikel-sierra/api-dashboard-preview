import { useState } from "react";
import { useChecklistByData } from "./hooks/useChecklistByData";
import { Header } from "./components/Header";
import { ToolsTab } from "./components/ToolsTab";
import { ChecklistTab } from "./components/ChecklistTab";
import { checklist } from "./data/checklist";
import { checklistReact } from "./data/checklist-react";

// Catálogo de cursos disponibles
const COURSES = [
  {
    id: "nodejs",
    label: "Node.js API",
    badge: "REST API · Node.js · PostgreSQL",
    subtitle: "Stack completo · Checklist de calidad",
    data: checklist,
    showTools: true,
  },
  {
    id: "react",
    label: "React / Next.js",
    badge: "React · Next.js · The Odin Project",
    subtitle: "Checklist del curso",
    data: checklistReact,
    showTools: false,
  },
];

export default function App() {
  const [activeCourse, setActiveCourse] = useState("nodejs");
  const [activeTab, setActiveTab] = useState("tools");

  const course = COURSES.find((c) => c.id === activeCourse);
  const checklistState = useChecklistByData(course.data);

  // Si el curso activo no tiene pestaña de Tools, forzar checklist
  const resolvedTab = !course.showTools && activeTab === "tools" ? "checklist" : activeTab;

  const handleCourseChange = (courseId) => {
    setActiveCourse(courseId);
    const newCourse = COURSES.find((c) => c.id === courseId);
    if (!newCourse.showTools) setActiveTab("checklist");
    else setActiveTab("tools");
  };

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
        activeTab={resolvedTab}
        onTabChange={setActiveTab}
        total={checklistState.total}
        done={checklistState.done}
        pct={checklistState.pct}
        pctColor={checklistState.pctColor}
        sectionCount={course.data.length}
        courses={COURSES}
        activeCourse={activeCourse}
        onCourseChange={handleCourseChange}
        showTools={course.showTools}
        badge={course.badge}
        subtitle={course.subtitle}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 32px" }}>
        {resolvedTab === "tools" && course.showTools && <ToolsTab />}
        {resolvedTab === "checklist" && (
          <ChecklistTab
            data={course.data}
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
