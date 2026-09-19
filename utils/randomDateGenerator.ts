// create a unique valuefor test data such as emplyee email
 
export function generateUniqueId(): string{
    return `${Date.now()} ${Math.floor(Math.random() * 1000)}`;
}
export function generateRandomFirstName():string{
    const names = ['Asha','David','Meera','Rani'];
    return names[Math.floor(Math.random() * names.length)];
 
}
 
export function generateRandomUsername(firstName:string): string {
    return `${firstName.toLowerCase()}_${generateUniqueId()}`;
}
 
export function generateRandomEmail(
    firstName:string,
    domain: string ='example.com'): string{
    return `$(firstName.toLowerCase()}_${generateUniqueId()}@${domain}`;
}
 
 