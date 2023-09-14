/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      name
      email
      phone
      dogs {
        items {
          name
          image
          breed
          birthday
          id
          createdAt
          updatedAt
          userDogsId
          dogFriendsId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        email
        phone
        dogs {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
      name
      image
      breed
      birthday
      allergens {
        items {
          name
          id
          createdAt
          updatedAt
          dogAllergensId
          productIngredientsId
          __typename
        }
        nextToken
        __typename
      }
      friends {
        items {
          name
          image
          breed
          birthday
          id
          createdAt
          updatedAt
          userDogsId
          dogFriendsId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userDogsId
      dogFriendsId
      __typename
    }
  }
`;
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        image
        breed
        birthday
        allergens {
          nextToken
          __typename
        }
        friends {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        userDogsId
        dogFriendsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      name
      id
      createdAt
      updatedAt
      dogAllergensId
      productIngredientsId
      __typename
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
        dogAllergensId
        productIngredientsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      name
      description
      image
      size
      ingredients {
        items {
          name
          id
          createdAt
          updatedAt
          dogAllergensId
          productIngredientsId
          __typename
        }
        nextToken
        __typename
      }
      tags {
        items {
          tag
          id
          createdAt
          updatedAt
          productTagsId
          __typename
        }
        nextToken
        __typename
      }
      rating
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
        image
        size
        ingredients {
          nextToken
          __typename
        }
        tags {
          nextToken
          __typename
        }
        rating
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        tag
        id
        createdAt
        updatedAt
        productTagsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
