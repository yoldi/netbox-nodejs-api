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


import { VLAN } from './vlan';

/**
 * 
 * @export
 * @interface InlineResponse20053
 */
export interface InlineResponse20053 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20053
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20053
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20053
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<VLAN>}
     * @memberof InlineResponse20053
     */
    results: Array<VLAN>;
}


