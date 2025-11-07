import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { SearchProvider } from "~/contexts/SearchContext";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <SearchProvider>
      <Router
        root={props => (
          <MetaProvider>
            <Title>Boutique - Fashion Store</Title>
            <nav class="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
              <div class="container mx-auto flex gap-6">
                <a href="/" class="nav-link">Home</a>
                <a href="/about" class="nav-link">About</a>
              </div>
            </nav>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </SearchProvider>
  );
}