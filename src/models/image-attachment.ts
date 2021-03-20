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
 * @interface ImageAttachment
 */
export interface ImageAttachment {
    /**
     * 
     * @type {number}
     * @memberof ImageAttachment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageAttachment
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageAttachment
     */
    content_type: string;
    /**
     * 
     * @type {number}
     * @memberof ImageAttachment
     */
    object_id: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ImageAttachment
     */
    parent?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ImageAttachment
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageAttachment
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageAttachment
     */
    image_height: number;
    /**
     * 
     * @type {number}
     * @memberof ImageAttachment
     */
    image_width: number;
    /**
     * 
     * @type {string}
     * @memberof ImageAttachment
     */
    created?: string;
}


