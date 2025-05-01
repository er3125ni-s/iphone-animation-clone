import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      {/* klick var som helst på ramen */}
      <motion.div
        onClick={() => setFlipped((prev) => !prev)}
        className="max-w-[375px] w-full aspect-[9/16] p-safe"
        style={{ perspective: 1000 }}           {/* viktig! */}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full rounded-3xl overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
        >
          {/* ---------- FRAM ---------- */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/IMG_0227.png"
              alt="Framsida"
              className="w-[120%] h-auto object-cover pointer-events-none"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>

          {/* ---------- BAK ---------- */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/back.png"
              alt="Baksida"
              className="w-[120%] h-auto object-cover pointer-events-none"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
