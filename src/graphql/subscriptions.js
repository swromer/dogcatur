/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateDog = /* GraphQL */ `
  subscription OnCreateDog($filter: ModelSubscriptionDogFilterInput) {
    onCreateDog(filter: $filter) {
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
export const onUpdateDog = /* GraphQL */ `
  subscription OnUpdateDog($filter: ModelSubscriptionDogFilterInput) {
    onUpdateDog(filter: $filter) {
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
export const onDeleteDog = /* GraphQL */ `
  subscription OnDeleteDog($filter: ModelSubscriptionDogFilterInput) {
    onDeleteDog(filter: $filter) {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onCreateIngredient(filter: $filter) {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onUpdateIngredient(filter: $filter) {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onDeleteIngredient(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      tag
      id
      createdAt
      updatedAt
      productTagsId
      __typename
    }
  }
`;
