import { useState  } from "react";

import Navbar from './components/Navbar';
import Events from './components/Events';
//import SignupForm from './components/SignupForm';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

/*   useEffect(() => {
    console.log('useEffect');
  }, [searchTerm]); */

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);

  };

  //console.log(searchTerm, 10);

  return (
    <>
    <Navbar onSearch={handleNavbarSearch}/>
    <Events searchTerm={searchTerm}/> 
    
    {/* <SignupForm /> */}
    </>
  )
}

export default App
