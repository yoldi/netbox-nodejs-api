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


import { Prefix } from './prefix';

/**
 * 
 * @export
 * @interface InlineResponse20047
 */
export interface InlineResponse20047 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20047
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20047
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Prefix>}
     * @memberof InlineResponse20047
     */
    results: Array<Prefix>;
}


