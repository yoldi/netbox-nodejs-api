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
 * @interface WritablePrefix
 */
export interface WritablePrefix {
    /**
     * 
     * @type {number}
     * @memberof WritablePrefix
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritablePrefix
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritablePrefix
     */
    family?: string;
    /**
     * IPv4 or IPv6 network with mask
     * @type {string}
     * @memberof WritablePrefix
     */
    prefix: string;
    /**
     * 
     * @type {number}
     * @memberof WritablePrefix
     */
    site?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritablePrefix
     */
    vrf?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritablePrefix
     */
    tenant?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritablePrefix
     */
    vlan?: number | null;
    /**
     * Operational status of this prefix
     * @type {string}
     * @memberof WritablePrefix
     */
    status?: WritablePrefixStatusEnum;
    /**
     * The primary function of this prefix
     * @type {number}
     * @memberof WritablePrefix
     */
    role?: number | null;
    /**
     * All IP addresses within this prefix are considered usable
     * @type {boolean}
     * @memberof WritablePrefix
     */
    is_pool?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WritablePrefix
     */
    description?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritablePrefix
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritablePrefix
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritablePrefix
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritablePrefix
     */
    last_updated?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritablePrefixStatusEnum {
    Container = 'container',
    Active = 'active',
    Reserved = 'reserved',
    Deprecated = 'deprecated'
}



