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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Models = require("./models");
exports.AutoRestValidationTestModels = Models;
const Mappers = require("./models/mappers");
exports.AutoRestValidationTestMappers = Mappers;
const WebResource = msRest.WebResource;
const packageName = "";
const packageVersion = "";
class AutoRestValidationTest extends msRest.ServiceClient {
    /**
     * @class
     * Initializes a new instance of the AutoRestValidationTest class.
     * @constructor
     *
     * @param {string} subscriptionId - Subscription ID.
     *
     * @param {string} apiVersion - Required string following pattern \d{2}-\d{2}-\d{4}
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
    constructor(subscriptionId, apiVersion, baseUri, options) {
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('\'subscriptionId\' cannot be null.');
        }
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('\'apiVersion\' cannot be null.');
        }
        if (!options)
            options = {};
        super(undefined, options);
        this.baseUri = baseUri;
        if (!this.baseUri) {
            this.baseUri = 'http://localhost';
        }
        this.subscriptionId = subscriptionId;
        this.apiVersion = apiVersion;
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        this.serializer = new msRest.Serializer(Mappers);
    }
    // methods on the client.
    /**
     * Validates input parameters on the method. See swagger for details.
     *
     * @param {string} resourceGroupName Required string between 3 and 10 chars
     * with pattern [a-zA-Z0-9]+.
     *
     * @param {number} id Required int multiple of 10 from 100 to 1000.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this;
            // Validate
            try {
                if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
                    throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
                }
                if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
                    throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
                }
                if (resourceGroupName !== null && resourceGroupName !== undefined) {
                    if (resourceGroupName.length > 10) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
                    }
                    if (resourceGroupName.length < 3) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
                    }
                    if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
                    }
                }
                if (id === null || id === undefined || typeof id !== 'number') {
                    throw new Error('id cannot be null or undefined and it must be of type number.');
                }
                if (id !== null && id !== undefined) {
                    if (id > 1000) {
                        throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
                    }
                    if (id < 100) {
                        throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
                    }
                    if (id % 10 !== 0) {
                        throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
                    }
                }
                if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
                    throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
                }
                if (this.apiVersion !== null && this.apiVersion !== undefined) {
                    if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null) {
                        throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
                    }
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
            requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
            requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
            requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
            let queryParamsArray = [];
            queryParamsArray.push('apiVersion=' + encodeURIComponent(this.apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            httpRequest.body = null;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Product;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    // methods on the client.
    /**
     * Validates body parameters on the method. See swagger for details.
     *
     * @param {string} resourceGroupName Required string between 3 and 10 chars
     * with pattern [a-zA-Z0-9]+.
     *
     * @param {number} id Required int multiple of 10 from 100 to 1000.
     *
     * @param {AutoRestValidationTestValidationOfBodyOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this;
            let body = (options && options.body !== undefined) ? options.body : undefined;
            // Validate
            try {
                if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
                    throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
                }
                if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
                    throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
                }
                if (resourceGroupName !== null && resourceGroupName !== undefined) {
                    if (resourceGroupName.length > 10) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 10');
                    }
                    if (resourceGroupName.length < 3) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 3');
                    }
                    if (resourceGroupName.match(/[a-zA-Z0-9]+/) === null) {
                        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9]+/');
                    }
                }
                if (id === null || id === undefined || typeof id !== 'number') {
                    throw new Error('id cannot be null or undefined and it must be of type number.');
                }
                if (id !== null && id !== undefined) {
                    if (id > 1000) {
                        throw new Error('"id" should satisfy the constraint - "InclusiveMaximum": 1000');
                    }
                    if (id < 100) {
                        throw new Error('"id" should satisfy the constraint - "InclusiveMinimum": 100');
                    }
                    if (id % 10 !== 0) {
                        throw new Error('"id" should satisfy the constraint - "MultipleOf": 10');
                    }
                }
                if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
                    throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
                }
                if (this.apiVersion !== null && this.apiVersion !== undefined) {
                    if (this.apiVersion.match(/\d{2}-\d{2}-\d{4}/) === null) {
                        throw new Error('"this.apiVersion" should satisfy the constraint - "Pattern": /\d{2}-\d{2}-\d{4}/');
                    }
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'fakepath/{subscriptionId}/{resourceGroupName}/{id}';
            requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
            requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
            requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
            let queryParamsArray = [];
            queryParamsArray.push('apiVersion=' + encodeURIComponent(this.apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'PUT';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Serialize Request
            let requestContent = null;
            let requestModel = null;
            try {
                if (body !== null && body !== undefined) {
                    let requestModelMapper = Mappers.Product;
                    requestModel = client.serializer.serialize(requestModelMapper, body, 'body');
                    requestContent = JSON.stringify(requestModel);
                }
            }
            catch (error) {
                let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
                    `payload - ${JSON.stringify(body, null, 2)}.`);
                return Promise.reject(serializationError);
            }
            httpRequest.body = requestContent;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Product;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    // methods on the client.
    /**
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithConstantInPathWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this;
            let constantParam = 'constant';
            // Construct URL
            let baseUrl = this.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
            requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            httpRequest.body = null;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    // methods on the client.
    /**
     * @param {AutoRestValidationTestPostWithConstantInBodyOptionalParams}
     * [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    postWithConstantInBodyWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this;
            let body = (options && options.body !== undefined) ? options.body : undefined;
            let constantParam = 'constant';
            // Construct URL
            let baseUrl = this.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'validation/constantsInPath/{constantParam}/value';
            requestUrl = requestUrl.replace('{constantParam}', encodeURIComponent(constantParam));
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'POST';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Serialize Request
            let requestContent = null;
            let requestModel = null;
            try {
                if (body !== null && body !== undefined) {
                    let requestModelMapper = Mappers.Product;
                    requestModel = client.serializer.serialize(requestModelMapper, body, 'body');
                    requestContent = JSON.stringify(requestModel);
                }
            }
            catch (error) {
                let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
                    `payload - ${JSON.stringify(body, null, 2)}.`);
                return Promise.reject(serializationError);
            }
            httpRequest.body = requestContent;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Product;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    validationOfMethodParameters(resourceGroupName, id, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    validationOfBody(resourceGroupName, id, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getWithConstantInPath(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getWithConstantInPathWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getWithConstantInPathWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    postWithConstantInBody(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.postWithConstantInBodyWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.postWithConstantInBodyWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.AutoRestValidationTest = AutoRestValidationTest;
//# sourceMappingURL=autoRestValidationTest.js.map