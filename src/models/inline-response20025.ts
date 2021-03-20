/* tslint:disable */
/* eslint-disable */
/**
 * NetBox API
 * API to access NetBox
 *
 * The version of the OpenAPI document: 2.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PowerOutlet } from './power-outlet';

/**
 * 
 * @export
 * @interface InlineResponse20025
 */
export interface InlineResponse20025 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20025
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20025
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20025
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<PowerOutlet>}
     * @memberof InlineResponse20025
     */
    results: Array<PowerOutlet>;
}


