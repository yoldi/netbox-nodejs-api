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


import { ConsoleServerPortTemplate } from './console-server-port-template';

/**
 * 
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2007
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2007
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2007
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ConsoleServerPortTemplate>}
     * @memberof InlineResponse2007
     */
    results: Array<ConsoleServerPortTemplate>;
}


