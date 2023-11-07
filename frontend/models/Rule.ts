class Rule { 
    required: boolean;
    validation: RegExp | null;

    constructor (
        _required: boolean,
        _validation: RegExp | null
    ) {
        this.required = _required;
        this.validation = _validation;
    }  
}