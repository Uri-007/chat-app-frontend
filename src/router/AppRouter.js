import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import { AuthContext } from '../auth/AuthContext'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {

  const {auth, verificaToken} = useContext(AuthContext);

  useEffect( () => {
    verificaToken();

  }, [verificaToken])

  if(auth.checking) {
    return  <div className="d-flex align-items-center">
              <strong>Cargando...</strong>
              <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
  }


  return (
    <Router>
        <div>
            <Switch>
                {/*<Route path="/auth" component={AuthRouter}/>*/}
                <PublicRouter isAuthenticated={auth.logged} path="/auth" component={AuthRouter}/>
                <PrivateRouter isAuthenticated={auth.logged} exact path="/" component={ChatPage}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    </Router>
  )
}
