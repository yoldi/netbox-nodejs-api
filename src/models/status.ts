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
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {string}
     * @memberof Status
     */
    label: StatusLabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Status
     */
    value: StatusValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum StatusLabelEnum {
    Planned = 'Planned',
    Provisioning = 'Provisioning',
    Active = 'Active',
    Offline = 'Offline',
    Deprovisioning = 'Deprovisioning',
    Decommissioned = 'Decommissioned'
}
/**
    * @export
    * @enum {string}
    */
export enum StatusValueEnum {
    Planned = 'planned',
    Provisioning = 'provisioning',
    Active = 'active',
    Offline = 'offline',
    Deprovisioning = 'deprovisioning',
    Decommissioned = 'decommissioned'
}


