import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import CategoryBar from './components/category/category';
import { FilterBar } from './components/filterBar/filter';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
    </div>
  );
}

export default App;
