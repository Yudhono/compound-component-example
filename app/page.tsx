"use client";
import Card from "./Card";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-gradient-to-r from-violet-200 to-pink-200 sm:items-start">
      <div className="w-full flex flex-row items-center justify-center">
        <Card
          imageSrc="https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg"
          description="This is a sample card description that has been made longer to demonstrate how the card handles more text content."
          button1Text="Cancel"
          button2Text="Save"
          onClose={() => console.log("Close")}
          onButton1={() => console.log("Button 1 clicked")}
          onButton2={() => console.log("Button 2 clicked")}
        />
      </div>
    </main>
  );
}
