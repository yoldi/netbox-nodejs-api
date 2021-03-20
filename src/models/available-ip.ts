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
 * @interface AvailableIP
 */
export interface AvailableIP {
    /**
     * 
     * @type {number}
     * @memberof AvailableIP
     */
    family?: number;
    /**
     * 
     * @type {string}
     * @memberof AvailableIP
     */
    address?: string;
    /**
     * 
     * @type {NestedVRF}
     * @memberof AvailableIP
     */
    vrf?: NestedVRF | null;
}


