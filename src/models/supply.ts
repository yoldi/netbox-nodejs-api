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
 * @interface Supply
 */
export interface Supply {
    /**
     * 
     * @type {string}
     * @memberof Supply
     */
    label: SupplyLabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Supply
     */
    value: SupplyValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SupplyLabelEnum {
    Ac = 'AC',
    Dc = 'DC'
}
/**
    * @export
    * @enum {string}
    */
export enum SupplyValueEnum {
    Ac = 'ac',
    Dc = 'dc'
}



