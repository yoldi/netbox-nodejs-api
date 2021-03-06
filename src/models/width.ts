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
 * @interface Width
 */
export interface Width {
    /**
     * 
     * @type {string}
     * @memberof Width
     */
    label: WidthLabelEnum;
    /**
     * 
     * @type {number}
     * @memberof Width
     */
    value: number;
}

/**
    * @export
    * @enum {string}
    */
export enum WidthLabelEnum {
    _10Inches = '10 inches',
    _19Inches = '19 inches',
    _21Inches = '21 inches',
    _23Inches = '23 inches'
}



