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
 * @interface WritableConsolePortTemplate
 */
export interface WritableConsolePortTemplate {
    /**
     * 
     * @type {number}
     * @memberof WritableConsolePortTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableConsolePortTemplate
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableConsolePortTemplate
     */
    device_type: number;
    /**
     * 
     * @type {string}
     * @memberof WritableConsolePortTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof WritableConsolePortTemplate
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableConsolePortTemplate
     */
    type?: WritableConsolePortTemplateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WritableConsolePortTemplate
     */
    description?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableConsolePortTemplateTypeEnum {
    De9 = 'de-9',
    Db25 = 'db-25',
    Rj11 = 'rj-11',
    Rj12 = 'rj-12',
    Rj45 = 'rj-45',
    UsbA = 'usb-a',
    UsbB = 'usb-b',
    UsbC = 'usb-c',
    UsbMiniA = 'usb-mini-a',
    UsbMiniB = 'usb-mini-b',
    UsbMicroA = 'usb-micro-a',
    UsbMicroB = 'usb-micro-b',
    Other = 'other'
}


