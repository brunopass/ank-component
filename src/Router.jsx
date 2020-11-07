import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Landing from './pages/Landing'


const Router = () => {
    return(
        <BrowserRouter>
            <Landing/>
        </BrowserRouter>
    )
}

export default Router