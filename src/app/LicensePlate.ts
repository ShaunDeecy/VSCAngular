export interface LicensePlate {
    id: number;
    plateName: string;
    startDate: Date,
    endDate: Date,
    vehicle : object,
    isDeleted: boolean
  }
  