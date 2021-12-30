import "./App.css";
import { Header } from "./Components/Header";
import { BlogList } from "./Components/BlogList";
import { MainBlog } from "./Components/MainBlog";

function App() {
  return (
    <div className="container">
      <Header />
      <MainBlog />
      <BlogList />
    </div>
  );
}

export default App;
