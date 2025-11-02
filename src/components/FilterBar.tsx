import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDegree: string;
  setSelectedDegree: (degree: string) => void;
  hideCategory?: boolean;
}

export const FilterBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDegree,
  setSelectedDegree,
  hideCategory = false,
}: FilterBarProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Search opportunities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {!hideCategory && (
          <div className="flex-1">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-7 h-auto">
                <TabsTrigger value="All" className="py-2 text-xs sm:text-sm">All</TabsTrigger>
                <TabsTrigger value="Internship" className="py-2 text-xs sm:text-sm">Internships</TabsTrigger>
                <TabsTrigger value="Course" className="py-2 text-xs sm:text-sm">Courses</TabsTrigger>
                <TabsTrigger value="Scholarship" className="py-2 text-xs sm:text-sm">Programs</TabsTrigger>
                <TabsTrigger value="Event" className="py-2 text-xs sm:text-sm">Events</TabsTrigger>
                <TabsTrigger value="Tool" className="py-2 text-xs sm:text-sm">Tools</TabsTrigger>
                <TabsTrigger value="Resource" className="py-2 text-xs sm:text-sm">Resources</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}
        <div className={hideCategory ? "w-full" : "w-full sm:w-64"}>
          <Select value={selectedDegree} onValueChange={setSelectedDegree}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Filter by degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Degrees</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Software Engineering">Software Engineering</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="AI/ML">AI/ML</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Architecture">Architecture</SelectItem>
              <SelectItem value="Statistics">Statistics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
