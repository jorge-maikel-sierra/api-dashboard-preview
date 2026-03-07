import { useState } from "react";

/**
 * Hook genérico de checklist. Acepta cualquier array con la misma estructura
 * que los archivos de datos (checklist.js, checklist-react.js, etc.)
 * para que la app pueda cambiar de dataset sin montar un nuevo componente.
 *
 * @param {Array} data - Array de secciones con { section, color, items[] }
 */
export function useChecklistByData(data) {
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState({});

  const toggle = (si, ii) => {
    const key = `${si}-${ii}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSection = (si) => {
    setExpanded((prev) => ({
      ...prev,
      [si]: prev[si] !== false ? false : true,
    }));
  };

  const isSectionOpen = (si) => expanded[si] !== false;
  const isItemChecked = (si, ii) => !!checked[`${si}-${ii}`];

  const total = data.reduce((acc, section) => acc + section.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const pctColor = pct < 30 ? "#F87171" : pct < 70 ? "#FBBF24" : "#34D399";

  return {
    toggle,
    toggleSection,
    isSectionOpen,
    isItemChecked,
    total,
    done,
    pct,
    pctColor,
  };
}
