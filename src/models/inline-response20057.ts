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


import { TenantGroup } from './tenant-group';

/**
 * 
 * @export
 * @interface InlineResponse20057
 */
export interface InlineResponse20057 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20057
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20057
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20057
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<TenantGroup>}
     * @memberof InlineResponse20057
     */
    results: Array<TenantGroup>;
}


