import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  // Ett enda toggle‑anrop gör att du kan trycka kontinuerligt var som helst på kortet
  const toggle = () => setFlipped((prev) => !prev);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      <motion.div
        className="max-w-[375px] w-full aspect-[9/16] p-safe perspective"
        onClick={toggle} // klick var som helst på ramen togglar
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full transform-style preserve-3d rounded-3xl overflow-hidden"
        >
          {/* ---------- FRAMSIDAN ---------- */}
          <div className="absolute inset-0 backface-hidden pointer-events-none">
            <img
              src="/IMG_0227.png"
              alt="Framsida"
              className="w-full h-full object-contain bg-[#1c1c1c]"
              style={{ transform: "rotate(90deg)", objectPosition: "center" }}
            />
          </div>

          {/* ---------- BAKSIDAN ---------- */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden pointer-events-none" style={{ background: "#1c1c1c" }}>
            <img
              src="/back.png"
              alt="Baksida"
              className="w-full h-full object-contain bg-[#1c1c1c]"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
