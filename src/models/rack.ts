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


import { NestedRackGroup } from './nested-rack-group';
import { NestedRackRole } from './nested-rack-role';
import { NestedSite } from './nested-site';
import { NestedTag } from './nested-tag';
import { NestedTenant } from './nested-tenant';
import { OuterUnit } from './outer-unit';
import { Status4 } from './status4';
import { Type6 } from './type6';
import { Width } from './width';

/**
 * 
 * @export
 * @interface Rack
 */
export interface Rack {
    /**
     * 
     * @type {number}
     * @memberof Rack
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    name: string;
    /**
     * Locally-assigned identifier
     * @type {string}
     * @memberof Rack
     */
    facility_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    display_name?: string;
    /**
     * 
     * @type {NestedSite}
     * @memberof Rack
     */
    site: NestedSite;
    /**
     * 
     * @type {NestedRackGroup}
     * @memberof Rack
     */
    group?: NestedRackGroup | null;
    /**
     * 
     * @type {NestedTenant}
     * @memberof Rack
     */
    tenant?: NestedTenant | null;
    /**
     * 
     * @type {Status4}
     * @memberof Rack
     */
    status?: Status4;
    /**
     * 
     * @type {NestedRackRole}
     * @memberof Rack
     */
    role?: NestedRackRole | null;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    serial?: string;
    /**
     * A unique tag used to identify this rack
     * @type {string}
     * @memberof Rack
     */
    asset_tag?: string | null;
    /**
     * 
     * @type {Type6}
     * @memberof Rack
     */
    type?: Type6;
    /**
     * 
     * @type {Width}
     * @memberof Rack
     */
    width?: Width;
    /**
     * Height in rack units
     * @type {number}
     * @memberof Rack
     */
    u_height?: number;
    /**
     * Units are numbered top-to-bottom
     * @type {boolean}
     * @memberof Rack
     */
    desc_units?: boolean;
    /**
     * Outer dimension of rack (width)
     * @type {number}
     * @memberof Rack
     */
    outer_width?: number | null;
    /**
     * Outer dimension of rack (depth)
     * @type {number}
     * @memberof Rack
     */
    outer_depth?: number | null;
    /**
     * 
     * @type {OuterUnit}
     * @memberof Rack
     */
    outer_unit?: OuterUnit;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof Rack
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof Rack
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof Rack
     */
    last_updated?: string;
    /**
     * 
     * @type {number}
     * @memberof Rack
     */
    device_count?: number;
    /**
     * 
     * @type {number}
     * @memberof Rack
     */
    powerfeed_count?: number;
}

