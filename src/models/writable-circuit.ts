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
 * @interface WritableCircuit
 */
export interface WritableCircuit {
    /**
     * 
     * @type {number}
     * @memberof WritableCircuit
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    cid: string;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuit
     */
    provider: number;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuit
     */
    type: number;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    status?: WritableCircuitStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuit
     */
    tenant?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    install_date?: string | null;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuit
     */
    commit_rate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    termination_a?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    termination_z?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableCircuit
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableCircuit
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuit
     */
    last_updated?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableCircuitStatusEnum {
    Planned = 'planned',
    Provisioning = 'provisioning',
    Active = 'active',
    Offline = 'offline',
    Deprovisioning = 'deprovisioning',
    Decommissioned = 'decommissioned'
}


