import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CrudlService } from '../services/crudl.service.js';
import {
  loadItems,
  addItems,
  updateItems,
  removeItems,
} from '../store/item.action.js';

export function HomePage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({ items: state.itemModule.items }));

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    // console.log('you are in load product in home page ');
    dispatch(loadItems());
  };

  if (!items) return <div>loading...</div>;
  return (
    <section className='home-page'>
      <h1>homepage</h1>
      <section className='slide-in-br grid-list flex-center'>
        {items.map((item) => {
          return <article className='item-preview'>{item.name}</article>;
        })}
      </section>
    </section>
  );
}
