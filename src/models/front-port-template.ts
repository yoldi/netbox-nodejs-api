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
import { NestedRearPortTemplate } from './nested-rear-port-template';
import { Type1 } from './type1';

/**
 * 
 * @export
 * @interface FrontPortTemplate
 */
export interface FrontPortTemplate {
    /**
     * 
     * @type {number}
     * @memberof FrontPortTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FrontPortTemplate
     */
    url?: string;
    /**
     * 
     * @type {NestedDeviceType}
     * @memberof FrontPortTemplate
     */
    device_type: NestedDeviceType;
    /**
     * 
     * @type {string}
     * @memberof FrontPortTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof FrontPortTemplate
     */
    label?: string;
    /**
     * 
     * @type {Type1}
     * @memberof FrontPortTemplate
     */
    type: Type1;
    /**
     * 
     * @type {NestedRearPortTemplate}
     * @memberof FrontPortTemplate
     */
    rear_port: NestedRearPortTemplate;
    /**
     * 
     * @type {number}
     * @memberof FrontPortTemplate
     */
    rear_port_position?: number;
    /**
     * 
     * @type {string}
     * @memberof FrontPortTemplate
     */
    description?: string;
}


