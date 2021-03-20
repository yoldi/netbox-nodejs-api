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


import { VRF } from './vrf';

/**
 * 
 * @export
 * @interface InlineResponse20054
 */
export interface InlineResponse20054 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20054
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20054
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20054
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<VRF>}
     * @memberof InlineResponse20054
     */
    results: Array<VRF>;
}

