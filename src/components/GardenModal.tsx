import { Dialog } from "@headlessui/react";
import { useEffect, useMemo, useState } from "react";

interface GardenModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface Question {
  prompt: string;
  correct: string;
  options: string[];
}

const questions: Question[] = [
  {
    prompt: "Plant the flower in 1 out of 4 garden plots.",
    correct: "1/4",
    options: ["1/4", "1/2", "3/4"]
  },
  {
    prompt: "Plant in the middle of the garden. Where is 2/4 (or 1/2)?",
    correct: "1/2",
    options: ["1/2", "1/4", "3/4"]
  },
  {
    prompt: "Plant the flower at 3 out of 4 garden plots.",
    correct: "3/4",
    options: ["1/4", "3/4", "1"]
  },
  {
    prompt: "Fill the whole garden! Where is 4/4?",
    correct: "1",
    options: ["1", "3/4", "1/2"]
  }
];

export default function GardenModal({ open, setOpen }: GardenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  const [errors, setErrors] = useState(0); // ✅ contador de erros

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setMessage("");
      setFinished(false);
      setErrors(0); // ✅ reset ao abrir modal
    }
  }, [open]);

  const current = questions[currentIndex];

  const shuffledOptions = useMemo(() => {
    const copy = [...current.options];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [currentIndex]);

  const handleAnswer = (answer: string) => {
    if (answer === current.correct) {
      setMessage("✅ Great job!");
      if (currentIndex === questions.length - 1) {
        setFinished(true);
        setMessage("🎉 Your garden is full of flowers!");
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setMessage("");
        }, 1000);
      }
    } else {
      setErrors((prev) => prev + 1); // ✅ incrementa erros
      setMessage("❌ Try another plot!");
      setTimeout(() => setMessage(""), 1000);
    }
  };

  const renderGardenPlot = (fraction: string) => {
    const plotIndex = {
      "1/4": 0,
      "1/2": 1,
      "3/4": 2,
      "1": 3
    }[fraction];

    return (
      <div className="flex justify-center items-center space-x-3 mb-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-14 h-14 rounded-lg border-2 ${
              i === plotIndex ? "bg-green-200 border-green-600" : "bg-green-50"
            } flex items-center justify-center text-2xl`}
          >
            {i === plotIndex ? "🌻" : ""}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold text-green-600">
              🌻 Garden Fraction Helper
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ✖
            </button>
          </div>

          <p className="text-green-700 mb-2">{current.prompt}</p>
          <p className="text-sm text-red-600 font-semibold mb-4 text-center">
            Mistakes: {errors}
          </p>

          {!finished ? (
            <>
              {renderGardenPlot(current.correct)}

              <div className="grid grid-cols-1 gap-3">
                {shuffledOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 font-bold py-2 px-4 rounded-xl"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="text-center text-green-600 font-bold mt-4 h-6">{message}</div>
            </>
          ) : (
            <div className="text-center text-green-700 font-bold text-lg mt-4">
              🎉 Your garden is blooming beautifully!
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
