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


import { ConsolePortTemplate } from './console-port-template';

/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2006
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2006
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2006
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ConsolePortTemplate>}
     * @memberof InlineResponse2006
     */
    results: Array<ConsolePortTemplate>;
}


