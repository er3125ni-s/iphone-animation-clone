import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      {/* Klick var som helst på ramen */}
      <motion.div
        onClick={() => setFlipped((p) => !p)}
        className="max-w-[375px] w-full aspect-[9/16] p-safe"
        style={{ perspective: 1000 }}
      >
        {/* Roterande wrapper */}
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "1.5rem",
            overflow: "hidden",
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
        >
          {/* ---------- FRAMSIDA ---------- */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/IMG_0227.png"
              alt="Framsida"
              style={{
                width: "120%",
                objectFit: "cover",
                transform: "rotate(90deg)",
                pointerEvents: "none",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />
          </div>

          {/* ---------- BAKSIDA ---------- */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: "rotateY(180deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/back.png"
              alt="Baksida"
              style={{
                width: "120%",
                objectFit: "cover",
                pointerEvents: "none",
                transform: "rotate(90deg)", /* ta bort om du vill ha den oroterad */
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
