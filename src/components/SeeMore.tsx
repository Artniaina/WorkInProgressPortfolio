import React from 'react';
import FrameDesc from './FrameDesc';
import { Code2, Heart } from 'lucide-react';

function SeeMore() {
  const cards = [
    {
      title: "Favorite Technology",
      description: (
        <ul className="list-disc pl-5">
          <li>React development</li>
          <li>Dynamic and responsive web applications</li>
          <li>TypeScript, Next.js, and modern React features</li>
          <li>Building scalable solutions</li>
        </ul>
      ),
      icon: Code2,
      color: "purple"
    },
    {
      title: "Human languages",
      description: (
        <ul className="list-disc pl-5">
          <li>Malagasy </li>
          <li>English </li>
          <li>French</li>
        </ul>
      ),
      icon: Heart,
      color: "blue"
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="px-4">
        <div className="flex flex-col gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex ${index === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <FrameDesc
                title={card.title}
                description={card.description}
                Icon={card.icon}
                color={card.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
