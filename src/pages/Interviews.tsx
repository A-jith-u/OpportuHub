import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quiz } from "@/components/Quiz";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Target, Brain, Code, Users, ExternalLink, GraduationCap, PlayCircle } from "lucide-react";
import {
  quantitativeQuestions,
  qualitativeQuestions,
  technicalQuestions,
  generalInterviewQuestions,
  branches,
  degrees
} from "@/data/quizData";

const Interviews = () => {
  const [selectedBranch, setSelectedBranch] = useState("cse");
  const [selectedDegree, setSelectedDegree] = useState("btech");
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  const getTechnicalQuestions = () => {
    const branchQuestions = technicalQuestions[selectedBranch as keyof typeof technicalQuestions] || [];
    return branchQuestions.filter(q => !q.degree || q.degree === selectedDegree);
  };

  const startQuiz = (quizType: string) => {
    setActiveQuiz(quizType);
  };

  const handleQuizComplete = (score: number, total: number) => {
    console.log(`Quiz completed: ${score}/${total}`);
    // Could add scoring logic here
  };

  if (activeQuiz) {
    let quizData;
    let quizTitle;
    let quizDescription;

    switch (activeQuiz) {
      case "quantitative":
        quizData = quantitativeQuestions;
        quizTitle = "Quantitative Aptitude Test";
        quizDescription = "Test your mathematical and analytical skills";
        break;
      case "qualitative":
        quizData = qualitativeQuestions;
        quizTitle = "Qualitative Aptitude Test";
        quizDescription = "Test your logical reasoning and verbal abilities";
        break;
      case "technical":
        quizData = getTechnicalQuestions();
        quizTitle = `${branches.find(b => b.id === selectedBranch)?.name} Technical Quiz`;
        quizDescription = `Technical questions for ${selectedDegree.toUpperCase()} ${selectedBranch.toUpperCase()} students`;
        break;
      default:
        return null;
    }

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setActiveQuiz(null)}
              className="mb-4"
            >
              ← Back to Interview Prep
            </Button>
          </div>
          <Quiz
            title={quizTitle}
            description={quizDescription}
            questions={quizData}
            onComplete={handleQuizComplete}
          />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Interactive Interview Preparation Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practice with interactive quizzes and mock interviews tailored for your branch and degree level.
          </p>
        </div>

        {/* Branch and Degree Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Personalize Your Preparation
            </CardTitle>
            <CardDescription>
              Select your branch and degree level to get relevant practice questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Branch</label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map(branch => (
                      <SelectItem key={branch.id} value={branch.id}>
                        {branch.name} ({branch.short})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Degree</label>
                <Select value={selectedDegree} onValueChange={setSelectedDegree}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {degrees.map(degree => (
                      <SelectItem key={degree.id} value={degree.id}>
                        {degree.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="aptitude" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="aptitude" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Aptitude Tests
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="interview" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Mock Interviews
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="aptitude">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Quantitative Aptitude
                  </CardTitle>
                  <CardDescription>
                    Practice mathematical problems, data interpretation, and analytical questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Questions: {quantitativeQuestions.length}</span>
                      <Badge variant="secondary">General</Badge>
                    </div>
                    <Button onClick={() => startQuiz("quantitative")} className="w-full">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start Quantitative Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Qualitative Aptitude
                  </CardTitle>
                  <CardDescription>
                    Test your logical reasoning, verbal ability, and critical thinking skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Questions: {qualitativeQuestions.length}</span>
                      <Badge variant="secondary">General</Badge>
                    </div>
                    <Button onClick={() => startQuiz("qualitative")} className="w-full">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start Qualitative Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  {branches.find(b => b.id === selectedBranch)?.name} Technical Questions
                </CardTitle>
                <CardDescription>
                  Branch-specific technical questions for {selectedDegree.toUpperCase()} students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Questions: {getTechnicalQuestions().length}
                    </span>
                    <div className="flex gap-2">
                      <Badge variant="outline">{selectedBranch.toUpperCase()}</Badge>
                      <Badge variant="outline">{selectedDegree.toUpperCase()}</Badge>
                    </div>
                  </div>
                  {getTechnicalQuestions().length > 0 ? (
                    <Button onClick={() => startQuiz("technical")} className="w-full">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start Technical Quiz
                    </Button>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      No questions available for this branch/degree combination yet.
                      Try selecting a different branch or degree level.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interview">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Mock Interview Practice
                  </CardTitle>
                  <CardDescription>
                    Practice common interview questions with tips and sample answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {generalInterviewQuestions.map((item) => (
                      <Card key={item.id} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{item.question}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Tips:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {item.tips.map((tip, index) => (
                                <li key={index}>• {tip}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Sample Structure:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {item.commonAnswers.map((answer, index) => (
                                <li key={index}>• {answer}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quantitative Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.indiabix.com/aptitude/questions-and-answers/" target="_blank" rel="noopener noreferrer">
                      IndiaBIX Aptitude <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.geeksforgeeks.org/aptitude/" target="_blank" rel="noopener noreferrer">
                      GeeksforGeeks Aptitude <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.aptitude-test.com/" target="_blank" rel="noopener noreferrer">
                      Aptitude Test Practice <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Qualitative Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.indiabix.com/logical-reasoning/questions-and-answers/" target="_blank" rel="noopener noreferrer">
                      Logical Reasoning Practice <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.englishgrammar101.com/" target="_blank" rel="noopener noreferrer">
                      English Grammar <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.practiceaptitudetests.com/" target="_blank" rel="noopener noreferrer">
                      Verbal Reasoning Tests <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technical Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                      LeetCode <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
                      HackerRank <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer">
                      CodeChef <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
                      GeeksforGeeks <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Interviews;