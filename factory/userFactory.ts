import { generateRandomEmail,generateRandomUsername,generateRandomFirstName } from "../utils/randomDateGenerator";
export interface user{
    firstName: string;
    lastName: string;
    username: string;
    email:string;
    password: string
}
export function  createUser(): user{
    const firstName = generateRandomFirstName();
    return{
        firstName: firstName,
        lastName: 'Test',
        username: generateRandomUsername(firstName),
        email:generateRandomEmail(firstName),
        password: 'Password123!'
    };
}