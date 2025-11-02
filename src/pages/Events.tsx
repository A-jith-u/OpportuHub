import { useState } from "react";
import { Header } from "@/components/Header";
import { OpportunityCard } from "@/components/OpportunityCard";
import { FilterBar } from "@/components/FilterBar";
import { mockOpportunities } from "@/data/opportunities";
import { Calendar } from "lucide-react";

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("All");

  const events = mockOpportunities.filter((opp) => opp.category === "Event");

  const filteredOpportunities = events.filter((opportunity) => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDegree = selectedDegree === "All" || opportunity.degrees.includes(selectedDegree) || opportunity.degrees.includes("All");
    return matchesSearch && matchesDegree;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-8 animate-fade-in">
        <section className="text-center space-y-4 py-8">
          <div className="inline-flex items-center gap-2 text-primary animate-scale-in">
            <Calendar className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Events & Hackathons</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join competitions, workshops, and networking events
          </p>
        </section>

        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory="Event"
          setSelectedCategory={() => {}}
          selectedDegree={selectedDegree}
          setSelectedDegree={setSelectedDegree}
          hideCategory
        />

        <div className="text-muted-foreground">
          Showing {filteredOpportunities.length} {filteredOpportunities.length === 1 ? "event" : "events"}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} {...opportunity} />
          ))}
        </div>
      </main>
    </div>
  );
}
