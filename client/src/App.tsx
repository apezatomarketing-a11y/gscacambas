import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";

// GS Caçambas - Single Page Landing
// All navigation uses anchor links (#inicio, #sobre, #servicos, etc.)

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Fallback */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col md:flex-row min-h-screen">
            <SidebarMenu />
            <main className="flex-1 w-full pt-16 md:pt-0 md:pl-20">
              <Router />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
