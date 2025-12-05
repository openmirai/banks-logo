# Thai Banks Logo

A comprehensive collection of logos and metadata for 20 Thai banks and payment services, including PromptPay.

## Features

- Complete set of Thai bank logos in PNG format
- Bank names in both Thai and English
- Bank symbols and IDs
- TypeScript support with full type definitions
- ES6 module compatible
- Lightweight and easy to use

## Installation

```bash
pnpm add @openmirai/banks-logo
# or
yarn add @openmirai/banks-logo
# or
npm install @openmirai/banks-logo
```

## Usage

```javascript
import { bankLists } from '@openmirai/banks-logo'
import type { Bank } from '@openmirai/banks-logo'

// Access a specific bank
const kbank = bankLists.KBANK
console.log(kbank.name.en) // Output: Kasikorn Bank
console.log(kbank.symbol)  // Output: KBANK
console.log(kbank.icon)    // Output: https://raw.githubusercontent.com/openmirai/banks-logo/master/icons/KBANK.png

// List all banks
console.log(Object.keys(bankLists)) // Array of all bank symbols
```

```typescript
import { bankLists, type Bank } from '@openmirai/banks-logo'

const bank: Bank = bankLists.SCB
// TypeScript will provide full intellisense and type checking
```

## Available Banks

This package includes the following 20 Thai banks and services:

- **BAAC** - Bank for Agriculture and Agricultural Cooperatives (ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร)
- **BAY** - Krungsri Bank (ธนาคารกรุงศรีอยุธยา)
- **BBL** - Bangkok Bank (ธนาคารกรุงเทพ)
- **CIMB** - CIMB Thai Bank (ธนาคารซีไอเอ็มบี)
- **CITI** - Citibank (ธนาคารซิตี้แบงก์)
- **GHB** - Government Housing Bank (ธนาคารอาคารสงเคราะห์)
- **GSB** - Government Savings Bank (ธนาคารออมสิน)
- **HSBC** - HSBC (ธนาคารเอชเอสบีซี)
- **IBANK** - Islamic Bank of Thailand (ธนาคารอิสลามแห่งประเทศไทย)
- **ICBC** - ICBC Thai Commercial Bank (ธนาคารไอซีบีซี)
- **KBANK** - Kasikorn Bank (ธนาคารกสิกรไทย)
- **KKP** - Kiatnakin Phatra Bank (ธนาคารเกียรตินาคินภัทร)
- **KTB** - Krungthai Bank (ธนาคารกรุงไทย)
- **LHB** - LH Bank (ธนาคารแลนด์ แอนด์ เฮ้าส์)
- **PromptPay** - PromptPay (พร้อมเพย์)
- **SCB** - The Siam Commercial Bank (ธนาคารไทยพาณิชย์)
- **TCRB** - Thai Credit Bank (ธนาคารไทยเครดิต)
- **TISCO** - Tisco Bank (ธนาคารทิสโก้)
- **TTB** - TMBThanachart Bank (ธนาคารทีเอ็มบีธนชาต)
- **UOB** - United Overseas Bank (ธนาคารยูโอบี)

## Bank Data Structure

Each bank object contains:

- `id`: Bank identification number (string)
- `name`: Object with `th` (Thai) and `en` (English) names
- `symbol`: Bank symbol/code (string)
- `icon`: URL to the bank's logo PNG image

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
