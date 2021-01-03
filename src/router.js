import React from 'react'
import Pages from './pages'
import {Route, Switch, Redirect} from 'react-router-dom'

const Router = ()=> {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp} />
                <Route path='/weather' component={Pages.Weather} />
                <Redirect from='*' to='login' component={Pages.Login}/>
            </Switch>
        </React.Suspense>
    )
}

export default Router