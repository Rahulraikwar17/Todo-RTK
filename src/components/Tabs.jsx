import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/todoSlice";

const TABS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.todo.activeTab);
  const activeIndex = TABS.findIndex((t) => t.key === activeTab);

  return (
    <div className="relative flex w-full p-1 rounded-full bg-white/5 border border-white/10 mb-5">
      <div
        className="absolute top-1 bottom-1 rounded-full bg-white/15 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out"
        style={{
          width: `calc(${100 / TABS.length}% - 4px)`,
          transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
        }}
      />
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => dispatch(setActiveTab(tab.key))}
          className={`relative z-10 flex-1 py-2 text-[13px] rounded-full transition-colors duration-300 ${
            activeTab === tab.key ? "text-[var(--text)]" : "text-[var(--sub-text)] hover:text-white/70"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;