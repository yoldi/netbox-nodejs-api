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
 * @interface WritableSecret
 */
export interface WritableSecret {
    /**
     * 
     * @type {number}
     * @memberof WritableSecret
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    assigned_object_type: string;
    /**
     * 
     * @type {number}
     * @memberof WritableSecret
     */
    assigned_object_id: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WritableSecret
     */
    assigned_object?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof WritableSecret
     */
    role: number;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    plaintext: string;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    hash?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableSecret
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableSecret
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableSecret
     */
    last_updated?: string;
}


