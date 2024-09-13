import { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import Lottie from "lottie-react";
import balloonsAnimation from "../animations/balloons.json";
import confettiAnimation from "../animations/confetti.json";
import "./birthday.css";

export function BirthdayCard () {
  const [isOpen, setIsOpen] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="birthday-container">
      <motion.div 
        className={`envelope ${isOpen ? "open" : ""}`}
        onClick={openEnvelope}
        initial={{ scale: 0.9 }}
        animate={isOpen ? { rotateX: 0 } : { rotateX: 180 }}
        transition={{ duration: 1 }}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <motion.div
            className={`birthday-card ${isOpen ? "slide-out" : ""}`}
            initial={{ y: "100%" }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Feliz Aniversário Fernando!</h2>
            <p>Feliz Aniversário! Muita saúde, paz, sucesso, harmonia e realizações. Que seu dia seja repleto de alegria!
            </p>
            <FaGift size={40} color="#f39c12" />
          </motion.div>
        </div>
      </motion.div>

      {isOpen && (
        <div className="animations">
          <Lottie animationData={balloonsAnimation} className="balloons" />
          <Lottie animationData={confettiAnimation} className="confetti" />
        </div>
      )}
    </div>
  );
};