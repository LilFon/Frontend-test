import { 
  BrowserRouter as Router,
  Route,
  Routes 
       } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';
import {Home} from '../pages/Home';
import {AddArticle} from '../pages/AddArticle';
import {EditArticle} from '../pages/EditArticle';

function App() {
  return (
    <>
    <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
     <Route path="/Frontend-test" element={<Home/>} />
     <Route path="/Frontend-test/AddArticle" element={<AddArticle/>} />
     <Route path="/Frontend-test/EditArticle" element={<EditArticle/>} />
    </Routes>
    
    <Footer/>

    </Router>
       
    </>
  );
}

export default App;
