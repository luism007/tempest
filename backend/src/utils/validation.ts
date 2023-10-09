export const isEmailValid = (email: string) => {
    return email && email.includes('@');
}

export const isPasswordValid = (password: string) => {
    return password.length >= 13;
}