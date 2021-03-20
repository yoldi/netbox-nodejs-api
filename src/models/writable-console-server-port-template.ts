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
 * @interface WritableConsoleServerPortTemplate
 */
export interface WritableConsoleServerPortTemplate {
    /**
     * 
     * @type {number}
     * @memberof WritableConsoleServerPortTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableConsoleServerPortTemplate
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableConsoleServerPortTemplate
     */
    device_type: number;
    /**
     * 
     * @type {string}
     * @memberof WritableConsoleServerPortTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof WritableConsoleServerPortTemplate
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableConsoleServerPortTemplate
     */
    type?: WritableConsoleServerPortTemplateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WritableConsoleServerPortTemplate
     */
    description?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableConsoleServerPortTemplateTypeEnum {
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



