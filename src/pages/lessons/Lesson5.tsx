import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Lesson5() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-orange-700 mb-4">⚖️ Comparing Fractions</h1>

        <p className="text-lg text-orange-600 mb-4">
          Hey math hero! 🦸‍♀️🦸‍♂️ Let’s learn how to compare fractions and see which ones are bigger or smaller!
        </p>

        <p className="text-orange-600 mb-4">
          Imagine two chocolate bars 🍫:
        </p>

        <ul className="list-disc list-inside text-orange-600 mb-4">
          <li>One is cut into 4 pieces. You eat 3 → that’s <strong>3/4</strong>.</li>
          <li>Another is cut into 4 pieces too, but you only eat 1 → that’s <strong>1/4</strong>.</li>
        </ul>

        <p className="text-orange-600 mb-4">
          🍫 Since <strong>3 is more than 1</strong>, we know that <strong>3/4 is bigger than 1/4</strong>!
        </p>

        <p className="text-orange-600 mb-4">
          Sometimes, the pieces are different sizes, so we may need to think or draw to help compare.
        </p>

        <div className="bg-orange-100 rounded-xl p-4 text-orange-700 font-semibold text-lg mb-6">
          ➕ <em>When comparing fractions with the same bottom number (denominator), just look at the top number!</em>
        </div>

        <div className="text-center mt-8">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>Back to Lessons</Button>
        </div>
      </div>
    </div>
  );
}
