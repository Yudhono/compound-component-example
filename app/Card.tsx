"use client";
import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  description: string;
  button1Text: string;
  button2Text: string;
  title: string;
  onButton1: () => void;
  onButton2: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  description,
  button1Text,
  button2Text,
  title,
  onButton1,
  onButton2,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md pt-4 px-4 pb-4 max-w-sm">
      <h2 className="text-xl font-semibold text-center text-black mb-4">
        {title}
      </h2>
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
          className="bg-[#ff463c] text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          {button1Text}
        </button>
        <button
          onClick={onButton2}
          className="bg-[#25c042] text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default Card;
