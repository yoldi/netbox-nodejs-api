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


import { NestedSite } from './nested-site';

/**
 * 
 * @export
 * @interface VLANGroup
 */
export interface VLANGroup {
    /**
     * 
     * @type {number}
     * @memberof VLANGroup
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof VLANGroup
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof VLANGroup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VLANGroup
     */
    slug: string;
    /**
     * 
     * @type {NestedSite}
     * @memberof VLANGroup
     */
    site?: NestedSite;
    /**
     * 
     * @type {string}
     * @memberof VLANGroup
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof VLANGroup
     */
    vlan_count?: number;
}

