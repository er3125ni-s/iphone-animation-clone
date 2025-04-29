import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Fullscreen flip‑card iPhone‑layout.
 * Klick växlar kontinuerligt mellan fram‑ och baksida.
 * Bilderna är nu centrerade och skalas upp för att fylla kortet snyggt.
 */
export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((prev) => !prev);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      <motion.div
        onClick={toggle}
        className="max-w-[375px] w-full aspect-[9/16] p-safe perspective"
      >
        {/* -- Huvudcontainer som roteras -- */}
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full rounded-3xl overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
        >
          {/* ---------- FRAMSIDAN ---------- */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#1c1c1c]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/IMG_0227.png"
              alt="Framsida"
              className="w-[120%] h-auto object-cover"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>

          {/* ---------- BAKSIDAN ---------- */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#1c1c1c]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/back.png"
              alt="Baksida"
              className="w-[120%] h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
