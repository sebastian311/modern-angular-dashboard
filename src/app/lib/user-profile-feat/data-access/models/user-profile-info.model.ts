type Gender = "Male" | "Female" | "Other";

export interface UserProfileInformation {
    name: string,
    email: string,
    age: number,
    favCity: string,
    gender: Gender;
    interests: string
}