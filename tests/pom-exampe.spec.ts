import {test, expect} from '@playwright/test';
import userJson from '../data/users.json' with {type: 'json'};
import marketJson from '../data/market.json' with {type: 'json'};
import {Market, User, Currency}from "../types";
import [LoginPage] from "../page/login-page";


const markets = marketJson as Market[];
const users = userJson as User[];

const standardUser = users.find((user) => user.role === "standard_user");

if(!standardUser) {
    throw new Error("data/users.json does not contain a user with role 'standard_user'.Check the data seed before running");

const currencySymbols: PartialRecord<Currency, string> = {
    MXN: "$",
    JPY: "¥",
    //SAR: "﷼",
    SAR: "ر.س",
}
// ejemplo sin test plan


    //completar