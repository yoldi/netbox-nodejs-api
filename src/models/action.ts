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
 * @interface Action
 */
export interface Action {
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    label: ActionLabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    value: ActionValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ActionLabelEnum {
    Created = 'Created',
    Updated = 'Updated',
    Deleted = 'Deleted'
}
/**
    * @export
    * @enum {string}
    */
export enum ActionValueEnum {
    Create = 'create',
    Update = 'update',
    Delete = 'delete'
}



