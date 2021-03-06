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
 * @interface Provider
 */
export interface Provider {
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    slug: string;
    /**
     * 32-bit autonomous system number
     * @type {number}
     * @memberof Provider
     */
    asn?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    account?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    portal_url?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    noc_contact?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    admin_contact?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof Provider
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof Provider
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    last_updated?: string;
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    circuit_count?: number;
}


