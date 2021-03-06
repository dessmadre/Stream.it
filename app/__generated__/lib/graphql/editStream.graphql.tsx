/* d85763bfc0c4d69735e99c97094e42c220a87161
 * This file is automatically generated by graphql-let. */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo object id scalar type */
  ObjectId: any;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStream: Stream;
  deleteStream: Scalars['Boolean'];
  editStream: Stream;
  login: UserResponse;
  register: UserResponse;
};


export type MutationAddStreamArgs = {
  input: StreamInput;
};


export type MutationDeleteStreamArgs = {
  streamId: Scalars['ObjectId'];
};


export type MutationEditStreamArgs = {
  input: StreamInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRegisterArgs = {
  input: AuthInput;
};


export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  user?: Maybe<User>;
};


export type QueryStreamArgs = {
  streamId: Scalars['ObjectId'];
};


export type QueryUserArgs = {
  userId: Scalars['ObjectId'];
};

export type Stream = {
  __typename?: 'Stream';
  _id: Scalars['ObjectId'];
  author: User;
  description: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type StreamInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ObjectId']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type EditStreamMutationVariables = Exact<{
  input: StreamInput;
}>;


export type EditStreamMutation = (
  { __typename?: 'Mutation' }
  & { editStream: (
    { __typename?: 'Stream' }
    & Pick<Stream, '_id' | 'title' | 'description' | 'url'>
  ) }
);


export const EditStreamDocument = gql`
    mutation EditStream($input: StreamInput!) {
  editStream(input: $input) {
    _id
    title
    description
    url
  }
}
    `;
export type EditStreamMutationFn = Apollo.MutationFunction<EditStreamMutation, EditStreamMutationVariables>;

/**
 * __useEditStreamMutation__
 *
 * To run a mutation, you first call `useEditStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editStreamMutation, { data, loading, error }] = useEditStreamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditStreamMutation(baseOptions?: Apollo.MutationHookOptions<EditStreamMutation, EditStreamMutationVariables>) {
        return Apollo.useMutation<EditStreamMutation, EditStreamMutationVariables>(EditStreamDocument, baseOptions);
      }
export type EditStreamMutationHookResult = ReturnType<typeof useEditStreamMutation>;
export type EditStreamMutationResult = Apollo.MutationResult<EditStreamMutation>;
export type EditStreamMutationOptions = Apollo.BaseMutationOptions<EditStreamMutation, EditStreamMutationVariables>;