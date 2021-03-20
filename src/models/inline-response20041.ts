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


import { ImageAttachment } from './image-attachment';

/**
 * 
 * @export
 * @interface InlineResponse20041
 */
export interface InlineResponse20041 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20041
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20041
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20041
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ImageAttachment>}
     * @memberof InlineResponse20041
     */
    results: Array<ImageAttachment>;
}


