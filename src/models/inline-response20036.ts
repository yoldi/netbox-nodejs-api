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


import { VirtualChassis } from './virtual-chassis';

/**
 * 
 * @export
 * @interface InlineResponse20036
 */
export interface InlineResponse20036 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20036
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20036
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20036
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<VirtualChassis>}
     * @memberof InlineResponse20036
     */
    results: Array<VirtualChassis>;
}

