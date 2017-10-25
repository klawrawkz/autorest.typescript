"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Models = require("./models");
exports.AutoRestSwaggerBATdictionaryServiceModels = Models;
const Mappers = require("./models/mappers");
exports.AutoRestSwaggerBATdictionaryServiceMappers = Mappers;
const operations = require("./operations");
const packageName = "";
const packageVersion = "";
class AutoRestSwaggerBATdictionaryService extends msRest.ServiceClient {
    /**
     * @class
     * Initializes a new instance of the AutoRestSwaggerBATdictionaryService class.
     * @constructor
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     */
    constructor(baseUri, options) {
        if (!options)
            options = {};
        super(undefined, options);
        this.baseUri = baseUri;
        if (!this.baseUri) {
            this.baseUri = 'http://localhost';
        }
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        this.dictionary = new operations.Dictionary(this);
        this.serializer = new msRest.Serializer(Mappers);
    }
}
exports.AutoRestSwaggerBATdictionaryService = AutoRestSwaggerBATdictionaryService;
//# sourceMappingURL=autoRestSwaggerBATdictionaryService.js.map