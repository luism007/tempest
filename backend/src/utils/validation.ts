import { compare } from "bcrypt";
export const validEmailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.(com|net|io|co)$/);

export const isEmailValid = (email: string) => {
    return (email.match(validEmailPattern) !== null ? true : false);
}

export const isPasswordValid = (password: string, storedPassword: string) => {
   return compare(password, storedPassword);
}