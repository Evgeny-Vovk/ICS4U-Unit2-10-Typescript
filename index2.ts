/*
 * This program runs with the vehicle class.
 *
 * @author  Evgeny Vovk
 * @version 1.0
 * @since   2024-05-08
 */

import { Truck } from "./Truck"
import { Bike } from "./Bike"
import { Vehicle } from "./Vehicle"

const car = new Vehicle('Black', 200)

console.log('Created car.\nStatus:\n')
car.status()

console.log('\nDone.')
