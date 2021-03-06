/* d25163585dd750f55c6e6cbc65d31b98ab8adc82
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
export declare type StreamQueryVariables = Exact<{
    streamId: Scalars['ObjectId'];
}>;
export declare type StreamQuery = ({
    __typename?: 'Query';
} & {
    stream?: Maybe<({
        __typename?: 'Stream';
    } & Pick<Stream, '_id' | 'title' | 'description' | 'url'> & {
        author: ({
            __typename?: 'User';
        } & Pick<User, '_id' | 'email'>);
    })>;
});
export declare const StreamDocument: Apollo.DocumentNode;
/**
 * __useStreamQuery__
 *
 * To run a query within a React component, call `useStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamQuery({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export declare function useStreamQuery(baseOptions: Apollo.QueryHookOptions<StreamQuery, StreamQueryVariables>): Apollo.QueryResult<StreamQuery, Exact<{
    streamId: any;
}>>;
export declare function useStreamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StreamQuery, StreamQueryVariables>): Apollo.QueryTuple<StreamQuery, Exact<{
    streamId: any;
}>>;
export declare type StreamQueryHookResult = ReturnType<typeof useStreamQuery>;
export declare type StreamLazyQueryHookResult = ReturnType<typeof useStreamLazyQuery>;
export declare type StreamQueryResult = Apollo.QueryResult<StreamQuery, StreamQueryVariables>;
