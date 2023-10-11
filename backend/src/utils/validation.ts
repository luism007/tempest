import { compare } from "bcrypt";

export const isEmailValid = (email: string) => {
    return email && email.includes('@');
}

export const isPasswordValid = (password: string, storedPassword: string) => {
   return compare(password, storedPassword);
}