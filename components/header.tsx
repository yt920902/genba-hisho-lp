"use client";

import { useState } from "react";

const LINE_URL = "https://lin.ee/RlNqL2M";

const navLinks = [
  { label: "運用の流れ", href: "#workflow" },
  { label: "できること", href: "#service" },
  { label: "料金", href: "#pricing" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="現場秘書 トップ">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brand-orange">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </span>
          <span className="text-lg font-black tracking-wide text-white">現場秘書</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="グローバルナビゲーション">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-brand-orange px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            LINE相談
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-brand-navy px-5 pb-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="モバイルナビゲーション">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-bold text-slate-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-md bg-brand-orange px-4 py-3 text-base font-bold text-white hover:bg-orange-600"
            >
              LINEで相談する
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
