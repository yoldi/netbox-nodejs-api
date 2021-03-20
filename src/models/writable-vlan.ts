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
 * @interface WritableVLAN
 */
export interface WritableVLAN {
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    site?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    group?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    vid: number;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    tenant?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    status?: WritableVLANStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    role?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    description?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableVLAN
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    display_name?: string;
    /**
     * 
     * @type {object}
     * @memberof WritableVLAN
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableVLAN
     */
    last_updated?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableVLAN
     */
    prefix_count?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableVLANStatusEnum {
    Active = 'active',
    Reserved = 'reserved',
    Deprecated = 'deprecated'
}



