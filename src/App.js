import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';


function App() {
  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
  console.log({isAuthenticated})
  return (
    <>
     <Header/>
    {isAuthenticated && <UserProfile/>}
    
    {!isAuthenticated && <Auth/>}
    <Counter/>
    </>
  );
}

export default App;
