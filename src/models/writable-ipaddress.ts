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
 * @interface WritableIPAddress
 */
export interface WritableIPAddress {
    /**
     * 
     * @type {number}
     * @memberof WritableIPAddress
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    family?: string;
    /**
     * IPv4 or IPv6 address (with mask)
     * @type {string}
     * @memberof WritableIPAddress
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof WritableIPAddress
     */
    vrf?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableIPAddress
     */
    tenant?: number | null;
    /**
     * The operational status of this IP
     * @type {string}
     * @memberof WritableIPAddress
     */
    status?: WritableIPAddressStatusEnum;
    /**
     * The functional role of this IP
     * @type {string}
     * @memberof WritableIPAddress
     */
    role?: WritableIPAddressRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    assigned_object_type?: string | null;
    /**
     * 
     * @type {number}
     * @memberof WritableIPAddress
     */
    assigned_object_id?: number | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WritableIPAddress
     */
    assigned_object?: { [key: string]: string; };
    /**
     * The IP for which this address is the \"outside\" IP
     * @type {number}
     * @memberof WritableIPAddress
     */
    nat_inside?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableIPAddress
     */
    nat_outside: number;
    /**
     * Hostname or FQDN (not case-sensitive)
     * @type {string}
     * @memberof WritableIPAddress
     */
    dns_name?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    description?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableIPAddress
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableIPAddress
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableIPAddress
     */
    last_updated?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableIPAddressStatusEnum {
    Active = 'active',
    Reserved = 'reserved',
    Deprecated = 'deprecated',
    Dhcp = 'dhcp',
    Slaac = 'slaac'
}
/**
    * @export
    * @enum {string}
    */
export enum WritableIPAddressRoleEnum {
    Loopback = 'loopback',
    Secondary = 'secondary',
    Anycast = 'anycast',
    Vip = 'vip',
    Vrrp = 'vrrp',
    Hsrp = 'hsrp',
    Glbp = 'glbp',
    Carp = 'carp'
}


