import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'

const App = () => {

    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
