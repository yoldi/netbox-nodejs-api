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
 * @interface Role1
 */
export interface Role1 {
    /**
     * 
     * @type {string}
     * @memberof Role1
     */
    label: Role1LabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Role1
     */
    value: Role1ValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Role1LabelEnum {
    Loopback = 'Loopback',
    Secondary = 'Secondary',
    Anycast = 'Anycast',
    Vip = 'VIP',
    Vrrp = 'VRRP',
    Hsrp = 'HSRP',
    Glbp = 'GLBP',
    Carp = 'CARP'
}
/**
    * @export
    * @enum {string}
    */
export enum Role1ValueEnum {
    Loopback = 'loopback',
    Secondary = 'secondary',
    Anycast = 'anycast',
    Vip = 'vip',
    Vrrp = 'vrrp',
    Hsrp = 'hsrp',
    Glbp = 'glbp',
    Carp = 'carp'
}



