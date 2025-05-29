
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Trophy, Target } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Pizza Fraction Factory 🍕",
    description: "Build pizzas with the correct fractions! Help Chef Mario serve his customers!",
    difficulty: "Easy",
    stars: 3,
    bestScore: 850,
    icon: "🍕",
    color: "from-red-400 to-orange-400"
  },
  {
    id: 2,
    title: "Fraction Race Car 🏎️",
    description: "Race to the finish line by choosing the right fractions! Zoom zoom!",
    difficulty: "Medium",
    stars: 2,
    bestScore: 720,
    icon: "🏎️",
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 3,
    title: "Memory Fraction Match 🧠",
    description: "Match fraction cards with their pictures! Train your brain!",
    difficulty: "Easy",
    stars: 3,
    bestScore: 960,
    icon: "🧠",
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 4,
    title: "Cake Slice Challenge 🎂",
    description: "Cut cakes into perfect fraction slices for the birthday party!",
    difficulty: "Medium",
    stars: 1,
    bestScore: 450,
    icon: "🎂",
    color: "from-pink-400 to-rose-400"
  },
  {
    id: 5,
    title: "Fraction Space Adventure 🚀",
    description: "Help Captain Cosmos navigate through space using fraction coordinates!",
    difficulty: "Hard",
    stars: 0,
    bestScore: 0,
    icon: "🚀",
    color: "from-indigo-400 to-purple-400"
  },
  {
    id: 6,
    title: "Garden Fraction Helper 🌻",
    description: "Plant flowers in garden plots using fraction measurements!",
    difficulty: "Easy",
    stars: 2,
    bestScore: 680,
    icon: "🌻",
    color: "from-green-400 to-emerald-400"
  }
];

const difficultyColors = {
  Easy: "bg-kid-green",
  Medium: "bg-kid-yellow",
  Hard: "bg-kid-orange"
};

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const GameCard = ({ game }: { game: typeof games[0] }) => (
    <Card className="lesson-card overflow-hidden group hover:scale-105 transition-all duration-300">
      <div className={`h-2 bg-gradient-to-r ${game.color}`} />
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-5xl group-hover:animate-bounce">{game.icon}</div>
            <div>
              <CardTitle className="text-xl text-purple-700 font-bold">
                {game.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={`${difficultyColors[game.difficulty]} text-purple-700 font-semibold`}>
                  {game.difficulty}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-purple-600 font-medium">{game.description}</p>
        
        {/* Game Stats */}
        <div className="flex items-center justify-between bg-gradient-to-r from-kid-blue/20 to-kid-purple/20 rounded-xl p-3">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < game.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          {game.bestScore > 0 && (
            <div className="flex items-center gap-1 text-purple-600 font-bold">
              <Trophy className="h-4 w-4" />
              {game.bestScore}
            </div>
          )}
        </div>

        <Button 
          className="w-full kid-button font-bold text-lg py-3 rounded-2xl group-hover:scale-105 transition-all duration-300"
          onClick={() => setSelectedGame(game.id)}
        >
          <Play className="mr-2 h-5 w-5" />
          {game.bestScore > 0 ? "Play Again!" : "Start Game!"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header Section */}
      <div className="kid-card max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl animate-wiggle">🎮</div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-700 mb-2">
              Fraction Games Arcade! 🎯
            </h1>
            <p className="text-xl text-purple-600 font-medium">
              Ready to have some fraction fun? Pick a game and let's play! Each game helps you practice what you've learned! 🌟
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="kid-card text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-purple-700">
            {games.reduce((acc, game) => acc + game.stars, 0)}
          </div>
          <div className="text-purple-600 font-medium">Total Stars</div>
        </div>
        <div className="kid-card text-center">
          <div className="text-3xl mb-2">🎮</div>
          <div className="text-2xl font-bold text-purple-700">
            {games.filter(game => game.bestScore > 0).length}
          </div>
          <div className="text-purple-600 font-medium">Games Played</div>
        </div>
        <div className="kid-card text-center">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-2xl font-bold text-purple-700">
            {Math.max(...games.map(game => game.bestScore))}
          </div>
          <div className="text-purple-600 font-medium">Best Score</div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Choose Your Game Adventure! 🗺️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Fun Encouragement */}
      <div className="kid-card max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">🎊</div>
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          Keep Playing and Learning! 
        </h3>
        <p className="text-lg text-purple-600 font-medium">
          Every game makes you better at fractions! Have fun and don't forget to celebrate your wins! 🎉
        </p>
      </div>
    </div>
  );
}
