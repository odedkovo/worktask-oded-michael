import axios from 'axios';
import { storageService } from './async-storage.service.js';
import { loadFromStorage, saveToStorage } from './storage.service.js';
// import { utilService } from './util.service';
import { httpService } from './http.service.js';

const STORAGE_KEY_BOARD = 'board';

export const CrudlService = {
  query,
  getById,
  save,
  remove,
  update,
};

// If you want to use full crudl with storage use async storage service
// If you want to use only load from storage and save to storage use storage service

// const testObjects = [
//   { name: 'oded', age: 23 },
//   { name: 'galia', age: 21 },
//   { name: 'eyal', age: 55 },
//   { name: 'adva', age: 53 },
//   { name: 'alma', age: 14 },
// ];

async function query() {
  console.log('in query');
  // let boards = await storageService.query('board');
  const users = await httpService.get(`market`);
  // console.log(boards);
  return users;
  // return testObjects;
}

async function getById(boardId) {
  // console.log(boardId);
  // const board = await storageService.get('board', boardId);
  const board = await httpService.get(`board/${boardId}`);
  return board;
}

async function save(user) {
  // const emptyBoard = _getEmptyBoard(board);
  // TODO to make a function that creates an empty object
  const savedUser = await httpService.post('market', user);
  console.log(savedUser);
  console.log('saving..');
  return 'saved';
}

async function update(board) {
  return await httpService.put(`board/${board._id}`, board);
}

async function remove(boardId) {
  // return storageService.remove('board', boardId);
  return await httpService.delete(`board/${boardId}`);
}
