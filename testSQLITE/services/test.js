import { db } from '../connetionDB/connect';

const table = "animal";

export const addData = (name) => {
  console.warn(name)
  return new Promise((resolve, reject) => db.transaction(
    tx => {
      tx.executeSql(`insert into ${table} (nome) 
              values (?)`,
        [name],
        (_, { insertId, rows }) => {
          resolve(insertId)
        }), (sqlError) => {
          console.log(sqlError);
        }
    }, (txError) => {
      console.log(txError);
    }));
}

export const findAll = () => {
  return new Promise((resolve, reject) => db.transaction(tx => {
    tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
      console.log(rows)
      resolve(rows)
    }), (sqlError) => {
      console.log(sqlError);
    }
  }, (txError) => {
    console.log(txError);
  }))
}
