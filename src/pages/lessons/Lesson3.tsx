import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Lesson3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-lime-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">🎾 Fractions in Sets</h1>

        <p className="text-lg text-blue-600 mb-4">
          Did you know you can use fractions to count groups of things? Let's explore! 🧠
        </p>

        <p className="text-blue-600 mb-4">
          Imagine you have <strong>8 tennis balls</strong>. 🎾🎾🎾🎾🎾🎾🎾🎾
          Some are green and some are yellow. Let's say:
        </p>

        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li><strong>4 green balls</strong> = 4 out of 8 = <strong>4/8</strong></li>
          <li><strong>2 yellow balls</strong> = 2 out of 8 = <strong>2/8</strong></li>
          <li><strong>2 orange balls</strong> = 2 out of 8 = <strong>2/8</strong></li>
        </ul>

        <p className="text-blue-600 mb-4">
          We are using fractions to show <strong>how many of each type</strong> are in the whole group.
        </p>

        <div className="bg-blue-100 rounded-xl p-4 text-blue-700 font-semibold text-lg mb-6">
          ➕ <em>Fractions in sets help us understand parts of a group — not just slices!</em>
        </div>

        <div className="text-center mt-8">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>Back to Lessons</Button>
        </div>
      </div>
    </div>
  );
}
