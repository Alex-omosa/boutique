import { MetaProvider, Title, Meta } from "@solidjs/meta";
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
            <Meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <Meta name="description" content="Browse our collection of fashion items" />
            <nav class="top-nav">
              <div class="top-nav-container">
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