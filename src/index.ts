const TLV = require('node-tlv');
var binary = require('bops')

export interface FatooraTags {
    sellerName: {
        value: string,
        tag: 0
    },
    VATNumber: {
        value: number,
        tag: 1
    },
    timestamp: {
        value: string,
        tag: 2
    },
    invoiceAmount: {
        value: number,
        tag: 3
    },
    VATAmount: {
        value: number,
        tag: 4
    }
}

let fatooraAsJson: FatooraTags = {
    VATAmount: {tag: 4, value: 0},
    VATNumber: {tag: 1, value: 0},
    invoiceAmount: {tag: 3, value: 0},
    sellerName: {tag: 0, value: ''},
    timestamp: {tag: 2, value: ''}
};

export function toJson(base64String: string): FatooraTags {
    try {
        // parse base64 to hex[]
        const listOfHex = TLV.parseList(Buffer.from(base64String, 'base64').toString('hex'));
        // go through all supported keys and map the values
        Object.keys(fatooraAsJson).forEach((k) => {
            // parse hex to string & map values to the object.
            const tagIndex = fatooraAsJson[k].tag;
            const tagType = typeof fatooraAsJson[k].value;
            const value = binary.from(listOfHex[tagIndex].getValue(), 'hex').toString('utf-8');
            fatooraAsJson[k].value = parseValue(tagType, value);

        })
    } catch (e) {
        throw new Error('Fatoora-parser: ' + e.message + '. CHECK your base64 string');
    }
    return fatooraAsJson;
}

function parseValue(type: string, value) {
    switch (type) {
        case 'number':
            return +value;
        default:
            return value;
    }
}
