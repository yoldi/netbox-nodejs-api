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


import { FrontPortRearPort } from './front-port-rear-port';
import { NestedCable } from './nested-cable';
import { NestedDevice } from './nested-device';
import { NestedTag } from './nested-tag';
import { Type1 } from './type1';

/**
 * 
 * @export
 * @interface FrontPort
 */
export interface FrontPort {
    /**
     * 
     * @type {number}
     * @memberof FrontPort
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FrontPort
     */
    url?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof FrontPort
     */
    device: NestedDevice;
    /**
     * 
     * @type {string}
     * @memberof FrontPort
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof FrontPort
     */
    label?: string;
    /**
     * 
     * @type {Type1}
     * @memberof FrontPort
     */
    type: Type1;
    /**
     * 
     * @type {FrontPortRearPort}
     * @memberof FrontPort
     */
    rear_port: FrontPortRearPort;
    /**
     * 
     * @type {number}
     * @memberof FrontPort
     */
    rear_port_position?: number;
    /**
     * 
     * @type {string}
     * @memberof FrontPort
     */
    description?: string;
    /**
     * 
     * @type {NestedCable}
     * @memberof FrontPort
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof FrontPort
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof FrontPort
     */
    cable_peer_type?: string;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof FrontPort
     */
    tags?: Array<NestedTag>;
}


