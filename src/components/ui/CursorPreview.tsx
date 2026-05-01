import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursorPreview } from "@/context/CursorPreviewContext";

const PREVIEW_W = 280;
const PREVIEW_H = 360;
const OFFSET_X  = 28;   // distance from cursor
const OFFSET_Y  = -20;
const LERP      = 0.10; // lower = more lag = more premium

export default function CursorPreview() {
  const { preview } = useCursorPreview();

  // Real mouse position
  const mouseRef = useRef({ x: -999, y: -999 });
  // Lerped (smooth) position tracked via rAF
  const lerpRef  = useRef({ x: -999, y: -999 });
  const rafRef   = useRef<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Track real mouse globally
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // rAF loop for lerp
  useEffect(() => {
    const loop = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      lerpRef.current.x += (mx - lerpRef.current.x) * LERP;
      lerpRef.current.y += (my - lerpRef.current.y) * LERP;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Offset + clamp so preview never clips viewport edges
      let x = lerpRef.current.x + OFFSET_X;
      let y = lerpRef.current.y + OFFSET_Y;

      if (x + PREVIEW_W > vw - 16) x = lerpRef.current.x - PREVIEW_W - OFFSET_X;
      if (y + PREVIEW_H > vh - 16) y = vh - PREVIEW_H - 16;
      if (y < 16) y = 16;

      if (panelRef.current) {
        panelRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <AnimatePresence>
      {preview.visible && (
        <motion.div
          ref={panelRef}
          key="cursor-preview"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: PREVIEW_W,
            height: PREVIEW_H,
            zIndex: 9999,
            pointerEvents: "none",
            willChange: "transform",
          }}
          className="rounded-sm overflow-hidden shadow-2xl"
        >
          <img
            src={preview.image}
            alt={preview.label}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Minimal overlay label at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="label text-white/50 text-[9px] tracking-[0.35em] block mb-1">
              {preview.category}
            </span>
            <p className="font-display text-white text-base uppercase leading-tight">
              {preview.label}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
