// import logo from './logo.svg';
import {Route,Routes} from 'react-router'
import Photos from './pages/Photos';
import MemberSlice from './store/members/MemberSlice';
import CoronaSlice from './store/coronas/CoronaSlice';
import VaccineSlice from './store/vaccines/VaccineSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Read from './crud/Read';
import Members from './pages/Members';

const myStore =configureStore({
  reducer:
  {
    MemberSlice,
    CoronaSlice,
    VaccineSlice,
  }
})
function App() {
  return (
    <>
      <Provider store = {myStore}>
        <Read page ={'members'}/>
        <Read page ={'coronas'}/>
        <Read page ={'vaccines'}/>
          <Members/>
          {/* <Routes>
            
          </Routes> */}
      </Provider>
    </>
  );
}

export default App;
