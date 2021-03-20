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


import { NestedCluster } from './nested-cluster';
import { NestedClusterGroup } from './nested-cluster-group';
import { NestedDeviceRole } from './nested-device-role';
import { NestedPlatform } from './nested-platform';
import { NestedRegion } from './nested-region';
import { NestedSite } from './nested-site';
import { NestedTenant } from './nested-tenant';
import { NestedTenantGroup } from './nested-tenant-group';

/**
 * 
 * @export
 * @interface ConfigContext
 */
export interface ConfigContext {
    /**
     * 
     * @type {number}
     * @memberof ConfigContext
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigContext
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigContext
     */
    is_active?: boolean;
    /**
     * 
     * @type {Set<NestedRegion>}
     * @memberof ConfigContext
     */
    regions?: Set<NestedRegion>;
    /**
     * 
     * @type {Set<NestedSite>}
     * @memberof ConfigContext
     */
    sites?: Set<NestedSite>;
    /**
     * 
     * @type {Set<NestedDeviceRole>}
     * @memberof ConfigContext
     */
    roles?: Set<NestedDeviceRole>;
    /**
     * 
     * @type {Set<NestedPlatform>}
     * @memberof ConfigContext
     */
    platforms?: Set<NestedPlatform>;
    /**
     * 
     * @type {Set<NestedClusterGroup>}
     * @memberof ConfigContext
     */
    cluster_groups?: Set<NestedClusterGroup>;
    /**
     * 
     * @type {Set<NestedCluster>}
     * @memberof ConfigContext
     */
    clusters?: Set<NestedCluster>;
    /**
     * 
     * @type {Set<NestedTenantGroup>}
     * @memberof ConfigContext
     */
    tenant_groups?: Set<NestedTenantGroup>;
    /**
     * 
     * @type {Set<NestedTenant>}
     * @memberof ConfigContext
     */
    tenants?: Set<NestedTenant>;
    /**
     * 
     * @type {Set<string>}
     * @memberof ConfigContext
     */
    tags?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    data: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigContext
     */
    last_updated?: string;
}


