import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from './redux/hooks';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';
import { auth } from './lib/firebase';

function App() {
 
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!))
        dispatch(setLoading(false))
      } else{
        dispatch(setLoading(false))
      }
    });
  },[dispatch])
 

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
