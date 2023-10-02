import { gql } from '@apollo/client';


export const SAVE_USER = gql`
  mutation SaveUser($name: String!, $email: String!, $password: String!) {
    saveUser(name: $name, email: $email, password: $password) {
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        email
        bookCount
        password
        savedBooks
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      password
      bookCount
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      bookCount
      savedBooks
    }
  }
`;
