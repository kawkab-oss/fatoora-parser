# Fattora-parser

**Parse the base64 extracted from Fattora's QR code to JSON.** 

## Installation
```sh
npm i @kawkab-oss/fatoora-parser
yarn add @kawkab-oss/fatoora-parser
```
---------------

## Usage
```ts
const fatoora = toJson('AQVTYWxsYQIKMTIzNDU2Nzg5MQMUMjAyMS0wNy0xMlQxNDoyNTowOVoEBjEwMC4wMAUFMTUuMDA=');


expect(fatoora.sellerName.value).toBe('Salla');
expect(fatoora.VATNumber.value).toBe(1234567891);
expect(fatoora.invoiceAmount.value).toBe(100);
expect(fatoora.VATAmount.value).toBe(15);
expect(fatoora.timestamp.value).toBe('2021-07-12T14:25:09Z');
```
---------------
