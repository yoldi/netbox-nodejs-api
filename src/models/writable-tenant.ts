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


import { NestedTag } from './nested-tag';

/**
 * 
 * @export
 * @interface WritableTenant
 */
export interface WritableTenant {
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    slug: string;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    group?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableTenant
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableTenant
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableTenant
     */
    last_updated?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    circuit_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    device_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    ipaddress_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    prefix_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    rack_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    site_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    virtualmachine_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    vlan_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    vrf_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableTenant
     */
    cluster_count?: number;
}

