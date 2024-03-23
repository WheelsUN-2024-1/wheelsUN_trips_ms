export interface Trip {
    route: any
    startingPoint: string
    endingPoint: string
    driverId: number
    price: number
    vehicleId: number
    transactionIds: number[]
    waypoints: string[]
    currentState: 1 | 2 | 3
};