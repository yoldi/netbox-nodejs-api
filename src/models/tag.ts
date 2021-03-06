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



/**
 * 
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {number}
     * @memberof Tag
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Tag
     */
    tagged_items?: number;
}


