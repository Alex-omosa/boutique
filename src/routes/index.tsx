import SearchBar from "~/components/SearchBar";
import ProductList from "~/components/productList";
import FilterSidebar from "~/components/FilterSidebar";

export default function Home() {
  return (
    <>
      <div class="top-bar-wrapper">
        <div class="top-bar-container">
          <FilterSidebar />
          <SearchBar />
        </div>
      </div>
      
      <main class="page-container">
        <section>
          <div class="layout-flex">
            <div class="sidebar-column">
              <aside class="filter-sidebar-desktop">
                <FilterSidebar showDesktopSidebar={true} />
              </aside>
            </div>
            <div class="content-column">
              <ProductList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}