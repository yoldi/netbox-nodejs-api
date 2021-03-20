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



/**
 * 
 * @export
 * @interface NestedDeviceRole
 */
export interface NestedDeviceRole {
    /**
     * 
     * @type {number}
     * @memberof NestedDeviceRole
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NestedDeviceRole
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof NestedDeviceRole
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NestedDeviceRole
     */
    slug: string;
    /**
     * 
     * @type {number}
     * @memberof NestedDeviceRole
     */
    device_count?: number;
    /**
     * 
     * @type {number}
     * @memberof NestedDeviceRole
     */
    virtualmachine_count?: number;
}


