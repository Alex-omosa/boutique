import { useSearch } from "~/contexts/SearchContext";
import { For, Show, createMemo } from "solid-js";

export default function ProductList() {
    const { results, isLoading, error } = useSearch();

    const hasResults = createMemo(() => results().length > 0);
    const showResults = createMemo(() => !isLoading() && !error() && hasResults());

    return (
        <div>
            <Show when={isLoading()}>
                <div class="loading-state">
                    <p class="loading-text">Searching products...</p>
                </div>
            </Show>

            <Show when={!isLoading() && error()}>
                <div class="error-state">
                    <p class="error-text">Error: {error()}</p>
                    <button
                        class="error-button"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            </Show>

            <Show when={!isLoading() && !error() && !hasResults()}>
                <div class="empty-state">
                    <p class="empty-title">No products found</p>
                    <p class="empty-subtitle">Try adjusting your filters or search term</p>
                </div>
            </Show>

            <Show when={showResults()}>
                <div>
                    <div class="results-header">
                        <p class="results-count">{results().length} products found</p>
                    </div>

                    <div class="product-grid">
                        <For each={results()}>
                            {(product) => (
                                <div class="product-card">
                                    <div class="product-images">
                                        <Show
                                            when={product.imageUrls?.default}
                                            fallback={<div class="image-placeholder">No Image</div>}
                                        >
                                            <img
                                                src={`/api/images/${encodeURIComponent(product.imageUrls.default)}`}
                                                alt={product.productDisplayName}
                                                loading="lazy"
                                                class="product-image"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${product.imageUrls.default}`);
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        </Show>
                                    </div>
                                    
                                    <h3 class="product-name">
                                        {product.productDisplayName || "No Name"}
                                    </h3>
                                    <p class="product-brand">
                                        {product.brandName || "Unknown"}
                                    </p>
                                    <div class="product-details">
                                        <span class="product-badge">{product.masterCategory || "N/A"}</span>
                                        <span class="product-badge">{product.season || "N/A"}</span>
                                    </div>
                                    <p class="product-price">
                                        ${product.price ? product.price.toFixed(2) : "N/A"}
                                    </p>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </Show>
        </div>
    );
}