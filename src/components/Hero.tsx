import { useTheme } from "next-themes";
import { Github, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between mb-8">
      <div>
        <h1 className="text-2xl">React TSX App</h1>
        <p>
          A bundle-free app kit that includes{" "}
          <a className="underline" href="https://ui.shadcn.com">
            shadcn/ui
          </a>{" "}
          and its dependencies.
        </p>
      </div>
      <div className="flex gap-1">
        <a href="https://github.com/guscost/react-tsx-app" target="_blank">
          <Button variant="ghost" className="w-10">
            <Github fill="currentColor" />
          </Button>
        </a>
        <Button
          variant="ghost"
          className="w-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon fill="currentColor" />
          ) : (
            <Sun fill="currentColor" />
          )}
        </Button>
      </div>
    </div>
  );
}
