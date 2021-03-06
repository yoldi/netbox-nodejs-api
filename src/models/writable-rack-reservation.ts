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


import { NestedTag } from './nested-tag';

/**
 * 
 * @export
 * @interface WritableRackReservation
 */
export interface WritableRackReservation {
    /**
     * 
     * @type {number}
     * @memberof WritableRackReservation
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableRackReservation
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableRackReservation
     */
    rack: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof WritableRackReservation
     */
    units: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof WritableRackReservation
     */
    created?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableRackReservation
     */
    user: number;
    /**
     * 
     * @type {number}
     * @memberof WritableRackReservation
     */
    tenant?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRackReservation
     */
    description: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableRackReservation
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableRackReservation
     */
    custom_fields?: object;
}


