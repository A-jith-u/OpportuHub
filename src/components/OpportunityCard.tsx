import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface OpportunityCardProps {
  title: string;
  provider: string;
  category: string;
  deadline: string;
  location: string;
  description: string;
  link: string;
  degrees: string[];
  tags: string[];
}

export const OpportunityCard = ({
  title,
  provider,
  category,
  deadline,
  location,
  description,
  link,
  degrees,
  tags,
}: OpportunityCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Internship: "bg-primary text-primary-foreground",
      Course: "bg-accent text-accent-foreground",
      Scholarship: "bg-success text-success-foreground",
      Event: "bg-secondary text-secondary-foreground",
      Tool: "bg-primary/80 text-primary-foreground",
      Resource: "bg-accent/80 text-accent-foreground",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-border h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            Free
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="font-medium text-foreground/70">
          {provider}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {!degrees.includes("All") && (
          <p className="text-xs text-muted-foreground mt-2">
            For: {degrees.join(", ")}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Details
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
