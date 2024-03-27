// import logo from './logo.svg';
import Navbar from './Navbar';
import {Route,Routes} from 'react-router'
import Photos from './pages/Photos';
import Home from './HomePage';
import MemberSlice from './store/MemberSlice';
import { Provider } from 'react-redux';
import { configure } from 'axios-hooks';
import { configureStore } from '@reduxjs/toolkit';
import Read from './crud/Read';
import { MembersList } from './store/members/MembersList';
import Members from './pages/Members';

const myStore =configureStore({
  reducer:
  {
    MemberSlice
  }
})
function App() {
  return (
    <>
      <Provider store = {myStore}>
        <Read page ={'members'}/>
          {/* <Navbar/> */}
          <Members/>
          {/* <Routes>
            <Route path="/Posts" element ={<Posts/>} />
            <Route path="/Members" element ={<MembersList/>} />
            
            <Route path="/Photos" element ={<Photos/>} />
          </Routes> */}
      </Provider>
    </>
  );
}

export default App;
