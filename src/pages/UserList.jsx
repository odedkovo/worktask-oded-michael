import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../store/item.action.js';

export function UserList() {
  //   const users = useSelector((state) => state);
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.itemModule);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    // console.log('you are in load product in home page ');
    dispatch(loadItems());
  };
  console.log(items);
  return (
    <section className='user-list'>
      <table border='10' cellSpacing='10' cellPadding='10'>
        <tbody>
          <tr>
            <th>Full name</th>
            <th>E-mail</th>
            <th>Website</th>
            <th>Experience</th>
            <th>BiggestCampaign</th>
            <th>Linkedin</th>
          </tr>

          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.experience}</td>
                <td>${item.biggestCampaign}</td>
                <td>{item.linkedin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
