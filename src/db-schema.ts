import { DBSchema } from '@ngrx/db';

const schema: DBSchema = {
  version: 1,
  name: 'books_demo',
  stores: {
    books: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};


export default schema;
