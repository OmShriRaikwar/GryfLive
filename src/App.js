import './App.css';
import Navbar from './components/Navbar';
import Placeholders from './components/Placeholders';
import Slides from './components/Slides';
import Pagination from './components/pagination';


function App() {
  return (
    <>
    <Navbar/>
    <Slides/> 
    <h3 className='container my-2'>Recent Videos</h3>

    <div className='ms-4'>
         <Placeholders></Placeholders>
    </div>
    <Pagination />
    </>
    );
}

export default App;
