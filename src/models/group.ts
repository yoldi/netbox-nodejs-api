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
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    user_count?: number;
}

