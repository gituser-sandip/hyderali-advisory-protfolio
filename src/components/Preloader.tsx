import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center gap-1 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated logo mark */}
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 border-2 border-amber-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border border-amber-600/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-amber-400 font-playfair font-bold text-xl">HA</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-2xl font-playfair text-white tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          HYDER ALI ADVISORY
        </motion.h1>
        <motion.p
          className="text-amber-400/70 text-xs tracking-[0.3em] mt-2 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Corporate Services
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="mt-8 h-px w-48 bg-zinc-800 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
