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
 * @interface Type5
 */
export interface Type5 {
    /**
     * 
     * @type {string}
     * @memberof Type5
     */
    label: Type5LabelEnum;
    /**
     * 
     * @type {string}
     * @memberof Type5
     */
    value: Type5ValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Type5LabelEnum {
    C5 = 'C5',
    C7 = 'C7',
    C13 = 'C13',
    C15 = 'C15',
    C19 = 'C19',
    Pne4H = 'P+N+E 4H',
    Pne6H = 'P+N+E 6H',
    Pne9H = 'P+N+E 9H',
    _2Pe4H = '2P+E 4H',
    _2Pe6H = '2P+E 6H',
    _2Pe9H = '2P+E 9H',
    _3Pe4H = '3P+E 4H',
    _3Pe6H = '3P+E 6H',
    _3Pe9H = '3P+E 9H',
    _3Pne4H = '3P+N+E 4H',
    _3Pne6H = '3P+N+E 6H',
    _3Pne9H = '3P+N+E 9H',
    Nema115R = 'NEMA 1-15R',
    Nema515R = 'NEMA 5-15R',
    Nema520R = 'NEMA 5-20R',
    Nema530R = 'NEMA 5-30R',
    Nema550R = 'NEMA 5-50R',
    Nema615R = 'NEMA 6-15R',
    Nema620R = 'NEMA 6-20R',
    Nema630R = 'NEMA 6-30R',
    Nema650R = 'NEMA 6-50R',
    Nema1030R = 'NEMA 10-30R',
    Nema1050R = 'NEMA 10-50R',
    Nema1420R = 'NEMA 14-20R',
    Nema1430R = 'NEMA 14-30R',
    Nema1450R = 'NEMA 14-50R',
    Nema1460R = 'NEMA 14-60R',
    Nema1515R = 'NEMA 15-15R',
    Nema1520R = 'NEMA 15-20R',
    Nema1530R = 'NEMA 15-30R',
    Nema1550R = 'NEMA 15-50R',
    Nema1560R = 'NEMA 15-60R',
    NemaL115R = 'NEMA L1-15R',
    NemaL515R = 'NEMA L5-15R',
    NemaL520R = 'NEMA L5-20R',
    NemaL530R = 'NEMA L5-30R',
    NemaL550R = 'NEMA L5-50R',
    NemaL615R = 'NEMA L6-15R',
    NemaL620R = 'NEMA L6-20R',
    NemaL630R = 'NEMA L6-30R',
    NemaL650R = 'NEMA L6-50R',
    NemaL1030R = 'NEMA L10-30R',
    NemaL1420R = 'NEMA L14-20R',
    NemaL1430R = 'NEMA L14-30R',
    NemaL1450R = 'NEMA L14-50R',
    NemaL1460R = 'NEMA L14-60R',
    NemaL1520R = 'NEMA L15-20R',
    NemaL1530R = 'NEMA L15-30R',
    NemaL1550R = 'NEMA L15-50R',
    NemaL1560R = 'NEMA L15-60R',
    NemaL2120R = 'NEMA L21-20R',
    NemaL2130R = 'NEMA L21-30R',
    Cs6360C = 'CS6360C',
    Cs6364C = 'CS6364C',
    Cs8164C = 'CS8164C',
    Cs8264C = 'CS8264C',
    Cs8364C = 'CS8364C',
    Cs8464C = 'CS8464C',
    ItaTypeECee75 = 'ITA Type E (CEE7/5)',
    ItaTypeFCee73 = 'ITA Type F (CEE7/3)',
    ItaTypeGBs1363 = 'ITA Type G (BS 1363)',
    ItaTypeH = 'ITA Type H',
    ItaTypeI = 'ITA Type I',
    ItaTypeJ = 'ITA Type J',
    ItaTypeK = 'ITA Type K',
    ItaTypeLCei2350 = 'ITA Type L (CEI 23-50)',
    ItaTypeMBs546 = 'ITA Type M (BS 546)',
    ItaTypeN = 'ITA Type N',
    ItaTypeO = 'ITA Type O',
    UsbTypeA = 'USB Type A',
    UsbMicroB = 'USB Micro B',
    UsbTypeC = 'USB Type C',
    HdotCx = 'HDOT Cx'
}
/**
    * @export
    * @enum {string}
    */
export enum Type5ValueEnum {
    Iec60320C5 = 'iec-60320-c5',
    Iec60320C7 = 'iec-60320-c7',
    Iec60320C13 = 'iec-60320-c13',
    Iec60320C15 = 'iec-60320-c15',
    Iec60320C19 = 'iec-60320-c19',
    Iec60309PNE4h = 'iec-60309-p-n-e-4h',
    Iec60309PNE6h = 'iec-60309-p-n-e-6h',
    Iec60309PNE9h = 'iec-60309-p-n-e-9h',
    Iec603092pE4h = 'iec-60309-2p-e-4h',
    Iec603092pE6h = 'iec-60309-2p-e-6h',
    Iec603092pE9h = 'iec-60309-2p-e-9h',
    Iec603093pE4h = 'iec-60309-3p-e-4h',
    Iec603093pE6h = 'iec-60309-3p-e-6h',
    Iec603093pE9h = 'iec-60309-3p-e-9h',
    Iec603093pNE4h = 'iec-60309-3p-n-e-4h',
    Iec603093pNE6h = 'iec-60309-3p-n-e-6h',
    Iec603093pNE9h = 'iec-60309-3p-n-e-9h',
    Nema115r = 'nema-1-15r',
    Nema515r = 'nema-5-15r',
    Nema520r = 'nema-5-20r',
    Nema530r = 'nema-5-30r',
    Nema550r = 'nema-5-50r',
    Nema615r = 'nema-6-15r',
    Nema620r = 'nema-6-20r',
    Nema630r = 'nema-6-30r',
    Nema650r = 'nema-6-50r',
    Nema1030r = 'nema-10-30r',
    Nema1050r = 'nema-10-50r',
    Nema1420r = 'nema-14-20r',
    Nema1430r = 'nema-14-30r',
    Nema1450r = 'nema-14-50r',
    Nema1460r = 'nema-14-60r',
    Nema1515r = 'nema-15-15r',
    Nema1520r = 'nema-15-20r',
    Nema1530r = 'nema-15-30r',
    Nema1550r = 'nema-15-50r',
    Nema1560r = 'nema-15-60r',
    NemaL115r = 'nema-l1-15r',
    NemaL515r = 'nema-l5-15r',
    NemaL520r = 'nema-l5-20r',
    NemaL530r = 'nema-l5-30r',
    NemaL550r = 'nema-l5-50r',
    NemaL615r = 'nema-l6-15r',
    NemaL620r = 'nema-l6-20r',
    NemaL630r = 'nema-l6-30r',
    NemaL650r = 'nema-l6-50r',
    NemaL1030r = 'nema-l10-30r',
    NemaL1420r = 'nema-l14-20r',
    NemaL1430r = 'nema-l14-30r',
    NemaL1450r = 'nema-l14-50r',
    NemaL1460r = 'nema-l14-60r',
    NemaL1520r = 'nema-l15-20r',
    NemaL1530r = 'nema-l15-30r',
    NemaL1550r = 'nema-l15-50r',
    NemaL1560r = 'nema-l15-60r',
    NemaL2120r = 'nema-l21-20r',
    NemaL2130r = 'nema-l21-30r',
    Cs6360C = 'CS6360C',
    Cs6364C = 'CS6364C',
    Cs8164C = 'CS8164C',
    Cs8264C = 'CS8264C',
    Cs8364C = 'CS8364C',
    Cs8464C = 'CS8464C',
    ItaE = 'ita-e',
    ItaF = 'ita-f',
    ItaG = 'ita-g',
    ItaH = 'ita-h',
    ItaI = 'ita-i',
    ItaJ = 'ita-j',
    ItaK = 'ita-k',
    ItaL = 'ita-l',
    ItaM = 'ita-m',
    ItaN = 'ita-n',
    ItaO = 'ita-o',
    UsbA = 'usb-a',
    UsbMicroB = 'usb-micro-b',
    UsbC = 'usb-c',
    HdotCx = 'hdot-cx'
}



