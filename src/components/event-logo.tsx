import { motion } from "framer-motion";

interface EventLogoProps {
  onClick?: () => void;
}

export default function EventLogo({ onClick }: EventLogoProps) {
  return (
    <motion.img
      src="/images/alma-de-feria.png"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20}}
      alt="ALMA DE FERIA"
      onClick={onClick}
      className={onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
    />
  );
}
