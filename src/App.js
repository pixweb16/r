import './App.css';
import Card from './Card';

const App = () => {
  return (
    <div className="App bg-gray-100">
      

      <header className="px-7">
      
        <h1 className="text-center text-4xl text-gray-500">Welcome</h1>
        
        <div className="flex justify-end text-sm">
          
          <a href="#" className="text-red-400 hover:text-red-300">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
            Sign-up
          </a>
          
          <a href="#" className="text-red-400 hover:text-red-300 ml-3">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Login
          </a>
        
        </div>
      </header>
      

      <main className="px-7">
        <Card/>
      </main>
      

      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
