import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";

interface SpaceModalProps {
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
    prompt: "Captain Cosmos must travel 1 out of 4 parts. Where is 1/4?",
    correct: "1/4",
    options: ["1/4", "1/2", "3/4"]
  },
  {
    prompt: "Captain Cosmos must travel 2 out of 4 parts. Where is 2/4 (or 1/2)?",
    correct: "1/2",
    options: ["1/2", "1/4", "3/4"]
  },
  {
    prompt: "Captain Cosmos must travel 3 out of 4 parts. Where is 3/4?",
    correct: "3/4",
    options: ["1/4", "3/4", "1"]
  },
  {
    prompt: "Captain Cosmos wants to reach the final destination. Where is 1 (4/4)?",
    correct: "1",
    options: ["1", "3/4", "1/2"]
  }
];

export default function SpaceModal({ open, setOpen }: SpaceModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  const [errors, setErrors] = useState(0); // ✅ contador de erros

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setMessage("");
      setFinished(false);
      setErrors(0); // ✅ reset ao abrir
    }
  }, [open]);

  const current = questions[currentIndex];

  const handleAnswer = (answer: string) => {
    if (answer === current.correct) {
      setMessage("✅ Correct!");
      if (currentIndex === questions.length - 1) {
        setFinished(true);
        setMessage("🎉 Mission accomplished, Captain!");
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setMessage("");
        }, 1000);
      }
    } else {
      setErrors((prev) => prev + 1); // ✅ incremento
      setMessage("❌ Try again!");
      setTimeout(() => setMessage(""), 1000);
    }
  };

  const renderFractionVisual = (fraction: string) => {
    const highlightIndex = {
      "1/4": 0,
      "1/2": 1,
      "3/4": 2,
      "1": 3
    }[fraction];

    return (
      <div className="flex justify-center items-center space-x-2 text-2xl mb-4">
        <span>🚀</span>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-6 h-6 rounded-full ${
              i === highlightIndex ? "bg-indigo-400 border-4 border-indigo-800" : "bg-indigo-100"
            }`}
          />
        ))}
        <span>🌑</span>
      </div>
    );
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold text-indigo-600">
              🚀 Fraction Space Adventure
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ✖
            </button>
          </div>

          <p className="text-indigo-700 mb-2">{current.prompt}</p>
          <p className="text-sm text-red-600 font-semibold mb-4 text-center">
            Mistakes: {errors}
          </p>

          {!finished ? (
            <>
              {renderFractionVisual(current.correct)}

              <div className="grid grid-cols-1 gap-3">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold py-2 px-4 rounded-xl"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="text-center text-green-600 font-bold mt-4 h-6">{message}</div>
            </>
          ) : (
            <div className="text-center text-green-600 font-bold text-lg mt-4">
              🎉 Mission accomplished, Captain Cosmos!
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
