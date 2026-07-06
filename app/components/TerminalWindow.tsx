"use client";

import { useEffect, useRef, useState } from "react";

type WindowState = "normal" | "minimized" | "maximized" | "closing" | "closed";
type FloatPos = { left: number; top: number; width: number; height: number };

function Dot({
  color,
  glyph,
  label,
  onClick,
}: {
  color: string;
  glyph: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerDown={(e) => e.stopPropagation()}
      className="h-3.5 w-3.5 rounded-full flex items-center justify-center text-[9px] font-bold leading-none text-black/60 transition-transform hover:scale-110 cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <span className="opacity-0 group-hover/traffic:opacity-100 transition-opacity">
        {glyph}
      </span>
    </button>
  );
}

export default function TerminalWindow({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<WindowState>("normal");
  // null = window sits in the normal page flow; set = floating fixed window
  const [float, setFloat] = useState<FloatPos | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; baseLeft: number; baseTop: number } | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // if the browser is resized while floating, pull the window back on screen
  useEffect(() => {
    if (!float) return;
    const onResize = () =>
      setFloat((f) =>
        f
          ? {
              ...f,
              left: Math.min(Math.max(f.left, 40 - f.width), window.innerWidth - 40),
              top: Math.min(Math.max(f.top, 0), window.innerHeight - 40),
            }
          : f
      );
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [float]);

  if (state === "closed") {
    return (
      <div className="closed-enter flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-sm text-[var(--muted)] opacity-70">[process exited with code 0]</p>
        <button
          type="button"
          autoFocus
          onClick={() => {
            setFloat(null);
            setState("normal");
          }}
          aria-label="Reopen terminal"
          className="group mt-4 text-sm cursor-pointer outline-none"
        >
          <span className="text-[var(--muted)] opacity-70">$</span>{" "}
          <span className="text-[var(--accent)] underline-offset-4 decoration-[rgba(143,175,154,0.4)] group-hover:underline group-focus-visible:underline transition-colors">
            ./restart
          </span>
          <span className="inline-block w-[0.55em] h-[1.05em] ml-1.5 -mb-[2px] align-middle bg-[var(--accent)] animate-pulse" />
        </button>
      </div>
    );
  }

  const maximized = state === "maximized";
  const minimized = state === "minimized";

  const startDrag = (e: React.PointerEvent) => {
    if (maximized || e.button !== 0) return;
    const el = windowRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // pop the window out of the page flow into fixed positioning so
    // dragging is independent of page scroll and content height
    if (!float) {
      setFloat({ left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    }
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseLeft: rect.left,
      baseTop: rect.top,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onDrag = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d || !dragging) return;
    let left = d.baseLeft + (e.clientX - d.startX);
    let top = d.baseTop + (e.clientY - d.startY);
    // full viewport range, but the title bar always stays grabbable:
    // 40px visible horizontally, bar never above/below the screen
    left = Math.min(Math.max(left, 40 - (float?.width ?? 0)), window.innerWidth - 40);
    top = Math.min(Math.max(top, 0), window.innerHeight - 44);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() =>
      setFloat((f) => (f ? { ...f, left, top } : f))
    );
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  const resetHome = () => {
    setFloat(null);
    setState(maximized ? "normal" : "maximized");
  };

  const frame = (
    <div
      ref={windowRef}
      style={
        maximized
          ? undefined
          : float
          ? { position: "fixed", left: float.left, top: float.top, width: float.width, zIndex: 40 }
          : undefined
      }
      className={
        maximized
          ? "fixed inset-2 sm:inset-4 z-50 flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
          : `flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden ${
              state === "closing" ? "window-close" : float ? "" : "window-enter"
            }`
      }
    >
      <div
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={resetHome}
        className={`group/traffic relative flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] select-none shrink-0 touch-none ${
          maximized ? "" : dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <Dot
          color="#ff5f57"
          glyph="×"
          label="Close terminal"
          onClick={() => {
            setState("closing");
            window.setTimeout(() => setState("closed"), 240);
          }}
        />
        <Dot
          color="#febc2e"
          glyph="−"
          label="Minimize terminal"
          onClick={() => setState(minimized ? "normal" : "minimized")}
        />
        <Dot color="#28c840" glyph="+" label="Maximize terminal" onClick={resetHome} />
        <span className="absolute inset-x-0 text-center text-xs text-[var(--muted)] opacity-70 pointer-events-none truncate px-24">
          ricky@rickycircelli: ~<span className="hidden sm:inline"> — zsh</span>
        </span>
      </div>

      {!minimized && (
        <div
          className={
            maximized
              ? "p-4 sm:p-7 overflow-y-auto flex-1"
              : float
              ? "p-4 sm:p-7 overflow-y-auto max-h-[80vh]"
              : "p-4 sm:p-7 min-h-[60vh]"
          }
        >
          {children}
        </div>
      )}
    </div>
  );

  if (float && !maximized) {
    // placeholder keeps the page height stable while the window floats
    return (
      <>
        <div style={{ height: float.height }} aria-hidden />
        {frame}
      </>
    );
  }

  return frame;
}
