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


import { ClusterType } from './cluster-type';

/**
 * 
 * @export
 * @interface InlineResponse20063
 */
export interface InlineResponse20063 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20063
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20063
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20063
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ClusterType>}
     * @memberof InlineResponse20063
     */
    results: Array<ClusterType>;
}

