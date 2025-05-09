/* eslint-disable @typescript-eslint/no-base-to-string */
import { UserCreatedAt } from './UserCreatedAt';
import { UserEmail } from './UserEmail';
import { UserId } from './UserId';
import { UserName } from './UserName';

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt: UserCreatedAt;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createdAt: UserCreatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }

  public nameAndEmail() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${this.name} - ${this.email}`;
  }
}
