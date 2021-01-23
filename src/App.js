import './App.css';
import Navbar from './navbar/Navbar';
import CardsList from './CardsList';

const App = () => {
  return (
    <div className="App bg-gray-100">
      

      <header className="px-7 mb-7">
      
        <h1 className="text-center text-4xl text-gray-500">Welcome</h1>
        
        <Navbar/>
      </header>
      

      <main className="px-7">
        <CardsList/>
      </main>
      

      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
