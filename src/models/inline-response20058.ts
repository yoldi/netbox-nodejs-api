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


import { Tenant } from './tenant';

/**
 * 
 * @export
 * @interface InlineResponse20058
 */
export interface InlineResponse20058 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20058
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20058
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20058
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Tenant>}
     * @memberof InlineResponse20058
     */
    results: Array<Tenant>;
}


