import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIToolCard } from "@/components/AIToolCard";
import { aiTools, aiToolCategories } from "@/data/aiTools";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-8 animate-fade-in">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-2 text-primary animate-scale-in">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Free AI Tools for Students
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover powerful AI tools to supercharge your learning, coding, research, and creativity
          </p>
        </section>

        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {aiToolCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-muted-foreground">
          Showing {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <AIToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found. Try a different search or category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
