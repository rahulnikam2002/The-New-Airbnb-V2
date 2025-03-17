
import './App.css';
import { Header } from './components/header/header';

import { FilterBar } from './components/filterBar/filter';
import { CardList } from './components/cardlist/cardlist';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
