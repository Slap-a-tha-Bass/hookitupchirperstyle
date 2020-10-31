import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chirper from './pages/Chirper'
import Navbar from './components/Navbar'
import Stories from './pages/Stories'
import ViewUser from './pages/ViewUser'


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Chirper />
                </Route>
                <Route exact path="/stories">
                    <Stories />
                </Route>
                <Route exact path="/users/:id">
                    <ViewUser />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;