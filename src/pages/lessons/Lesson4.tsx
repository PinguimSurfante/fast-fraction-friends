import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Lesson4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-yellow-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">🎭 Equal Fractions</h1>

        <p className="text-lg text-indigo-600 mb-4">
          Hello superstar! 🌟 Did you know that different fractions can mean the same thing?
        </p>

        <p className="text-indigo-600 mb-4">
          Let's imagine a yummy chocolate bar 🍫 cut into different pieces.
          If you eat <strong>2 out of 4</strong> pieces, that's <strong>2/4</strong>.
        </p>

        <p className="text-indigo-600 mb-4">
          Now imagine the same bar, but it’s cut into 2 big pieces. If you eat <strong>1 out of 2</strong>, that’s <strong>1/2</strong>.
        </p>

        <p className="text-indigo-600 mb-4">
          🍫 Surprise! 2/4 and 1/2 are the <strong>same amount</strong> of chocolate! They are <strong>equal fractions</strong>.
        </p>

        <div className="bg-indigo-100 rounded-xl p-4 text-indigo-700 font-semibold text-lg mb-6">
          ➕ <em>Even if fractions look different, they can still show the same part of something!</em>
        </div>

        <div className="text-center mt-8">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>Back to Lessons</Button>
        </div>
      </div>
    </div>
  );
}