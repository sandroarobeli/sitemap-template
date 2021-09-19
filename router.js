// Third party modules
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// export default () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path='/' />
//                 <Route path='/red' />
//                 <Route path='/orange' />
//                 <Route path='/yellow' />
//                 <Route path='/green' />
//                 <Route path='/blue' />
//                 <Route path='/violet' />
//             </Switch>
//         </Router>
//     )
// }

export default (
    <Router>
     <Route path="/" />
     <Route path="/red" />
     <Route path="/orange" />
     <Route path='/yellow' />
     <Route path='/green' />
     <Route path='/blue' />
     <Route path='/violet' />
    </Router>
   )

