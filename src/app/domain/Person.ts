
export class Person {
  public readonly id: number;
  public readonly name: string;
  public readonly lastname: string;
  public readonly avatar: string;

  constructor(id: number, name: string, lastname: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.avatar = avatar;
  }
}
