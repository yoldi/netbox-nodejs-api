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


import { ConfigContext } from './config-context';

/**
 * 
 * @export
 * @interface InlineResponse20037
 */
export interface InlineResponse20037 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20037
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20037
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20037
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ConfigContext>}
     * @memberof InlineResponse20037
     */
    results: Array<ConfigContext>;
}


