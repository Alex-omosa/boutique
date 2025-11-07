import { useSearch } from "~/contexts/SearchContext";
import { onCleanup } from "solid-js";

export default function SearchBar() {
  const { filters, updateFilter, search } = useSearch();
  let timeoutId: NodeJS.Timeout | undefined;
  
  const handleInput = (e: InputEvent) => {
    updateFilter("query", (e.target as HTMLInputElement).value);
    
    if (timeoutId) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      search();
    }, 300);
  };
  
  onCleanup(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
  
  return (
    <input
      class="search-input"
      value={filters().query}
      onInput={handleInput}
      placeholder="Search products..."
      type="search"
    />
  );
}