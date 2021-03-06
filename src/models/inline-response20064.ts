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


import { Cluster } from './cluster';

/**
 * 
 * @export
 * @interface InlineResponse20064
 */
export interface InlineResponse20064 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20064
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20064
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20064
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Cluster>}
     * @memberof InlineResponse20064
     */
    results: Array<Cluster>;
}


