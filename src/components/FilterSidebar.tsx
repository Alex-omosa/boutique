import { useSearch } from "~/contexts/SearchContext";
import { For, createEffect } from "solid-js";
import { SearchFilters } from "~/lib/types/types";

export default function FilterSidebar() {
    const { filters, toggleFilter, search } = useSearch();

    createEffect(() => {
        const f = filters();
        search();
    });

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
                                onChange={() => toggleFilter(props.filterKey, option)}
                            />
                            <span class="filter-label">{option}</span>
                        </label>
                    )}
                </For>
            </div>
        </div>
    );

    return (
        <aside class="filter-sidebar">
            <h2 class="section-title text-xl mb-4">Filters</h2>

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
        </aside>
    );
}