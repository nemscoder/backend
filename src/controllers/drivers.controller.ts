import { Request, Response } from 'express'

const getAllDrivers = async (req: Request, res: Response) => {
    res.status(200).send(global.drivers)
}

export default getAllDrivers
