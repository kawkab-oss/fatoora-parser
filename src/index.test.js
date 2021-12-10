import {toJson} from "./index";

describe("Fatoora Parser", () => {
    test('parse base64 to json', () => {
        const fatoora = toJson('AQVTYWxsYQIKMTIzNDU2Nzg5MQMUMjAyMS0wNy0xMlQxNDoyNTowOVoEBjEwMC4wMAUFMTUuMDA=')
        expect(fatoora.sellerName.value).toBe('Salla');
        expect(fatoora.VATNumber.value).toBe(1234567891);
        expect(fatoora.invoiceAmount.value).toBe(100.00);
        expect(fatoora.VATAmount.value).toBe(15.00);
        expect(fatoora.timestamp.value).toBe('2021-07-12T14:25:09Z');
    });

    test('pass corrupted base64', () => {
        expect(() => toJson('43YQe5w')).toThrow()
        expect(() => toJson('asim')).toThrow()
        expect(() => toJson('')).toThrow()
    });
})
