
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email: string;
    password: string;
    nickname: string;
    phone: string;
    gender: string;
}

export interface User {
    email?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    phone?: Nullable<string>;
    gender?: Nullable<string>;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUserByEmail(email: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    addUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
