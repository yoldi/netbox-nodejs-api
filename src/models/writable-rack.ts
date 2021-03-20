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
 * @interface WritableRack
 */
export interface WritableRack {
    /**
     * 
     * @type {number}
     * @memberof WritableRack
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    name: string;
    /**
     * Locally-assigned identifier
     * @type {string}
     * @memberof WritableRack
     */
    facility_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    display_name?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableRack
     */
    site: number;
    /**
     * Assigned group
     * @type {number}
     * @memberof WritableRack
     */
    group?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableRack
     */
    tenant?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    status?: WritableRackStatusEnum;
    /**
     * Functional role
     * @type {number}
     * @memberof WritableRack
     */
    role?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    serial?: string;
    /**
     * A unique tag used to identify this rack
     * @type {string}
     * @memberof WritableRack
     */
    asset_tag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    type?: WritableRackTypeEnum;
    /**
     * Rail-to-rail width
     * @type {number}
     * @memberof WritableRack
     */
    width?: number;
    /**
     * Height in rack units
     * @type {number}
     * @memberof WritableRack
     */
    u_height?: number;
    /**
     * Units are numbered top-to-bottom
     * @type {boolean}
     * @memberof WritableRack
     */
    desc_units?: boolean;
    /**
     * Outer dimension of rack (width)
     * @type {number}
     * @memberof WritableRack
     */
    outer_width?: number | null;
    /**
     * Outer dimension of rack (depth)
     * @type {number}
     * @memberof WritableRack
     */
    outer_depth?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    outer_unit?: WritableRackOuterUnitEnum;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    comments?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableRack
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof WritableRack
     */
    custom_fields?: object;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableRack
     */
    last_updated?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableRack
     */
    device_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WritableRack
     */
    powerfeed_count?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableRackStatusEnum {
    Reserved = 'reserved',
    Available = 'available',
    Planned = 'planned',
    Active = 'active',
    Deprecated = 'deprecated'
}
/**
    * @export
    * @enum {string}
    */
export enum WritableRackTypeEnum {
    _2PostFrame = '2-post-frame',
    _4PostFrame = '4-post-frame',
    _4PostCabinet = '4-post-cabinet',
    WallFrame = 'wall-frame',
    WallCabinet = 'wall-cabinet'
}
/**
    * @export
    * @enum {string}
    */
export enum WritableRackOuterUnitEnum {
    Mm = 'mm',
    In = 'in'
}



