export interface Trip {
    route: any
    startingPoint: string
    endingPoint: string
    price: number
    vehicleId: string
    transactionIds: string[]
    waypoints: string[]
    currentState: 1 | 2 | 3
};