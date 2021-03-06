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
import { NestedSite } from './nested-site';
import { NestedTag } from './nested-tag';

/**
 * 
 * @export
 * @interface PowerPanel
 */
export interface PowerPanel {
    /**
     * 
     * @type {number}
     * @memberof PowerPanel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PowerPanel
     */
    url?: string;
    /**
     * 
     * @type {NestedSite}
     * @memberof PowerPanel
     */
    site: NestedSite;
    /**
     * 
     * @type {NestedRackGroup}
     * @memberof PowerPanel
     */
    rack_group?: NestedRackGroup | null;
    /**
     * 
     * @type {string}
     * @memberof PowerPanel
     */
    name: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof PowerPanel
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {object}
     * @memberof PowerPanel
     */
    custom_fields?: object;
    /**
     * 
     * @type {number}
     * @memberof PowerPanel
     */
    powerfeed_count?: number;
}


