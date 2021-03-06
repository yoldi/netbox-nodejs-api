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


import { CustomField } from './custom-field';

/**
 * 
 * @export
 * @interface InlineResponse20039
 */
export interface InlineResponse20039 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20039
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20039
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20039
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<CustomField>}
     * @memberof InlineResponse20039
     */
    results: Array<CustomField>;
}


