// import { motion } from "framer-motion";

// export default function AnimatedBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F19]">
      
//       {/* Gradient Blob 1 */}
//       <motion.div
//         className="absolute w-[600px] h-[600px] rounded-full 
//                    bg-gradient-to-tr from-[#1b2a4a] to-transparent 
//                    opacity-40 blur-[120px]"
//         animate={{
//           x: [0, 120, -80, 0],
//           y: [0, -100, 60, 0],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         style={{ top: "-10%", left: "-10%" }}
//       />

//       {/* Gradient Blob 2 */}
//       <motion.div
//         className="absolute w-[700px] h-[700px] rounded-full 
//                    bg-gradient-to-bl from-[#0f1e3a] to-transparent 
//                    opacity-30 blur-[140px]"
//         animate={{
//           x: [0, -150, 100, 0],
//           y: [0, 120, -80, 0],
//         }}
//         transition={{
//           duration: 36,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         style={{ bottom: "-20%", right: "-10%" }}
//       />

//       {/* Noise overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage:
//             "url('https://grainy-gradients.vercel.app/noise.svg')",
//         }}
//       />
//     </div>
//   );
// }
