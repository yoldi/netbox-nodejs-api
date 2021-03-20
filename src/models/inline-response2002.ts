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


import { Circuit } from './circuit';

/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Circuit>}
     * @memberof InlineResponse2002
     */
    results: Array<Circuit>;
}

