import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'

import { Navigate, Route, Routes } from 'react-router-dom'
import { FirebaseAuth } from '../firebase/config'

import { login, logout } from '../store/auth/authSlice'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/component/CheckingAuth'

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged(FirebaseAuth, async( user ) =>{
      if( !user ) return dispatch( logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({uid, email, displayName, photoURL}));
    })
    
  }, [])
  

  if( status === 'verificando'){
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'autenticado')
        ? <Route path='auth/*' element={ <AuthRoutes />}/>
        : <Route path='/*' element={<JournalRoutes/> }/>
      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> }/>

        {/*Login y registro*/}
        {/* <Route path='auth/*' element={ <AuthRoutes />}/> */}

        {/*Journal  */}
        {/* <Route path='/*' element={<JournalRoutes/> }/> */}

    </Routes>
  )
}
