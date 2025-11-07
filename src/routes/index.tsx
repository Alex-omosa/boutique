import SearchBar from "~/components/SearchBar";
import ProductList from "~/components/productList";
import FilterSidebar from "~/components/FilterSidebar";

export default function Home() {
  return (
    <main class="page-container">
      <h1 class="page-title text-center">Welcome to the Boutique</h1>
      
      <SearchBar />
      
      <section>
        <h2 class="section-title">Products</h2>
        <div class="layout-flex">
          <div class="sidebar-column">
            <FilterSidebar />
          </div>
          <div class="content-column">
            <ProductList />
          </div>
        </div>
      </section>
    </main>
  );
}