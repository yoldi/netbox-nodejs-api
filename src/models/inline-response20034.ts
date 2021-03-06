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


import { Region } from './region';

/**
 * 
 * @export
 * @interface InlineResponse20034
 */
export interface InlineResponse20034 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20034
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20034
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20034
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Region>}
     * @memberof InlineResponse20034
     */
    results: Array<Region>;
}


