import { useSearch } from "~/contexts/SearchContext";
import { For, createSignal, Show } from "solid-js";
import { SearchFilters } from "~/lib/types/types";

export default function FilterSidebar() {
    const { filters, toggleFilter, search } = useSearch();
    const [isOpen, setIsOpen] = createSignal(false);

    const FilterSection = (props: { title: string; filterKey: keyof Omit<SearchFilters, 'query'>; options: string[] }) => (
        <div class="filter-section">
            <h3 class="filter-title">{props.title}</h3>
            <div class="space-y-1">
                <For each={props.options}>
                    {(option) => (
                        <label class="filter-option">
                            <input
                                type="checkbox"
                                class="filter-checkbox"
                                checked={filters()[props.filterKey].includes(option)}
                                onChange={() => {
                                    toggleFilter(props.filterKey, option);
                                    search();
                                }}
                            />
                            <span class="filter-label">{option}</span>
                        </label>
                    )}
                </For>
            </div>
        </div>
    );

    const FilterContent = () => (
        <>
            <FilterSection
                title="Gender"
                filterKey="gender"
                options={['Male', 'Female', 'Unisex', 'Girls', 'Boys']}
            />

            <FilterSection
                title="Category"
                filterKey="masterCategory"
                options={['Apparel', 'Accessories', 'Footwear', 'Sporting Goods', 'Personal Care']}
            />

            <FilterSection
                title="Subcategory"
                filterKey="subCategory"
                options={['Bottomwear', 'Topwear', 'Innerwear', 'Sandals', 'Shoes']}
            />

            <FilterSection
                title="Colors"
                filterKey="baseColour"
                options={['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Pink', 'Purple', 'Orange', 'Brown', 'Grey']}
            />
        </>
    );

    return (
        <>
            {/* Mobile Hamburger Menu Button */}
            <button
                class="filter-hamburger-button"
                onClick={() => setIsOpen(true)}
                aria-label="Open filters menu"
            >
                <svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Desktop Sidebar */}
            <aside class="filter-sidebar filter-sidebar-desktop">
                <h2 class="section-title text-xl mb-4">Filters</h2>
                <FilterContent />
            </aside>

            {/* Mobile Drawer */}
            <Show when={isOpen()}>
                {/* Backdrop */}
                <div
                    class="filter-backdrop"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
                
                {/* Drawer */}
                <aside class="filter-drawer" role="dialog" aria-label="Filters">
                    <div class="filter-drawer-header">
                        <h2 class="text-xl font-bold text-neutral-900">Filters</h2>
                        <button
                            class="filter-close-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close filters"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="filter-drawer-content">
                        <FilterContent />
                    </div>
                </aside>
            </Show>
        </>
    );
}