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


import { Interface } from './interface';

/**
 * 
 * @export
 * @interface InlineResponse20018
 */
export interface InlineResponse20018 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20018
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20018
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20018
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Interface>}
     * @memberof InlineResponse20018
     */
    results: Array<Interface>;
}


