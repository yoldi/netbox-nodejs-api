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
 * @interface Status9
 */
export interface Status9 {
    /**
     * 
     * @type {string}
     * @memberof Status9
     */
    label: Status9LabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Status9
     */
    value: Status9ValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Status9LabelEnum {
    Active = 'Active',
    Reserved = 'Reserved',
    Deprecated = 'Deprecated'
}
/**
    * @export
    * @enum {string}
    */
export enum Status9ValueEnum {
    Active = 'active',
    Reserved = 'reserved',
    Deprecated = 'deprecated'
}


