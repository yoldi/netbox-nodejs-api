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


import { RIR } from './rir';

/**
 * 
 * @export
 * @interface InlineResponse20048
 */
export interface InlineResponse20048 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20048
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20048
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20048
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RIR>}
     * @memberof InlineResponse20048
     */
    results: Array<RIR>;
}


