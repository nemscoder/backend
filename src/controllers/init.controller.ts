import * as fs from 'fs'
import * as path from 'path'

function readFile(fileSrc: string) {
    const fileContents = fs.readFileSync(
      path.join(__dirname, fileSrc),
      {
        encoding: 'utf-8',
      },
    )
  
    return fileContents
}

interface Driver {
    id: number,
    code: string,
    firstname: string,
    lastname: string,
    country: string,
    team: string,
    place: number,
}

export default function loadDriversData () {
    console.log('reading drivers file...')
    const driversSource = readFile('../datasource/drivers.json')
    const drivers = driversSource ? JSON.parse(driversSource) : null
    const placesCount = drivers.length

    console.log('placesCount:', placesCount)

    if(drivers) drivers.map((item : Driver) => item.place = 15)

    globalThis.drivers = drivers
}

declare global {
    // eslint-disable-next-line no-var
    var drivers: object
}
