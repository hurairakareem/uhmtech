"use client";

import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left font-semibold"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span aria-hidden="true" className="text-accent">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div id={id} hidden={!isOpen} className="px-7 pb-6 text-sm leading-7 text-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
