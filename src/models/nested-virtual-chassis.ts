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


import { NestedDevice } from './nested-device';

/**
 * 
 * @export
 * @interface NestedVirtualChassis
 */
export interface NestedVirtualChassis {
    /**
     * 
     * @type {number}
     * @memberof NestedVirtualChassis
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NestedVirtualChassis
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NestedVirtualChassis
     */
    url?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof NestedVirtualChassis
     */
    master: NestedDevice;
    /**
     * 
     * @type {number}
     * @memberof NestedVirtualChassis
     */
    member_count?: number;
}


