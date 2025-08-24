
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Article from "@/pages/article";
import CursorGlow from "@/components/effects/cursor-glow";
import ScrollAnimations from "@/components/effects/scroll-animations";

import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/article/:id" component={Article} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative">
          <CursorGlow />
          <ScrollAnimations />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
