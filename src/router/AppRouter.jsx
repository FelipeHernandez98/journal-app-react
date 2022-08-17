import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/component/CheckingAuth'

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth);

  if( status === 'verificando'){
    return <CheckingAuth />
  }

  return (
    <Routes>

        {/*Login y registro*/}
        <Route path='auth/*' element={ <AuthRoutes />}/>

        {/*Journal  */}
        <Route path='/*' element={<JournalRoutes/> }/>

    </Routes>
  )
}
