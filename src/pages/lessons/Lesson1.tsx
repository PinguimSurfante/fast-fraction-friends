// src/pages/lessons/Lesson1.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Lesson1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">🍰 What is a Fraction?</h1>
        <p className="text-lg text-purple-600 mb-4">
          A fraction shows a part of a whole. For example, if you cut a cake into 4 pieces and take 1, that’s <strong>1/4</strong>!
        </p>
        <p className="text-purple-600">
          The top number tells how many parts you have. The bottom number tells how many equal parts the whole was divided into.
        </p>
        <div className="mt-6 text-center">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>
            Back to Lessons
          </Button>
        </div>
      </div>
    </div>
  );
}
