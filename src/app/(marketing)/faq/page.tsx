"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";
import { cn } from "@/lib/utils/cn";

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "umum", label: "Umum" },
  { id: "harga", label: "Harga" },
  { id: "byok", label: "BYOK" },
  { id: "teknis", label: "Teknis" },
  { id: "support", label: "Support" },
];

export default function FaqPage() {
  const [active, setActive] = useState("all");
  const items =
    active === "all" ? FAQ_ITEMS : FAQ_ITEMS.filter((f) => f.category === active);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Pertanyaan yang sering ditanyakan
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Tidak ketemu jawabannya? Hubungi kami lewat Telegram.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === c.id
                ? "bg-brand-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <Accordion type="single" collapsible className="mt-8">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
