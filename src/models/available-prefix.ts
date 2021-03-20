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


import { NestedVRF } from './nested-vrf';

/**
 * 
 * @export
 * @interface AvailablePrefix
 */
export interface AvailablePrefix {
    /**
     * 
     * @type {number}
     * @memberof AvailablePrefix
     */
    family?: number;
    /**
     * 
     * @type {string}
     * @memberof AvailablePrefix
     */
    prefix?: string;
    /**
     * 
     * @type {NestedVRF}
     * @memberof AvailablePrefix
     */
    vrf?: NestedVRF | null;
}


