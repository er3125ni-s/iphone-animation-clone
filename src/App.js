import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(prev => !prev);

  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#1c1c1c" }}
    >
      <motion.div onClick={handleClick} className="max-w-[375px] w-full aspect-[9/16] perspective">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full transform-style preserve-3d rounded-3xl overflow-hidden"
        >
          {/* ---------- FRAMSIDAN ---------- */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src="/IMG_0227.png"
              alt="Framsida"
              className="w-full h-full object-contain bg-[#1c1c1c]"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>

          {/* ---------- BAKSIDAN ---------- */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <img
              src="/back.png"
              alt="Baksida"
              className="w-full h-full object-contain bg-[#1c1c1c]"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
