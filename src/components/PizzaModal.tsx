import { Dialog } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";


interface PizzaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const questions = [
  { slices: 2, required: 1 },
  { slices: 3, required: 2 },
  { slices: 4, required: 3 },
  { slices: 6, required: 4 },
  { slices: 8, required: 5 },
  { slices: 4, required: 2 },
  { slices: 3, required: 1 }
];

export default function PizzaModal({ open, setOpen }: PizzaModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [question, setQuestion] = useState(() => getRandomQuestion());
  const [selected, setSelected] = useState<boolean[]>([]);
  const [message, setMessage] = useState("");

  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  useEffect(() => {
    if (open) {
      const q = getRandomQuestion();
      setQuestion(q);
      setSelected(Array(q.slices).fill(false));
      setMessage("");
    }
  }, [open]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { slices } = question;

    for (let i = 0; i < slices; i++) {
      const start = (i * 2 * Math.PI) / slices;
      const end = ((i + 1) * 2 * Math.PI) / slices;

      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 140, start, end);
      ctx.closePath();
      ctx.fillStyle = selected[i] ? "#ef4444" : "#facc15";
      ctx.fill();
      ctx.strokeStyle = "#7c3aed";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const correctCount = selected.filter(Boolean).length;
    if (correctCount === question.required) {
      setMessage("🎉 Yummy! You made the perfect pizza!");
    } else {
      setMessage("");
    }
  }, [selected, question]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - 150;
    const y = e.clientY - rect.top - 150;
    const angle = Math.atan2(y, x);
    const index = Math.floor(((angle + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI / question.slices));

    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-gradient-to-br from-yellow-50 to-rose-100 rounded-3xl p-6 max-w-md w-full shadow-xl border-4 border-yellow-300">
          <div className="flex justify-between items-center mb-3">
            <Dialog.Title className="text-3xl font-extrabold text-red-600">
              🍕 Fraction Pizzeria
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-700 font-bold text-2xl"
            >
              ✖
            </button>
          </div>

          <p className="text-lg text-pink-700 font-semibold text-center mb-2">
            Select <span className="text-purple-700 font-bold">{question.required}/{question.slices}</span> of the pizza.
          </p>

          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            onClick={handleClick}
            className="mx-auto border-4 border-purple-400 rounded-full shadow-lg bg-white cursor-pointer"
          />

          <p className="mt-4 text-center text-green-600 font-bold text-lg min-h-[24px]">
            {message}
          </p>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
