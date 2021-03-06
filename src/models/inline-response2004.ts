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


import { Cable } from './cable';

/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2004
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2004
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Cable>}
     * @memberof InlineResponse2004
     */
    results: Array<Cable>;
}


