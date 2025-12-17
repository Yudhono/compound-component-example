"use client";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
  Header: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
}

export const Card: CardComponent = ({ children }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md pt-4 px-4 pb-4 max-w-sm">
      {children}
    </div>
  );
};

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-center text-black">
        {children}
      </h2>
    </div>
  );
};

Card.Content = function CardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-2 text-gray-700">{children}</div>;
};

Card.Footer = function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex justify-end space-x-2 border-t pt-4">
      {children}
    </div>
  );
};
