/*
 * Truck class.
 *
 * @author  Evgeny Vovk
 * @version 1.0
 * @since   2024-05-07
 */
import { Vehicle } from "./Vehicle"


export class Truck extends Vehicle {
  // variables
  private LicensePlateNumber: string

  /*
  * Constructor.
  */
  constructor(color: String, maxSpeed: number, LicensePlateNumber: String) {
    super(color, maxSpeed)
    this.LicensePlateNumber = LicensePlateNumber
    this.numberOfTires = 6
  }

  /*
  * Gets the LicensePlateNumber.
  */
  public get LicensePlateNumber(): string {
    return this.LicensePlateNumber
  }

  /*
  * Sets the LicensePlateNumber.
  */
  public set LicensePlateNumber(value: String) {
    this.LicensePlateNumber = value
  }

  /*
  * The status method.
  */
  public status() {
    super.status()
    console.log(" -> License Plate: " + this.LicensePlateNumber)
  }

  /*
  * The break method.
  */
  public break(breakPower: number, breakTime: number, airPressure: number) {
    this.speed = this.speed - (breakPower * breakTime) - (airPressure * breakTime)
  }
}
