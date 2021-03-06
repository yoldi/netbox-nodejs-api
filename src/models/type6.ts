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
 * @interface Type6
 */
export interface Type6 {
    /**
     * 
     * @type {string}
     * @memberof Type6
     */
    label: Type6LabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Type6
     */
    value: Type6ValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Type6LabelEnum {
    _2PostFrame = '2-post frame',
    _4PostFrame = '4-post frame',
    _4PostCabinet = '4-post cabinet',
    WallMountedFrame = 'Wall-mounted frame',
    WallMountedCabinet = 'Wall-mounted cabinet'
}
/**
    * @export
    * @enum {string}
    */
export enum Type6ValueEnum {
    _2PostFrame = '2-post-frame',
    _4PostFrame = '4-post-frame',
    _4PostCabinet = '4-post-cabinet',
    WallFrame = 'wall-frame',
    WallCabinet = 'wall-cabinet'
}



