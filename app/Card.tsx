"use client";
import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  description: string;
  button1Text: string;
  button2Text: string;
  onClose: () => void;
  onButton1: () => void;
  onButton2: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  description,
  button1Text,
  button2Text,
  onClose,
  onButton1,
  onButton2,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md pt-7 px-4 pb-4 max-w-sm">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4l8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <Image
        src={imageSrc}
        alt="Card image"
        className="w-full h-48 object-cover rounded"
        width={400}
        height={192}
      />
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-4 flex justify-end space-x-2 border-t pt-4">
        <button
          onClick={onButton1}
          className="bg-red-500 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          {button1Text}
        </button>
        <button
          onClick={onButton2}
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default Card;
