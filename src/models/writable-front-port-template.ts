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
 * @interface WritableFrontPortTemplate
 */
export interface WritableFrontPortTemplate {
    /**
     * 
     * @type {number}
     * @memberof WritableFrontPortTemplate
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableFrontPortTemplate
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableFrontPortTemplate
     */
    device_type: number;
    /**
     * 
     * @type {string}
     * @memberof WritableFrontPortTemplate
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof WritableFrontPortTemplate
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableFrontPortTemplate
     */
    type: WritableFrontPortTemplateTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof WritableFrontPortTemplate
     */
    rear_port: number;
    /**
     * 
     * @type {number}
     * @memberof WritableFrontPortTemplate
     */
    rear_port_position?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableFrontPortTemplate
     */
    description?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableFrontPortTemplateTypeEnum {
    _8p8c = '8p8c',
    _8p6c = '8p6c',
    _8p4c = '8p4c',
    _8p2c = '8p2c',
    _110Punch = '110-punch',
    Bnc = 'bnc',
    Mrj21 = 'mrj21',
    Fc = 'fc',
    Lc = 'lc',
    LcApc = 'lc-apc',
    Lsh = 'lsh',
    LshApc = 'lsh-apc',
    Mpo = 'mpo',
    Mtrj = 'mtrj',
    Sc = 'sc',
    ScApc = 'sc-apc',
    St = 'st',
    Cs = 'cs',
    Sn = 'sn',
    Splice = 'splice'
}



