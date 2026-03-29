"use client";

export function Footer() {
  return (
    <footer className="px-6 py-8 md:px-12 lg:px-20 border-t border-black/[0.04]">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-muted">
        <span>MD Advisory</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
