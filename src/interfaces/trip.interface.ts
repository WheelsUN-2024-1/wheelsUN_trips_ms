export interface Trip {
    driverId: number
    startingPoint: string
    endingPoint: string
    passengerIds: number[]
    waypoints: string[]
    route: any
    price: number,
    vehicleId: number
    transactionIds: number[]
    currentState: string
};