"use client";
import "tailwindcss";

// components/CustomButton.tsx
import React from "react";

type CustomButtonProps = {
  text: string;
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="h-20 rounded-md w-100 bg-red-500  text-3xl font-bold hover:not-focus:bg-indigo-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
