import { Dialog } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

const raceQuestions = [
  { image: "⛽", correct: "1/4", options: ["1/2", "1/4", "3/4"] },
  { image: "⛽⛽", correct: "2/4", options: ["1/2", "2/4", "3/4"] },
  { image: "⛽⛽⛽", correct: "3/4", options: ["1/4", "3/4", "2/4"] },
  { image: "⛽⛽⛽⛽", correct: "4/4", options: ["4/4", "3/4", "2/4"] },
];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function RaceModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [currentQuestion, setCurrentQuestion] = useState<typeof raceQuestions[0] | null>(null);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (open) {
      const randomized = shuffle(raceQuestions)[0];
      randomized.options = shuffle(randomized.options);
      setCurrentQuestion(randomized);
      setMessage("");
      setFinished(false);
      setErrors(0);
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
    }
  }, [open]);

  const handleAnswer = (answer: string) => {
    if (!currentQuestion) return;

    if (answer === currentQuestion.correct) {
      setMessage("✅ Vroom! Great job!");
      setFinished(true);
    } else {
      setErrors((prev) => prev + 1);
      setMessage("❌ Oops! Try again!");
      setTimeout(() => setMessage(""), 1000);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <Dialog.Panel className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 max-w-xl w-full shadow-xl border-4 border-blue-300">
        <div className="flex justify-between items-center mb-3">
          <Dialog.Title className="text-3xl font-extrabold text-blue-700">
            🏎️ Fraction Race Car
          </Dialog.Title>
          <button
            onClick={() => setOpen(false)}
            className="text-red-500 hover:text-red-700 font-bold text-2xl"
          >
            ✖
          </button>
        </div>

        {currentQuestion && !finished && (
          <>
            <p className="text-lg text-blue-700 font-semibold text-center mb-2">
              How many tanks do you see? {currentQuestion.image}
            </p>
            <p className="text-center text-sm text-red-600 mb-2">
              Mistakes: {errors}
            </p>
            <div className="grid grid-cols-1 gap-3 mb-4">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="bg-blue-200 hover:bg-blue-300 text-blue-900 font-bold py-2 px-4 rounded-xl"
                >
                  {opt}
                </button>
              ))}
            </div>
            <p className="text-center text-blue-800 font-bold min-h-[24px]">{message}</p>
          </>
        )}

        {finished && (
          <div className="text-center text-green-700 font-bold text-lg">
            🎉 Awesome! You chose the right amount!
          </div>
        )}

        <div className="mt-6">
          <iframe
            ref={iframeRef}
            src="/jogos/jogo2-portais.html"
            width="100%"
            height="300px"
            className="border-4 border-blue-400 rounded-xl shadow-md bg-white"
            title="Fraction Race Game"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
