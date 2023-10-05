import {sign, verify} from 'jsonwebtoken';

const KEY = process.env.SIGN_KEY;

export const createJSONToken = (email: string) => {
    return sign({email}, KEY, { expiresIn: '1h'});
}

export const validateJSONToken = (token: string) => {
    return verify(token, KEY);
}