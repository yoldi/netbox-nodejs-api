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


import { CircuitTermination } from './circuit-termination';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<CircuitTermination>}
     * @memberof InlineResponse200
     */
    results: Array<CircuitTermination>;
}


