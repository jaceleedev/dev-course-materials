"use client";

import React, { useState, useEffect, useMemo, useId } from "react";
import confetti from "canvas-confetti";

type ChecklistItem = {
  id: string;
  text: string;
};

interface InteractiveChecklistProps {
  title: string;
  items: ChecklistItem[];
  completionMessage?: React.ReactNode;
  confetti?: boolean;
}

export default function InteractiveChecklist({
  title,
  items,
  completionMessage = "🎉 축하합니다! 모든 항목을 완료했습니다!",
  confetti: confettiEnabled = true,
}: InteractiveChecklistProps) {
  const baseId = useId();

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    () => items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const allChecked = useMemo(
    () => items.every((item) => checkedItems[item.id]),
    [checkedItems, items]
  );

  const handleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  useEffect(() => {
    if (allChecked && confettiEnabled) {
      confetti({ particleCount: 100, spread: 70, origin: { x: 0.1, y: 0.6 } });
      confetti({ particleCount: 150, spread: 90, origin: { x: 0.5, y: 0.6 } });
      confetti({ particleCount: 100, spread: 70, origin: { x: 0.9, y: 0.6 } });
    }
  }, [allChecked, confettiEnabled]);

  return (
    <div className="my-8 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-slate-200/60 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
      {/* title prop으로 전달된 이모지가 그대로 텍스트와 함께 표시됩니다. */}
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
        {title}
      </h3>

      <div className="space-y-1">
        {items.map((item, index) => (
          <label
            key={item.id}
            htmlFor={`${baseId}-${item.id}`}
            className="flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            <input
              type="checkbox"
              id={`${baseId}-${item.id}`}
              checked={!!checkedItems[item.id]}
              onChange={() => handleCheck(item.id)}
              className="w-5 h-5 accent-indigo-500 text-indigo-500 border-slate-300 rounded focus:ring-indigo-500"
            />
            <span
              className={`flex-1 transition-all text-base ${
                checkedItems[item.id]
                  ? "text-slate-400 dark:text-slate-500 line-through"
                  : "text-slate-700 dark:text-slate-200"
              }`}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </label>
        ))}
      </div>

      {allChecked && (
        <div className="mt-6 p-4 rounded-lg text-center bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-900/50 dark:via-blue-900/50 dark:to-purple-900/50 animate-in fade-in">
          <p className="font-semibold text-indigo-800 dark:text-indigo-200">
            {completionMessage}
          </p>
        </div>
      )}
    </div>
  );
}
