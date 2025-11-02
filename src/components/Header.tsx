import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/internships", label: "Internships" },
  { to: "/courses", label: "Courses" },
  { to: "/tools", label: "AI Tools" },
  { to: "/scholarships", label: "Scholarships" },
  { to: "/events", label: "Events" },
  { to: "/interviews", label: "Interviews" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <GraduationCap className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            OpportuHub
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive ? "text-primary after:scale-x-100" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
