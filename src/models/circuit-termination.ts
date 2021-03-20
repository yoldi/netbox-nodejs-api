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
import { NestedCircuit } from './nested-circuit';
import { NestedSite } from './nested-site';

/**
 * 
 * @export
 * @interface CircuitTermination
 */
export interface CircuitTermination {
    /**
     * 
     * @type {number}
     * @memberof CircuitTermination
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    url?: string;
    /**
     * 
     * @type {NestedCircuit}
     * @memberof CircuitTermination
     */
    circuit: NestedCircuit;
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    term_side: CircuitTerminationTermSideEnum;
    /**
     * 
     * @type {NestedSite}
     * @memberof CircuitTermination
     */
    site: NestedSite;
    /**
     * 
     * @type {number}
     * @memberof CircuitTermination
     */
    port_speed?: number | null;
    /**
     * Upstream speed, if different from port speed
     * @type {number}
     * @memberof CircuitTermination
     */
    upstream_speed?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    xconnect_id?: string;
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    pp_info?: string;
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    description?: string;
    /**
     * 
     * @type {NestedCable}
     * @memberof CircuitTermination
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof CircuitTermination
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    cable_peer_type?: string;
    /**
     *  Return the appropriate serializer for the type of connected object. 
     * @type {{ [key: string]: string; }}
     * @memberof CircuitTermination
     */
    connected_endpoint?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CircuitTermination
     */
    connected_endpoint_type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CircuitTermination
     */
    connected_endpoint_reachable?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum CircuitTerminationTermSideEnum {
    A = 'A',
    Z = 'Z'
}


