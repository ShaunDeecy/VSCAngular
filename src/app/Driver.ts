export interface Driver{
    id: number;
    FirstName: string;
    LastName: string,
    Street: string,
    City: string,
    PostalCode: string,
    DateOfBirth: Date,
    NationalInsuranceNumber: string,
    LicenseType : string,
    isDeleted: boolean,
}