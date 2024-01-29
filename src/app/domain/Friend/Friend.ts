
export class Friend {
    public readonly id: number;
    public readonly name: string;
    public readonly lastname: string;

    constructor(id: number, name: string, lastname: string) {
        if (!isIdValid(id)) {
            throw new Error('Invalid Id');
        }

        if (!isNameValid(name)) {
            throw new Error('Invalid Name');
        }

        if (!isLastnameValid(lastname)) {
            throw new Error('Invalid Lastname');
        }

        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
}

function isIdValid(id: number) {
    return id > 0
}

function isNameValid(name: string) {
    return name.length > 0
}

function isLastnameValid(lastname: string) {
    return lastname.length > 0
}
