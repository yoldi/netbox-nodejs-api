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


import { CircuitCircuitTermination } from './circuit-circuit-termination';
import { NestedCircuitType } from './nested-circuit-type';
import { NestedProvider } from './nested-provider';
import { NestedTag } from './nested-tag';
import { NestedTenant } from './nested-tenant';
import { Status } from './status';

/**
 * 
 * @export
 * @interface Circuit
 */
export interface Circuit {
    /**
     * 
     * @type {number}
     * @memberof Circuit
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    cid: string;
    /**
     * 
     * @type {NestedProvider}
     * @memberof Circuit
     */
    provider: NestedProvider;
    /**
     * 
     * @type {NestedCircuitType}
     * @memberof Circuit
     */
    type: NestedCircuitType;
    /**
     * 
     * @type {Status}
     * @memberof Circuit
     */
    status?: Status;
    /**
     * 
     * @type {NestedTenant}
     * @memberof Circuit
     */
    tenant?: NestedTenant | null;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    install_date?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Circuit
     */
    commit_rate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    description?: string;
    /**
     * 
     * @type {CircuitCircuitTermination}
     * @memberof Circuit
     */
    termination_a?: CircuitCircuitTermination;
    /**
     * 
     * @type {CircuitCircuitTermination}
     * @memberof Circuit
     */
    termination_z?: CircuitCircuitTermination;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof Circuit
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof Circuit
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof Circuit
     */
    last_updated?: string;
}

