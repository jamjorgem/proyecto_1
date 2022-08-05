import { ROLES } from "./roles.enum";

export class User {
    userName = '';
    email = '';
    password = '';
    role = ROLES.User

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}