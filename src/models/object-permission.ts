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


import { NestedGroup } from './nested-group';
import { NestedUser } from './nested-user';

/**
 * 
 * @export
 * @interface ObjectPermission
 */
export interface ObjectPermission {
    /**
     * 
     * @type {number}
     * @memberof ObjectPermission
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjectPermission
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectPermission
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectPermission
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjectPermission
     */
    enabled?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof ObjectPermission
     */
    object_types: Set<string>;
    /**
     * 
     * @type {Set<NestedGroup>}
     * @memberof ObjectPermission
     */
    groups?: Set<NestedGroup>;
    /**
     * 
     * @type {Set<NestedUser>}
     * @memberof ObjectPermission
     */
    users?: Set<NestedUser>;
    /**
     * The list of actions granted by this permission
     * @type {Array<string>}
     * @memberof ObjectPermission
     */
    actions: Array<string>;
    /**
     * Queryset filter matching the applicable objects of the selected type(s)
     * @type {string}
     * @memberof ObjectPermission
     */
    constraints?: string | null;
}


