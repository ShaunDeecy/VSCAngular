//User data for login/register
//import { Driver } from "./Driver";
export interface UserProfile{
    id: number;
    Email: string;
    Password: string,
    Username: string,
    isDeleted: boolean,
    DriverId: number
   // Driver : Driver,
}