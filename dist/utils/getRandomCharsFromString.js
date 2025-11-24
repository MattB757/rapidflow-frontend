"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharsFromString = void 0;
const getRandomCharsFromString = (str, length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length);
        result += str[randomIndex];
    }
    return result.toUpperCase();
};
exports.getRandomCharsFromString = getRandomCharsFromString;
