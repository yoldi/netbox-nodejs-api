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
 * @interface Mode
 */
export interface Mode {
    /**
     * 
     * @type {string}
     * @memberof Mode
     */
    label: ModeLabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Mode
     */
    value: ModeValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ModeLabelEnum {
    Access = 'Access',
    Tagged = 'Tagged',
    TaggedAll = 'Tagged (All)'
}
/**
    * @export
    * @enum {string}
    */
export enum ModeValueEnum {
    Access = 'access',
    Tagged = 'tagged',
    TaggedAll = 'tagged-all'
}



