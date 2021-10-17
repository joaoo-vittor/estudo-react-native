import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('test.db');

const sql = [
  // `DROP TABLE IF EXISTS animal;`,
  // `DROP TABLE IF EXISTS gato;`,
  // `DROP TABLE IF EXISTS cachorro;`,

  `create table if not exists animal (
    id integer primary key autoincrement,
    nome text
  );`
];

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

db.transaction(
  tx => {
    for (var i = 0; i < sql.length; i++) {
      tx.executeSql(sql[i]);
    }
  }, (error) => {
    console.log(error);
  }
);

export { db }