export const saveProfileFormInLocalStorage = (updatedData) => {
    const currentData = localStorage.getItem('profileForm');
    if (currentData !== null) { 
        const parsed = JSON.parse(currentData);
        const newData = {...parsed, ...updatedData};
        localStorage.setItem('profileForm', JSON.stringify(newData));
    } else { 
        const stringified = JSON.stringify(updatedData);
        localStorage.setItem('profileForm', stringified);
    }
}
export const getProfileFormItem = (field: string, currentForm) => {
    const profileForm = localStorage.getItem('profileForm');
    if (profileForm !== null) { 
        const form  = JSON.parse(profileForm);
        return form[field];
    } else { 
        return currentForm[field];
    }
}