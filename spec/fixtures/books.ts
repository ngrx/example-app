import { Book } from '../../src/models/book';


export const TestBook: Book = {
  id: '123',
  volumeInfo: {
    title: 'This is a test book',
    subtitle: 'Not a real book',
    authors: [ 'Mike Ryan' ],
    publisher: 'ngrx',
    publishDate: '06082016',
    description: 'This book is used for mocks in tests',
    averageRating: 3,
    ratingsCount: 10,
    imageLinks: {
      thumbnail: '/path/to/an/image.jpg',
      smallThumbnail: '/path/to/a/smaller/image.png'
    }
  }
};
