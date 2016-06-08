import 'rxjs/add/operator/let';
import { of } from 'rxjs/observable/of';
import { BookActions } from '../../src/actions/book';
import booksReducer, * as fromBooks from '../../src/reducers/books';
import { TestBook } from '../fixtures/books';

describe('Books', function() {
  const bookActions = new BookActions();

  describe('Reducer', function() {
    it('should have an empty initial state', function() {
      const initialState = booksReducer(undefined, { type: 'test-action' });

      expect(initialState.ids).toEqual([]);
      expect(initialState.entities).toEqual({});
    });

    it('should add a book to the entities table and its ID to the IDs list when loaded', function() {
      const action = bookActions.loadBook(TestBook);
      const state = booksReducer(undefined, action);

      expect(state.ids).toEqual([ TestBook.id ]);
      expect(state.entities[TestBook.id]).toBe(TestBook);
    });
  });

  describe('Selectors', function() {
    describe('getBookEntities', function() {
      it('should get the entities table out of the books state', function() {
        const state = booksReducer(undefined, { type: 'test-action' });

        of(state).let(fromBooks.getBookEntities()).subscribe(entities => {
          expect(entities).toBe(state.entities);
        });
      });
    });

    describe('getBook', function() {
      it('should get a selected book out of the books state', function() {
        const state: fromBooks.BooksState = {
          entities: {
            [TestBook.id]: TestBook
          },
          ids: [ TestBook.id ]
        };

        of(state).let(fromBooks.getBook(TestBook.id)).subscribe(book => {
          expect(book).toBe(TestBook);
        });
      });
    });

    describe('getBooks', function() {
      it('should return all of the books in an array for a given list of ids', function() {
        const state: fromBooks.BooksState = {
          entities: {
            [TestBook.id]: TestBook
          },
          ids: [ TestBook.id ]
        };

        of(state).let(fromBooks.getBooks([ TestBook.id ])).subscribe(books => {
          expect(books).toEqual([ TestBook ]);
        });
      });
    });
  });
});
