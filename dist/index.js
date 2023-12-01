"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCategories = exports.fetchNews = void 0;
require("server-only");
const axios_1 = __importDefault(require("axios"));
//News
const getNews = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const result = yield axios_1.default.get('https://blogthing.starko.me/api/v1', {
            headers: {
                'blogthing-api-key': process.env.BLOGTHING_API_KEY
            },
            params: Object.assign({ simpleMode: 'true' }, params),
            withCredentials: true
        });
        return (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.data;
    }
    catch (error) {
        return { error: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data };
    }
});
function fetchNews(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = params.page || 1;
        const limit = params.limit || 1;
        const news = yield getNews(Object.assign(Object.assign({}, params), { limit, page }));
        return news;
    });
}
exports.fetchNews = fetchNews;
//Categories
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get('https://blogthing.starko.me/api/v1/categories', {
            headers: {
                'blogthing-api-key': process.env.BLOGTHING_API_KEY
            },
            withCredentials: true
        });
        return result.data.data;
    }
    catch (error) {
        return { error: error.response.data };
    }
});
function fetchCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield getCategories();
        return categories;
    });
}
exports.fetchCategories = fetchCategories;
