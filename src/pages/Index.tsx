import { useState } from "react";
import { Header } from "@/components/Header";
import { OpportunityCard } from "@/components/OpportunityCard";
import { FilterBar } from "@/components/FilterBar";
import { mockOpportunities } from "@/data/opportunities";
import { TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDegree, setSelectedDegree] = useState("All");

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || opp.category === selectedCategory;
    
    const matchesDegree = selectedDegree === "All" || 
      opp.degrees.includes("All") || 
      opp.degrees.includes(selectedDegree);
    
    return matchesSearch && matchesCategory && matchesDegree;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary mb-4 animate-scale-in">
              <Sparkles className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Welcome to OpportuHub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your one-stop platform for discovering free internships, courses, scholarships, and tech resources tailored for college students
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="group">
                <Link to="/tools">
                  Explore AI Tools
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/internships">Browse Internships</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-primary">
                  <TrendingUp className="h-8 w-8" />
                  500+
                </div>
                <p className="text-sm text-muted-foreground mt-1">Opportunities</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-accent">
                  <Users className="h-8 w-8" />
                  10K+
                </div>
                <p className="text-sm text-muted-foreground mt-1">Students Helped</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-success">
                  <Sparkles className="h-8 w-8" />
                  100%
                </div>
                <p className="text-sm text-muted-foreground mt-1">Free Resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8 space-y-8">
        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Explore Opportunities</h2>
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDegree={selectedDegree}
            setSelectedDegree={setSelectedDegree}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredOpportunities.length}</span> opportunities
          </p>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} {...opportunity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No opportunities found. Try adjusting your filters.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Built for students, by students. All opportunities verified and 100% free.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
