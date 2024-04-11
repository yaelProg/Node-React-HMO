// Main component for the application.
import MemberSlice from './store/members/MemberSlice';
import CoronaSlice from './store/coronas/CoronaSlice';
import VaccineSlice from './store/vaccines/VaccineSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Read from './crud/Read';
import Members from './pages/Members';

// Configure Redux store with reducers for members, coronas, and vaccines
const myStore = configureStore({
  reducer:
  {
    MemberSlice,
    CoronaSlice,
    VaccineSlice,
  }
})
// Main application component
function App() {
  return (
    <>
      {/* Provide the Redux store to the application */}
      <Provider store={myStore}>
        {/* Render components to read member, corona, and vaccine data */}
        <Read page={'members'} />
        <Read page={'coronas'} />
        <Read page={'vaccines'} />
        {/* Render the Members page */}
        <Members />
      </Provider>
    </>
  );
}

export default App;
