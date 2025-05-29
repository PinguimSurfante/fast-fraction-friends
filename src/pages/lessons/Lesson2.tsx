import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Lesson2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">🍕 Parts of a Whole</h1>
        <p className="text-lg text-pink-600 mb-4">
          Hi there, math explorer! 🧠✨ Let’s talk about something yummy… <strong>pizza!</strong>
        </p>

        <p className="text-pink-600 mb-4">
          Imagine you have a big pizza, and you want to share it with your friends. 🍕 If you cut the pizza into
          <strong> 4 equal slices</strong>, each slice is a <strong>part of the whole</strong> pizza.
        </p>

        <ul className="list-disc list-inside text-pink-600 mb-4">
          <li>One slice = <strong>1 out of 4 parts</strong> = <strong>1/4</strong></li>
          <li>Two slices = <strong>2/4</strong></li>
          <li>All four slices = <strong>4/4</strong> → the <strong>whole pizza</strong>!</li>
        </ul>

        <p className="text-pink-600 mb-4">
          🍰 This works for cakes, chocolate bars, and anything you can share! When you divide something into equal parts,
          <strong>each part is a fraction</strong> of the whole thing.
        </p>

        <div className="bg-pink-100 rounded-xl p-4 text-pink-700 font-semibold text-lg mb-6">
          ➕ <em>A fraction is when we split something into equal pieces. If we take some of the pieces, we are using a part of the whole.</em>
        </div>

        <div className="text-center mt-8">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>Back to Lessons</Button>
        </div>
      </div>
    </div>
  );
}
