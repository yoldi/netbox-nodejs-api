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
import { NestedTag } from './nested-tag';

/**
 * 
 * @export
 * @interface DeviceBay
 */
export interface DeviceBay {
    /**
     * 
     * @type {number}
     * @memberof DeviceBay
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DeviceBay
     */
    url?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof DeviceBay
     */
    device: NestedDevice;
    /**
     * 
     * @type {string}
     * @memberof DeviceBay
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof DeviceBay
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceBay
     */
    description?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof DeviceBay
     */
    installed_device?: NestedDevice;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof DeviceBay
     */
    tags?: Array<NestedTag>;
}


