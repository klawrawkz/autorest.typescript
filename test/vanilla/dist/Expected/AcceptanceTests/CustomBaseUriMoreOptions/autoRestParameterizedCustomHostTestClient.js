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
exports.AutoRestParameterizedCustomHostTestModels = Models;
const Mappers = require("./models/mappers");
exports.AutoRestParameterizedCustomHostTestMappers = Mappers;
const operations = require("./operations");
const packageName = "";
const packageVersion = "";
class AutoRestParameterizedCustomHostTestClient extends msRest.ServiceClient {
    /**
     * @class
     * Initializes a new instance of the AutoRestParameterizedCustomHostTestClient class.
     * @constructor
     *
     * @param {string} subscriptionId - The subscription id with value 'test12'.
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
     * @param {string} [options.dnsSuffix] - A string value that is used as a global part of the parameterized host. Default value 'host'.
     *
     */
    constructor(subscriptionId, options) {
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('\'subscriptionId\' cannot be null.');
        }
        if (!options)
            options = {};
        super(undefined, options);
        this.dnsSuffix = 'host';
        this.baseUri = '{vault}{secret}{dnsSuffix}';
        this.subscriptionId = subscriptionId;
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        if (options.dnsSuffix !== null && options.dnsSuffix !== undefined) {
            this.dnsSuffix = options.dnsSuffix;
        }
        this.paths = new operations.Paths(this);
        this.serializer = new msRest.Serializer(Mappers);
    }
}
exports.AutoRestParameterizedCustomHostTestClient = AutoRestParameterizedCustomHostTestClient;
//# sourceMappingURL=autoRestParameterizedCustomHostTestClient.js.map