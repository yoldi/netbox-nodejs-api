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
 * @interface WritableObjectPermission
 */
export interface WritableObjectPermission {
    /**
     * 
     * @type {number}
     * @memberof WritableObjectPermission
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableObjectPermission
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableObjectPermission
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WritableObjectPermission
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WritableObjectPermission
     */
    enabled?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof WritableObjectPermission
     */
    object_types: Set<string>;
    /**
     * 
     * @type {Set<number>}
     * @memberof WritableObjectPermission
     */
    groups?: Set<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof WritableObjectPermission
     */
    users?: Set<number>;
    /**
     * The list of actions granted by this permission
     * @type {Array<string>}
     * @memberof WritableObjectPermission
     */
    actions: Array<string>;
    /**
     * Queryset filter matching the applicable objects of the selected type(s)
     * @type {string}
     * @memberof WritableObjectPermission
     */
    constraints?: string | null;
}


