"use client";
import Image from "next/image";

import { Card } from "./Card";

export default function Home() {
  const onButton1 = () => {
    console.log("Button 1 clicked");
  };

  const onButton2 = () => {
    console.log("Button 2 clicked");
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-gradient-to-r from-violet-200 to-pink-200 sm:items-start">
      <div className="w-full flex flex-row items-center justify-center">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              Sample Card Title
            </h2>
          </Card.Header>
          <Card.Content>
            <Image
              src="https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg"
              alt="Card image"
              className="w-full h-48 object-cover rounded"
              width={400}
              height={192}
            />
            <p className="mt-2 text-gray-700">
              This is a sample card description that has been made longer to
              demonstrate how the card handles more text content.
            </p>
          </Card.Content>
          <Card.Footer>
            <button
              onClick={onButton1}
              className="bg-[#ff463c] text-white px-4 py-2 rounded font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onButton2}
              className="bg-[#25c042] text-white px-4 py-2 rounded font-semibold cursor-pointer"
            >
              Save
            </button>
          </Card.Footer>
        </Card>
      </div>
    </main>
  );
}
