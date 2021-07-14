export interface UserInterface {

}

export interface RequestSignUpUserInterface {
    username: string;
    email: string;
    password: string;
    birthDate: string;
    sex: 0 | 1 | 2;
}

export interface RequestLogInUserInterface {
    email: string;
    password: string;
}