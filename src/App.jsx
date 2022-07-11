//Styles
import styles from "./App.module.css";
//Hooks
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
//Components
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
//Render
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Films</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
