import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../services/google-books';

export class BookActions {
  static SEARCH = '[Book] Search';
  search(query: string): Action {
    return {
      type: BookActions.SEARCH,
      payload: query
    };
  }

  static SEARCH_COMPLETE = '[Book] Search Complete';
  searchComplete(results: Book[]): Action {
    return {
      type: BookActions.SEARCH_COMPLETE,
      payload: results
    };
  }

  static ADD_TO_COLLECTION = '[Book] Add to Collection';
  addToCollection(book: Book): Action {
    return {
      type: BookActions.ADD_TO_COLLECTION,
      payload: book
    };
  }

  static LOAD_COLLECTION = '[Book] Load Collection';
  loadCollection(): Action {
    return {
      type: BookActions.LOAD_COLLECTION
    };
  }

  static LOAD_COLLECTION_SUCCESS = '[Book] Load Collection Success';
  loadCollectionSuccess(books: Book[]): Action {
    return {
      type: BookActions.LOAD_COLLECTION_SUCCESS,
      payload: books
    };
  }
}
