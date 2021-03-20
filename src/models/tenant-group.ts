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


import { NestedTenantGroup } from './nested-tenant-group';

/**
 * 
 * @export
 * @interface TenantGroup
 */
export interface TenantGroup {
    /**
     * 
     * @type {number}
     * @memberof TenantGroup
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TenantGroup
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantGroup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantGroup
     */
    slug: string;
    /**
     * 
     * @type {NestedTenantGroup}
     * @memberof TenantGroup
     */
    parent?: NestedTenantGroup;
    /**
     * 
     * @type {string}
     * @memberof TenantGroup
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof TenantGroup
     */
    tenant_count?: number;
    /**
     * 
     * @type {number}
     * @memberof TenantGroup
     */
    _depth?: number;
}

