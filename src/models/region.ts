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


import { NestedRegion } from './nested-region';

/**
 * 
 * @export
 * @interface Region
 */
export interface Region {
    /**
     * 
     * @type {number}
     * @memberof Region
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Region
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Region
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Region
     */
    slug: string;
    /**
     * 
     * @type {NestedRegion}
     * @memberof Region
     */
    parent?: NestedRegion | null;
    /**
     * 
     * @type {string}
     * @memberof Region
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Region
     */
    site_count?: number;
    /**
     * 
     * @type {number}
     * @memberof Region
     */
    _depth?: number;
}

