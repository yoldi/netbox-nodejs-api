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


import { RackRole } from './rack-role';

/**
 * 
 * @export
 * @interface InlineResponse20030
 */
export interface InlineResponse20030 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20030
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20030
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20030
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RackRole>}
     * @memberof InlineResponse20030
     */
    results: Array<RackRole>;
}


