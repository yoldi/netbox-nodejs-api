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



/**
 * 
 * @export
 * @interface ClusterType
 */
export interface ClusterType {
    /**
     * 
     * @type {number}
     * @memberof ClusterType
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ClusterType
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterType
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterType
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterType
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof ClusterType
     */
    cluster_count?: number;
}

