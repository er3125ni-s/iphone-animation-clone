import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimationClone() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-full w-full bg-black flex items-center justify-center overflow-hidden">
      {/* responsiv ”telefonram” */}
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="max-w-[375px] w-full aspect-[9/16] perspective"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full transform-style preserve-3d rounded-3xl border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Framsida */}
          <div className="absolute inset-0 bg-white p-6 flex flex-col items-center justify-center backface-hidden">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Välkommen</h1>
            <p className="text-gray-600">Tryck för att vända kortet</p>
          </div>

          {/* Baksida */}
          <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
            <h1 className="text-xl font-semibold text-white mb-2">Baksida</h1>
            <p className="text-gray-300">Det här är baksidan av kortet.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

