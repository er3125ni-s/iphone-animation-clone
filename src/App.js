import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Komponent som visar ett "telefonkort" i fullskärm.
 * Tryck på kortet för att vända mellan fram- och baksida.
 * Framsidan visar nu bilden IMG_0227.png som du lagt i public/.
 */
export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      {/* Responsiv telefonram med safe‑area‑padding */}
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="max-w-[375px] w-full aspect-[9/16] p-safe perspective"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative inset-0 w-full h-full transform-style preserve-3d rounded-3xl overflow-hidden"
        >
          {/* ---------- FRAMSIDAN ---------- */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src="/IMG_0227.png"
              alt="Studentkort"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ---------- BAKSIDAN ---------- */}
          <div
            className="absolute inset-0 rotate-y-180 backface-hidden flex flex-col items-center justify-center space-y-2"
            style={{ background: "#1c1c1c" }}
          >
            <h2 className="text-white text-lg font-semibold">Baksida</h2>
            <p className="text-gray-400 text-sm">Lägg valfri information här.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

