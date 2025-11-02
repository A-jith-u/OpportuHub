import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface QuizProps {
  title: string;
  description: string;
  questions: Question[];
  onComplete?: (score: number, total: number) => void;
}

export function Quiz({ title, description, questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [completed, setCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowResult(false);
    } else {
      setCompleted(true);
      onComplete?.(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0), questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
    setCompleted(false);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
          <CardDescription>{title} - Results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{percentage}%</div>
            <p className="text-muted-foreground">
              You scored {score} out of {questions.length} questions correctly
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Performance:</span>
              <Badge variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}>
                {percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleRestart} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} className="flex-1">
              Back to Topics
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{question.difficulty}</Badge>
        </div>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground text-center">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">{question.question}</h3>

          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correctAnswer
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : "border-primary bg-primary/10"
                    : showResult && index === question.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-border hover:border-primary/50"
                }`}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                  {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showResult && (
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Explanation:</h4>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}

        <div className="flex gap-4">
          {!showResult ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex-1"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex-1">
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}