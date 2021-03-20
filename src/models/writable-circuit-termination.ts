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

/**
 * 
 * @export
 * @interface WritableCircuitTermination
 */
export interface WritableCircuitTermination {
    /**
     * 
     * @type {number}
     * @memberof WritableCircuitTermination
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuitTermination
     */
    circuit: number;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    term_side: WritableCircuitTerminationTermSideEnum;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuitTermination
     */
    site: number;
    /**
     * 
     * @type {number}
     * @memberof WritableCircuitTermination
     */
    port_speed?: number | null;
    /**
     * Upstream speed, if different from port speed
     * @type {number}
     * @memberof WritableCircuitTermination
     */
    upstream_speed?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    xconnect_id?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    pp_info?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    description?: string;
    /**
     * 
     * @type {NestedCable}
     * @memberof WritableCircuitTermination
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof WritableCircuitTermination
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    cable_peer_type?: string;
    /**
     *  Return the appropriate serializer for the type of connected object. 
     * @type {{ [key: string]: string; }}
     * @memberof WritableCircuitTermination
     */
    connected_endpoint?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WritableCircuitTermination
     */
    connected_endpoint_type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WritableCircuitTermination
     */
    connected_endpoint_reachable?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableCircuitTerminationTermSideEnum {
    A = 'A',
    Z = 'Z'
}



