export class Alumno {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    // public age: number,
    public aprove: boolean,
    public birthdate: Date,
    public course: String
  ) {}

  get fullName(): String {
    return this.firstName + ' ' + this.lastName;
  }
}
