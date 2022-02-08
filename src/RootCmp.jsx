import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imgBg from '../src/bg.jpg'
import { AppHeader } from './cmps/AppHeader.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { SecondPage } from './pages/SecondPage.jsx';
import { UserList } from './pages/UserList.jsx';

export function RootCmp() {
  return (
    <section>
      <BrowserRouter>
        <AppHeader />
        <main className='main-app'>
          <img className='bg-img' src={imgBg} alt="background image" />
          <Routes>
            <Route path='/userlist' element={<UserList />} />
            <Route path='/secondpage' element={<SecondPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
