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


import { Tag } from './tag';

/**
 * 
 * @export
 * @interface InlineResponse20044
 */
export interface InlineResponse20044 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20044
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20044
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20044
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof InlineResponse20044
     */
    results: Array<Tag>;
}


