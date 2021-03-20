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


import { Action } from './action';
import { NestedUser } from './nested-user';

/**
 * 
 * @export
 * @interface ObjectChange
 */
export interface ObjectChange {
    /**
     * 
     * @type {number}
     * @memberof ObjectChange
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    time?: string;
    /**
     * 
     * @type {NestedUser}
     * @memberof ObjectChange
     */
    user?: NestedUser;
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    user_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    request_id?: string;
    /**
     * 
     * @type {Action}
     * @memberof ObjectChange
     */
    action?: Action;
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    changed_object_type?: string;
    /**
     * 
     * @type {number}
     * @memberof ObjectChange
     */
    changed_object_id: number;
    /**
     *  Serialize a nested representation of the changed object. 
     * @type {{ [key: string]: string; }}
     * @memberof ObjectChange
     */
    changed_object?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ObjectChange
     */
    object_data?: string;
}

