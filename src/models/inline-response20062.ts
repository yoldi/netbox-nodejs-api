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


import { ClusterGroup } from './cluster-group';

/**
 * 
 * @export
 * @interface InlineResponse20062
 */
export interface InlineResponse20062 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20062
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20062
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20062
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ClusterGroup>}
     * @memberof InlineResponse20062
     */
    results: Array<ClusterGroup>;
}


