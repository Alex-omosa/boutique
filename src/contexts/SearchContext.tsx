// ~/contexts/SearchContext.tsx
import { createContext, useContext, createSignal, ParentComponent } from "solid-js";
import { searchProducts } from '~/lib/api/search';
import type { Product, SearchFilters } from '~/lib/types/types';

type SearchContextType = {
  filters: () => SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  updateFilter: (key: keyof SearchFilters, value: any) => void;
  toggleFilter: (key: keyof Omit<SearchFilters, 'query'>, value: string) => void;
  clearFilters: () => void;
  results: () => Product[];
  isLoading: () => boolean;
  error: () => string | null;
  search: () => Promise<void>;
};

const SearchContext = createContext<SearchContextType>();

export const SearchProvider: ParentComponent = (props) => {
  const [filters, setFilters] = createSignal<SearchFilters>({
    query: "",
    gender: [],
    masterCategory: [],
    subCategory: [],
    baseColour: []
  });
  const [results, setResults] = createSignal<Product[]>([]);
  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleFilter = (key: keyof Omit<SearchFilters, 'query'>, value: string) => {
    setFilters(prev => {
      const currentValues = prev[key] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [key]: newValues };
    });
  };

  const search = async () => {
    const currentFilters = filters();
    
    // Check if we have any active filters (query or checkboxes)
    const hasActiveFilters = 
      currentFilters.query.trim() || 
      currentFilters.gender.length > 0 || 
      currentFilters.masterCategory.length > 0 || 
      currentFilters.subCategory.length > 0 || 
      currentFilters.baseColour.length > 0;
    
    // Don't search if no filters are active
    if (!hasActiveFilters) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchProducts(
        currentFilters.query || "", // Pass empty string if no query
        {
          gender: currentFilters.gender,
          masterCategory: currentFilters.masterCategory,
          subCategory: currentFilters.subCategory,
          baseColour: currentFilters.baseColour,
        }
      );
      setResults(data);
    } catch (err) {
      console.error("Search failed:", err);
      setError(err instanceof Error ? err.message : "Search failed");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      query: "",
      gender: [],
      masterCategory: [],
      subCategory: [],
      baseColour: []
    });
    setResults([]);
    setError(null);
  };

  return (
    <SearchContext.Provider value={{
      filters,
      setFilters,
      updateFilter,
      toggleFilter,
      clearFilters,
      results,
      isLoading,
      error,
      search
    }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
};