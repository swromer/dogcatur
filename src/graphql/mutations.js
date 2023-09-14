/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDog = /* GraphQL */ `
  mutation CreateDog(
    $input: CreateDogInput!
    $condition: ModelDogConditionInput
  ) {
    createDog(input: $input, condition: $condition) {
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
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
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
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
