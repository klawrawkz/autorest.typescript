/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";

const packageName = "";
const packageVersion = "";

class AutoRestHttpInfrastructureTestService extends msRest.ServiceClient {
  baseUri: string;

  // Operation groups
  httpFailure: operations.HttpFailure;
  httpSuccess: operations.HttpSuccess;
  httpRedirects: operations.HttpRedirects;
  httpClientFailure: operations.HttpClientFailure;
  httpServerFailure: operations.HttpServerFailure;
  httpRetry: operations.HttpRetry;
  multipleResponses: operations.MultipleResponses;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestHttpInfrastructureTestService class.
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
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {

    if (!options) options = {};

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.httpFailure = new operations.HttpFailure(this);
    this.httpSuccess = new operations.HttpSuccess(this);
    this.httpRedirects = new operations.HttpRedirects(this);
    this.httpClientFailure = new operations.HttpClientFailure(this);
    this.httpServerFailure = new operations.HttpServerFailure(this);
    this.httpRetry = new operations.HttpRetry(this);
    this.multipleResponses = new operations.MultipleResponses(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
}

export { AutoRestHttpInfrastructureTestService, Models as AutoRestHttpInfrastructureTestServiceModels, Mappers as AutoRestHttpInfrastructureTestServiceMappers };
