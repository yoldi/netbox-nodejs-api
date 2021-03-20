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
import { NestedTag } from './nested-tag';

/**
 * 
 * @export
 * @interface WritableInterface
 */
export interface WritableInterface {
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    device: number;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    name: string;
    /**
     * Physical label
     * @type {string}
     * @memberof WritableInterface
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    type: WritableInterfaceTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof WritableInterface
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    lag?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    mtu?: number | null;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    mac_address?: string | null;
    /**
     * This interface is used only for out-of-band management
     * @type {boolean}
     * @memberof WritableInterface
     */
    mgmt_only?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    mode?: WritableInterfaceModeEnum;
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    untagged_vlan?: number | null;
    /**
     * 
     * @type {Set<number>}
     * @memberof WritableInterface
     */
    tagged_vlans?: Set<number>;
    /**
     * 
     * @type {NestedCable}
     * @memberof WritableInterface
     */
    cable?: NestedCable;
    /**
     *  Return the appropriate serializer for the cable termination model. 
     * @type {{ [key: string]: string; }}
     * @memberof WritableInterface
     */
    cable_peer?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    cable_peer_type?: string;
    /**
     *  Return the appropriate serializer for the type of connected object. 
     * @type {{ [key: string]: string; }}
     * @memberof WritableInterface
     */
    connected_endpoint?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WritableInterface
     */
    connected_endpoint_type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WritableInterface
     */
    connected_endpoint_reachable?: boolean;
    /**
     * 
     * @type {Array<NestedTag>}
     * @memberof WritableInterface
     */
    tags?: Array<NestedTag>;
    /**
     * 
     * @type {number}
     * @memberof WritableInterface
     */
    count_ipaddresses?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum WritableInterfaceTypeEnum {
    Virtual = 'virtual',
    Lag = 'lag',
    _100baseTx = '100base-tx',
    _1000baseT = '1000base-t',
    _25gbaseT = '2.5gbase-t',
    _5gbaseT = '5gbase-t',
    _10gbaseT = '10gbase-t',
    _10gbaseCx4 = '10gbase-cx4',
    _1000baseXGbic = '1000base-x-gbic',
    _1000baseXSfp = '1000base-x-sfp',
    _10gbaseXSfpp = '10gbase-x-sfpp',
    _10gbaseXXfp = '10gbase-x-xfp',
    _10gbaseXXenpak = '10gbase-x-xenpak',
    _10gbaseXX2 = '10gbase-x-x2',
    _25gbaseXSfp28 = '25gbase-x-sfp28',
    _40gbaseXQsfpp = '40gbase-x-qsfpp',
    _50gbaseXSfp28 = '50gbase-x-sfp28',
    _100gbaseXCfp = '100gbase-x-cfp',
    _100gbaseXCfp2 = '100gbase-x-cfp2',
    _200gbaseXCfp2 = '200gbase-x-cfp2',
    _100gbaseXCfp4 = '100gbase-x-cfp4',
    _100gbaseXCpak = '100gbase-x-cpak',
    _100gbaseXQsfp28 = '100gbase-x-qsfp28',
    _200gbaseXQsfp56 = '200gbase-x-qsfp56',
    _400gbaseXQsfpdd = '400gbase-x-qsfpdd',
    _400gbaseXOsfp = '400gbase-x-osfp',
    Ieee80211a = 'ieee802.11a',
    Ieee80211g = 'ieee802.11g',
    Ieee80211n = 'ieee802.11n',
    Ieee80211ac = 'ieee802.11ac',
    Ieee80211ad = 'ieee802.11ad',
    Ieee80211ax = 'ieee802.11ax',
    Gsm = 'gsm',
    Cdma = 'cdma',
    Lte = 'lte',
    SonetOc3 = 'sonet-oc3',
    SonetOc12 = 'sonet-oc12',
    SonetOc48 = 'sonet-oc48',
    SonetOc192 = 'sonet-oc192',
    SonetOc768 = 'sonet-oc768',
    SonetOc1920 = 'sonet-oc1920',
    SonetOc3840 = 'sonet-oc3840',
    _1gfcSfp = '1gfc-sfp',
    _2gfcSfp = '2gfc-sfp',
    _4gfcSfp = '4gfc-sfp',
    _8gfcSfpp = '8gfc-sfpp',
    _16gfcSfpp = '16gfc-sfpp',
    _32gfcSfp28 = '32gfc-sfp28',
    _128gfcSfp28 = '128gfc-sfp28',
    InfinibandSdr = 'infiniband-sdr',
    InfinibandDdr = 'infiniband-ddr',
    InfinibandQdr = 'infiniband-qdr',
    InfinibandFdr10 = 'infiniband-fdr10',
    InfinibandFdr = 'infiniband-fdr',
    InfinibandEdr = 'infiniband-edr',
    InfinibandHdr = 'infiniband-hdr',
    InfinibandNdr = 'infiniband-ndr',
    InfinibandXdr = 'infiniband-xdr',
    T1 = 't1',
    E1 = 'e1',
    T3 = 't3',
    E3 = 'e3',
    CiscoStackwise = 'cisco-stackwise',
    CiscoStackwisePlus = 'cisco-stackwise-plus',
    CiscoFlexstack = 'cisco-flexstack',
    CiscoFlexstackPlus = 'cisco-flexstack-plus',
    JuniperVcp = 'juniper-vcp',
    ExtremeSummitstack = 'extreme-summitstack',
    ExtremeSummitstack128 = 'extreme-summitstack-128',
    ExtremeSummitstack256 = 'extreme-summitstack-256',
    ExtremeSummitstack512 = 'extreme-summitstack-512',
    Other = 'other'
}
/**
    * @export
    * @enum {string}
    */
export enum WritableInterfaceModeEnum {
    Access = 'access',
    Tagged = 'tagged',
    TaggedAll = 'tagged-all'
}



