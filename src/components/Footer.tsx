import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t mt-16 py-8 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OpportuHub
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive platform for career growth and opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/internships" className="text-muted-foreground hover:text-primary">Internships</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link to="/tools" className="text-muted-foreground hover:text-primary">AI Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/scholarships" className="text-muted-foreground hover:text-primary">Scholarships</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link to="/interviews" className="text-muted-foreground hover:text-primary">Interview Prep</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Built for students, by students.<br />
              All resources verified and 100% free.
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 OpportuHub. Empowering student careers.</p>
        </div>
      </div>
    </footer>
  );
}