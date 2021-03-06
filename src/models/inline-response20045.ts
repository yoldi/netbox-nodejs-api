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


import { Aggregate } from './aggregate';

/**
 * 
 * @export
 * @interface InlineResponse20045
 */
export interface InlineResponse20045 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20045
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Aggregate>}
     * @memberof InlineResponse20045
     */
    results: Array<Aggregate>;
}


