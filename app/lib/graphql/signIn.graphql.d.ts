/* b3aedfa060236ab471475ab320bbae4d634b9bb3
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Mongo object id scalar type */
    ObjectId: any;
};
export declare type AuthInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    addStream: Stream;
    deleteStream: Scalars['Boolean'];
    editStream: Stream;
    login: UserResponse;
    register: UserResponse;
};
export declare type MutationAddStreamArgs = {
    input: StreamInput;
};
export declare type MutationDeleteStreamArgs = {
    streamId: Scalars['ObjectId'];
};
export declare type MutationEditStreamArgs = {
    input: StreamInput;
};
export declare type MutationLoginArgs = {
    input: AuthInput;
};
export declare type MutationRegisterArgs = {
    input: AuthInput;
};
export declare type Query = {
    __typename?: 'Query';
    currentUser?: Maybe<User>;
    stream?: Maybe<Stream>;
    streams: Array<Stream>;
    user?: Maybe<User>;
};
export declare type QueryStreamArgs = {
    streamId: Scalars['ObjectId'];
};
export declare type QueryUserArgs = {
    userId: Scalars['ObjectId'];
};
export declare type Stream = {
    __typename?: 'Stream';
    _id: Scalars['ObjectId'];
    author: User;
    description: Scalars['String'];
    title: Scalars['String'];
    url: Scalars['String'];
};
export declare type StreamInput = {
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ObjectId']>;
    title: Scalars['String'];
    url: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    _id: Scalars['ObjectId'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type UserResponse = {
    __typename?: 'UserResponse';
    token?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
};
export declare type SignInMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type SignInMutation = ({
    __typename?: 'Mutation';
} & {
    login: ({
        __typename?: 'UserResponse';
    } & Pick<UserResponse, 'token'> & {
        user?: Maybe<({
            __typename?: 'User';
        } & Pick<User, '_id' | 'email'>)>;
    });
});
export declare const SignInDocument: Apollo.DocumentNode;
export declare type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export declare function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>): Apollo.MutationTuple<SignInMutation, Exact<{
    email: string;
    password: string;
}>>;
export declare type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export declare type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export declare type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
