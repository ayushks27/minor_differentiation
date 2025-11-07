"use client";

import { useRouter } from "next/navigation";

export default function WelcomeMessage({ message }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/next");
  };

  return (
    <div style={overlayStyle}>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}

const overlayStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#000000",
  fontSize: "2.5rem",
  fontFamily: "Georgia, Arial, sans-serif",
  textAlign: "center",
  zIndex: 10,
  pointerEvents: "none",
};

const messageStyle = {
  margin: 0,
  pointerEvents: "none", 
};
