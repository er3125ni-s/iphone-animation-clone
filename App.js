import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-[812px] w-[375px] mx-auto my-4 bg-black flex items-center justify-center rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="w-72 h-96 perspective"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full transform-style preserve-3d"
        >
          {/* Front side */}
          <div className="absolute w-full h-full bg-white p-6 rounded-2xl shadow-xl text-center backface-hidden flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Välkommen</h1>
            <p className="text-gray-600">Tryck för att vända kortet</p>
          </div>

          {/* Back side */}
          <div className="absolute w-full h-full bg-gray-900 p-6 rounded-2xl shadow-xl text-center text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold mb-2">Baksida</h1>
            <p>Det här är baksidan av kortet.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
