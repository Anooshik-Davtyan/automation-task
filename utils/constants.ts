// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

export class Constants {
    static USER = {
        FIRST_NAME: 'Ann',
        LAST_NAME: 'James',
        COUNTRY: 'United States',
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
        COMPANY: 'Company',
        ADDRESS: 'Los Angeles, CA 90001',
        SECOND_ADDRESS: 'Los Angeles, CA 90001',
        MOBILE_NUMBER: '(000) 000-0000',
        STATE: 'CA',
        CITY: 'Los Angeles',
        ZIP: '90001',
        DOB: {
            DAY: '1',
            MONTH: 'January',
            YEAR: '2000'
        },
        CARD_INFO: {
            CARD_NAME: process.env.CARD_NAME!,
            CARD_NUMBER: Number(process.env.CARD_NUMBER),
            CVC: Number(process.env.CVC),
            EXPIRATION_MONTH: Number(process.env.EXPIRATION_MONTH),
            EXPIRATION_YEAR: Number(process.env.EXPIRATION_YEAR),
        }
    };

    static FIRST_NAMES = ['Ann', 'Sara', 'John', 'Hannah', 'Jack', 'Lara', 'Lea', 'Jane'];
    static LAST_NAMES = ['James', 'Parker', 'Smith', 'Brown', 'Johnson', 'Williams', 'Miller', 'Davis'];

    static randomFirstName(): string {
        return this.FIRST_NAMES[this.randomNumber(0, this.FIRST_NAMES.length - 1)];
    }

    static randomLastName(): string {
        return this.LAST_NAMES[this.randomNumber(0, this.LAST_NAMES.length - 1)];
    }

    static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static randomEmail(): string {
        return `${this.randomString(10)}@gmail.com`;
    }

    static randomString(length = 10): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return result;
    }
}