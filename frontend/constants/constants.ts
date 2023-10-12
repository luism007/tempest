export const validPasswordPattern = new RegExp(/^(?=.*[A-Z])(?=.*[@#$!*_-])[A-Za-z0-9@#$!*_-]{13,}$/);
export const validEmailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.(com|net|io|co)$/);


export const missingSpecialCharacter = (value: string): boolean => {
    const regex = new RegExp(/^(.*[@#$!*_-].*)$/);
    return isNotFollowingRegex(value, regex);
}

export const notEnoughCharacters = (value: string): boolean => {
    const regex = new RegExp(/^([A-Za-z0-9@#$!*_-]){13,}$/);
    return isNotFollowingRegex(value, regex);
}

export const missingUppercaseChar = (value: string): boolean => {
    const regex = new RegExp(/^(.*[A-Z].*)$/);
    return isNotFollowingRegex(value, regex);
}

export const missingNumericChar = (value: string): boolean => {
    const regex = new RegExp(/^(.*[0-9].*)$/);
    return isNotFollowingRegex(value, regex);
}

export const isValidPassword = (password: string): boolean => {
    return isFollowingRegex(password, validPasswordPattern);
} 

export const isValidEmail = (email: string): boolean => {
    return isFollowingRegex(email, validEmailPattern);
}

export const isFollowingRegex = (value: string, regex: RegExp): boolean => {
    return (value.match(regex) !== null) ? true : false;
}
export const isNotFollowingRegex = (value: string, regex: RegExp): boolean => {
    return (value.match(regex) === null) ? true : false;
}