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


import { NestedDeviceType } from './nested-device-type';

/**
 * 
 * @export
 * @interface DeviceBayTemplate
 */
export interface DeviceBayTemplate {
    /**
     * 
     * @type {number}
     * @memberof DeviceBayTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DeviceBayTemplate
     */
    url?: string;
    /**
     * 
     * @type {NestedDeviceType}
     * @memberof DeviceBayTemplate
     */
    device_type: NestedDeviceType;
    /**
     * 
     * @type {string}
     * @memberof DeviceBayTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof DeviceBayTemplate
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceBayTemplate
     */
    description?: string;
}

