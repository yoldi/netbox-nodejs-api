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


import { PowerOutletTemplate } from './power-outlet-template';

/**
 * 
 * @export
 * @interface InlineResponse20024
 */
export interface InlineResponse20024 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20024
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20024
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20024
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<PowerOutletTemplate>}
     * @memberof InlineResponse20024
     */
    results: Array<PowerOutletTemplate>;
}


