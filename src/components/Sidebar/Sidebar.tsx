import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute top-4 left-4">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px]">
        <nav className="flex flex-col space-y-4 mt-5">
          <Link to={"/home"} className="w-full">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              className="justify-start w-full"
            >
              Home
            </Button>
          </Link>
          <Link to={"/logs"} className="w-full">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              className="justify-start w-full"
            >
              Previous Logs
            </Button>
          </Link>
          <Link to={"/settings"} className="w-full">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              className="justify-start w-full"
            >
              Settings
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
