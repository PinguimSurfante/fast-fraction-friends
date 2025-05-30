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
        <p className="text-purple-600 mb-8">
          The top number tells how many parts you have. The bottom number tells how many equal parts the whole was divided into.
        </p>

        {/* 🧠 Visual Explanation with Apple */}
        <div className="space-y-4 text-purple-600 text-base">
          <h2 className="text-2xl font-bold text-purple-700">🍎 Let's Use an Apple to Understand Fractions!</h2>
          <p><strong>Model: The Sliced Apple 🍏</strong></p>
          <p>Imagine a nice, red, whole apple. That’s ONE apple.</p>
          <pre className="bg-purple-100 rounded-xl p-3 text-sm overflow-x-auto">{`
   .--""--.
  /        \\
 |    🍎    |   <--- Whole apple (1)
  \\  APPLE /
   '------'`}</pre>
          <p>Now, let’s slice this apple into 4 equal pieces to share with friends:</p>
          <pre className="bg-purple-100 rounded-xl p-3 text-sm overflow-x-auto">{`
   .--""--.
  /   |    \\
 | -- 🍎 -- |   <--- Cut into 4 equal slices
  \\   |    /
   '------'`}</pre>
          <p>
            Slice 1 | Slice 2 | Slice 3 | Slice 4<br />
            (1/4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1/4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1/4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1/4)
          </p>
          <p>Each slice is <strong>1/4</strong> of the apple.</p>

          <p>If you take one slice:</p>
          <pre className="bg-purple-100 rounded-xl p-3 text-sm overflow-x-auto">{`
   .--""--.
  /        \\
 |  You    |
  \\ took   /
   '------'       <--- One slice (1/4)
     🍎`}</pre>

          <p>And there are 3 slices left on the table:</p>
          <pre className="bg-purple-100 rounded-xl p-3 text-sm overflow-x-auto">{`
   .--""--.
  /   |    \\
 | --   -- |   <--- 3 slices remaining (3/4)
  \\   |    /
   '------'`}</pre>

          <ul className="list-disc ml-6">
            <li><strong>Denominator</strong> (4): how many equal slices the apple was cut into.</li>
            <li><strong>Numerator</strong> (1): how many slices you took.</li>
          </ul>

          <p>If you took 3 slices, you'd have <strong>3/4</strong> of the apple! 🍎🍎🍎</p>
          <p className="font-bold">🧠 A fraction is a little piece of something that was divided into equal parts!</p>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Button className="kid-button text-lg px-6 py-3" onClick={() => navigate("/lessons")}>
            Back to Lessons
          </Button>
        </div>
      </div>
    </div>
  );
}
