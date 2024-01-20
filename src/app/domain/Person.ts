
export class Person {
  private readonly _name: string;
  private readonly _lastname: string;
  private readonly _avatar: string;

  constructor(name: string, lastname: string, avatar: string) {
    this._name = name;
    this._lastname = lastname;
    this._avatar = avatar;
  }

  get name(): string {
    return this._name;
  }

  get lastname(): string {
    return this._lastname;
  }

  get avatar(): string {
    return this._avatar;
  }
}
