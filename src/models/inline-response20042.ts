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


import { JobResult } from './job-result';

/**
 * 
 * @export
 * @interface InlineResponse20042
 */
export interface InlineResponse20042 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20042
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20042
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20042
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<JobResult>}
     * @memberof InlineResponse20042
     */
    results: Array<JobResult>;
}


