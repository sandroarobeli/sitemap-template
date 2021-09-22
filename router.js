// Third party modules
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';



export default (
    <Switch>
     <Route path="/" />
     <Route path="/red" />
     <Route path="/orange" />
     <Route path='/yellow' />
     <Route path='/green' />
     <Route path='/blue' />
     <Route path='/violet' />
     <Route path='/users/:userId' />
     <Redirect to='/' />
    </Switch>
   )

