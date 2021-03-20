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


import { Role } from './role';

/**
 * 
 * @export
 * @interface InlineResponse20049
 */
export interface InlineResponse20049 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20049
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20049
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20049
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Role>}
     * @memberof InlineResponse20049
     */
    results: Array<Role>;
}

