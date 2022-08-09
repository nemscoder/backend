import getAllDrivers from "../controllers/drivers.controller"

const routesConfig = function (app: any) {
    app.get('/api/drivers', [
        getAllDrivers
    ])
    app.post('/api/drivers/:driverId/overtake', [
        // @TODO: set fn in controller
    ])
}

export default routesConfig
