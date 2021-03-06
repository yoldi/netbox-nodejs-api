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
import { Type } from './type';

/**
 * 
 * @export
 * @interface ConsoleServerPort
 */
export interface ConsoleServerPort {
    /**
     * 
     * @type {number}
     * @memberof ConsoleServerPort
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConsoleServerPort
     */
    url?: string;
    /**
     * 
     * @type {NestedDevice}
     * @memberof ConsoleServerPort
     */
    device: NestedDevice;
    /**
     * 
     * @type {string}
     * @memberof ConsoleServerPort
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof ConsoleServerPort
     */
    label?: string;
    /**
     * 
     * @type {Type}
     * @memberof ConsoleServerPort
     */
    type?: Type;
    /**
     * 
     * @type {string}
     * @memberof ConsoleServerPort
     */
    description?: string;
    /**
     * 
     * @type {NestedCable}
     * @memberof ConsoleServerPort
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof ConsoleServerPort
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ConsoleServerPort
     */
    cable_peer_type?: string;
    /**
     *  Return the appropriate serializer for the type of connected object. 
     * @type {{ [key: string]: string; }}
     * @memberof ConsoleServerPort
     */
    connected_endpoint?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ConsoleServerPort
     */
    connected_endpoint_type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConsoleServerPort
     */
    connected_endpoint_reachable?: boolean;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof ConsoleServerPort
     */
    tags?: Array<NestedTag>;
}


