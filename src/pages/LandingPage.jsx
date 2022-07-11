//Hooks
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
//Components
import MoviesGrid from "../components/MoviesGrid";
import { Search } from "../components/Search";

function LandingPage() {
//States  
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncerSearch = useDebounce(search, 300);
//Render
  return (
    <div>
      <Search />

      <MoviesGrid key={debouncerSearch} search={debouncerSearch} />
    </div>
  );
}

export default LandingPage;
