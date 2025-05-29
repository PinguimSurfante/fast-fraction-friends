import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";

interface CakeModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface Question {
  image: string;
  correct: string;
  options: string[];
}

const baseQuestions: Question[] = [
  { image: "🍰🍰", correct: "2/4", options: ["2/3", "2/4", "3/4"] },
  { image: "🍰🍰🍰", correct: "3/4", options: ["1/4", "3/4", "2/4"] },
  { image: "🍰", correct: "1/4", options: ["1/2", "3/4", "1/4"] },
  { image: "🍰🍰🍰🍰", correct: "4/4", options: ["3/4", "4/4", "2/4"] },
  { image: "🍰🍰🍰", correct: "3/4", options: ["1/3", "2/3", "3/4"] },
];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function CakeModal({ open, setOpen }: CakeModalProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [errors, setErrors] = useState(0);

  const localStorageKey = "errors_cake";

  useEffect(() => {
    if (open) {
      const shuffled = shuffle(baseQuestions).map((q) => ({
        ...q,
        options: shuffle(q.options),
      }));
      setShuffledQuestions(shuffled);
      setCurrent(0);
      setProgress(0);
      setMessage("");
      setFinished(false);
      setErrors(0);
      localStorage.setItem(localStorageKey, "0");
    }
  }, [open]);

  function checkAnswer(answer: string) {
    const isCorrect = shuffledQuestions[current].correct === answer;
    if (isCorrect) {
      setProgress((prev) => prev + 20);
      setMessage("✅ Great job!");
      if (current + 1 === shuffledQuestions.length) {
        setFinished(true);
        setMessage("🎉 You finished slicing all the cakes!");
      } else {
        setTimeout(() => {
          setCurrent((prev) => prev + 1);
          setMessage("");
        }, 800);
      }
    } else {
      setErrors((prev) => {
        const updated = prev + 1;
        localStorage.setItem(localStorageKey, updated.toString());
        return updated;
      });
      setMessage("❌ Oops! Try again.");
      setTimeout(() => setMessage(""), 1000);
    }
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold text-pink-600">
              🍰 Cake Slice Challenge
            </Dialog.Title>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ✖
            </button>
          </div>

          <p className="text-pink-700 mb-2 text-center font-semibold">
            Let's learn about fractions using cake! 🎂
          </p>

          <p className="text-pink-700 mb-3 text-sm text-center">
            Imagine a cake is always divided into 4 pieces (the denominator is 4).  
            Can you guess **how many parts** are shown below?
          </p>

          <p className="text-sm text-red-600 text-center font-semibold mb-2">
            Mistakes: {errors}
          </p>

          {!finished && shuffledQuestions.length > 0 ? (
            <>
              <div className="text-4xl text-center mb-2">
                {shuffledQuestions[current].image}
              </div>
              <p className="text-center mb-3 font-medium text-pink-800">
                What fraction of the cake is this?
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {shuffledQuestions[current].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => checkAnswer(opt)}
                    className="bg-yellow-200 hover:bg-yellow-300 text-pink-800 font-bold py-2 rounded-xl"
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="text-center text-lg font-semibold text-green-600 h-6">
                {message}
              </div>
            </>
          ) : finished ? (
            <div className="text-center text-green-600 font-bold text-lg">
              🎉 You completed the challenge!
              <p className="text-pink-600 font-medium mt-2">
                You made {errors} mistake{errors !== 1 ? "s" : ""}. Great job!
              </p>
            </div>
          ) : null}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
