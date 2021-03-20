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
 * @interface SubdeviceRole
 */
export interface SubdeviceRole {
    /**
     * 
     * @type {string}
     * @memberof SubdeviceRole
     */
    label: SubdeviceRoleLabelEnum;
    /**
     * 
     * @type {string}
     * @memberof SubdeviceRole
     */
    value: SubdeviceRoleValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SubdeviceRoleLabelEnum {
    Parent = 'Parent',
    Child = 'Child'
}
/**
    * @export
    * @enum {string}
    */
export enum SubdeviceRoleValueEnum {
    Parent = 'parent',
    Child = 'child'
}



