import { ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { AITool } from "@/data/aiTools";

interface AIToolCardProps {
  tool: AITool;
}

export function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {tool.name}
            </CardTitle>
          </div>
          <Badge variant="secondary" className="text-xs">
            {tool.category}
          </Badge>
        </div>
        <CardDescription className="mt-2">{tool.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {tool.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-success font-medium flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          {tool.freeTier}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full group/btn">
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
            Visit Tool
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
