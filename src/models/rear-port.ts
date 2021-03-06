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


import { NestedCable } from './nested-cable';
import { NestedDevice } from './nested-device';
import { NestedTag } from './nested-tag';
import { Type1 } from './type1';

/**
 * 
 * @export
 * @interface RearPort
 */
export interface RearPort {
    /**
     * 
     * @type {number}
     * @memberof RearPort
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RearPort
     */
    url?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof RearPort
     */
    device: NestedDevice;
    /**
     * 
     * @type {string}
     * @memberof RearPort
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof RearPort
     */
    label?: string;
    /**
     * 
     * @type {Type1}
     * @memberof RearPort
     */
    type: Type1;
    /**
     * 
     * @type {number}
     * @memberof RearPort
     */
    positions?: number;
    /**
     * 
     * @type {string}
     * @memberof RearPort
     */
    description?: string;
    /**
     * 
     * @type {NestedCable}
     * @memberof RearPort
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof RearPort
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RearPort
     */
    cable_peer_type?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof RearPort
     */
    tags?: Array<NestedTag>;
}


