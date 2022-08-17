
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/component/CheckingAuth'
import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {

  const { status } = useCheckAuth();
  
  if( status === 'verificando'){
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'Autenticado')
        ? <Route path='/*' element={<JournalRoutes/> }/>
        : <Route path='auth/*' element={ <AuthRoutes />}/>
      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> }/>

        {/*Login y registro*/}
        {/* <Route path='auth/*' element={ <AuthRoutes />}/> */}

        {/*Journal  */}
        {/* <Route path='/*' element={<JournalRoutes/> }/> */}

    </Routes>
  )
}
