import "./App.css";

import { Route, Routes } from "react-router";

import { Home } from "./components/Home/Home";
import { Quiz } from "./components/Quiz/Quiz";
import { Results } from "./components/Results/Results";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
