import React, { useEffect } from 'react';
import './App.css';

import { AppDispatch, RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from './features/listings/listingsSlice';
import Listings from './features/listings/Listings';

import Logo from './images/property-flow-logo.jpg'
import Header from './components/Header';
import LoadingListings from './components/LoadingListings';
import Footer from './components/Footer';
import ErrorBlock from './components/ErrorBlock';


function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { status } = useSelector((state: RootState) => state.listings);

  useEffect(() => {
    dispatch(fetchListings());
  }, []);

  return (
    <div className="App">
      <Header />
      { status === 'idle' ? <Listings /> : status === "loading" ? <LoadingListings /> : <ErrorBlock /> }
      <Footer />
    </div>
  );
}

export default App;
