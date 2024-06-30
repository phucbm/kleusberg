import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;