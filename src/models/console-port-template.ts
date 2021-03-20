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
import { Type } from './type';

/**
 * 
 * @export
 * @interface ConsolePortTemplate
 */
export interface ConsolePortTemplate {
    /**
     * 
     * @type {number}
     * @memberof ConsolePortTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConsolePortTemplate
     */
    url?: string;
    /**
     * 
     * @type {NestedDeviceType}
     * @memberof ConsolePortTemplate
     */
    device_type: NestedDeviceType;
    /**
     * 
     * @type {string}
     * @memberof ConsolePortTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof ConsolePortTemplate
     */
    label?: string;
    /**
     * 
     * @type {Type}
     * @memberof ConsolePortTemplate
     */
    type?: Type;
    /**
     * 
     * @type {string}
     * @memberof ConsolePortTemplate
     */
    description?: string;
}


