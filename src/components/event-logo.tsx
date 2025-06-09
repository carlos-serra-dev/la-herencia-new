import { motion } from "framer-motion";

export default function EventLogo() {
  return (
    <motion.img
      src="src/assets/images/alma-de-feria.png"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20}}
      alt="ALMA DE FERIA"
    />
  );
}
