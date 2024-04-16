class UserProfile {
    constructor(username, email, birthdate) {
        this._username = username;
        this._email = email;
        this._birthdate = birthdate;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        if (typeof value !== 'string' || value === '') {
            throw new Error('Invalid username.');
        }
        this._username = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (!value.includes('@')) {
            throw new Error('Invalid email.');
        }
        this._email = value;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(value) {
        if (!Date.parse(value)) {
            throw new Error('Invalid birthdate.');
        }
        this._birthdate = value;
    }
}