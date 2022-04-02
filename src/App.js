import { Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import CommentDetails from './components/CommentDetails/CommentDetails';
import Users from './components/Users/Users';
import UserDetails from './components/Comment/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/comments' element={<Comments />}></Route>
        <Route path='/comment/:commentId' element={<CommentDetails />}></Route>
        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
