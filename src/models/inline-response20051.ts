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


import { Service } from './service';

/**
 * 
 * @export
 * @interface InlineResponse20051
 */
export interface InlineResponse20051 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20051
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20051
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20051
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Service>}
     * @memberof InlineResponse20051
     */
    results: Array<Service>;
}

