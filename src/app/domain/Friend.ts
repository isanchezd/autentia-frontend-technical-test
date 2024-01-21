
export class Friend {
  public readonly id: number;
  public readonly name: string;
  public readonly lastname: string;

  constructor(id: number, name: string, lastname: string) {
    if (!isNameValid(name)) {
			throw new Error('The name is required');
		}

    if(!isLastnameValid(lastname)) {
      throw new Error('The lastname is required');
    }

    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }
}

function isNameValid(name: string) {
  return name.length > 0
}

function isLastnameValid(lastname: string) {
  return lastname.length > 0
}
