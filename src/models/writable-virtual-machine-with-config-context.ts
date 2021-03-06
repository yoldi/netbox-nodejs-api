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
 * @interface WritableVirtualMachineWithConfigContext
 */
export interface WritableVirtualMachineWithConfigContext {
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    status?: WritableVirtualMachineWithConfigContextStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    site?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    cluster: number;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    role?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    tenant?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    platform?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    primary_ip?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    primary_ip4?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    primary_ip6?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    vcpus?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    memory?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    disk?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    local_context_data?: string | null;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    custom_fields?: object;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    config_context?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableVirtualMachineWithConfigContext
     */
    last_updated?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableVirtualMachineWithConfigContextStatusEnum {
    Offline = 'offline',
    Active = 'active',
    Planned = 'planned',
    Staged = 'staged',
    Failed = 'failed',
    Decommissioning = 'decommissioning'
}



