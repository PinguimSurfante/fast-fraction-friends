import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

interface MemoryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface Card {
  id: number;
  content: string;
  flipped: boolean;
  matched: boolean;
}

const basePairs: Omit<Card, "flipped" | "matched">[] = [
  { id: 1, content: "1/2" },
  { id: 1, content: "🍕🍕" },
  { id: 2, content: "3/4" },
  { id: 2, content: "🍕🍕🍕" },
  { id: 3, content: "1/4" },
  { id: 3, content: "🍕" },
  { id: 4, content: "2/4" },
  { id: 4, content: "🍕🍕" },
];

const shuffleArray = <T,>(array: T[]): T[] =>
  array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

export default function MemoryModal({ open, setOpen }: MemoryModalProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<Card[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);

  const resetGame = () => {
    const shuffled = shuffleArray(basePairs).map((card) => ({
      ...card,
      flipped: false,
      matched: false,
    }));
    setCards(shuffled);
    setFlipped([]);
    setMatchedCount(0);
  };

  useEffect(() => {
    if (open) {
      resetGame(); // 🔁 Embaralha sempre que abrir
    }
  }, [open]);

  const handleCardClick = (index: number) => {
    const card = cards[index];
    if (card.flipped || card.matched || flipped.length === 2) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newFlipped = [...flipped, newCards[index]];
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setTimeout(() => {
        const [first, second] = newFlipped;
        const updatedCards = [...newCards];

        if (first.id === second.id) {
          updatedCards.forEach((c) => {
            if (c.id === first.id) c.matched = true;
          });
          setMatchedCount((count) => count + 1);
        } else {
          updatedCards.forEach((c) => {
            if (!c.matched) c.flipped = false;
          });
        }

        setCards(updatedCards);
        setFlipped([]);
      }, 800);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold text-purple-700">
              🧠 Memory Fraction Match
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✖
            </button>
          </div>

          <p className="text-purple-600 mb-4">
            Match fractions with their correct visual representation!
          </p>

          <div className="grid grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`h-24 flex items-center justify-center text-xl font-bold rounded-xl shadow cursor-pointer transition-all
                  ${card.matched ? "bg-green-300" : card.flipped ? "bg-yellow-300" : "bg-purple-100"}`}
              >
                {card.flipped || card.matched ? card.content : "❓"}
              </div>
            ))}
          </div>

          {matchedCount === basePairs.length / 2 && (
            <p className="text-center text-green-600 font-bold text-lg mt-4">
              🎉 You matched all the cards!
            </p>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
