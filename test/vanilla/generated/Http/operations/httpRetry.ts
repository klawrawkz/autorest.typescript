/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/httpRetryMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpRetry. */
export class HttpRetry {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpRetry.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 408 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  head408(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  head408(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head408(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  head408(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head408OperationSpec,
      callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  put500(options?: Models.HttpRetryPut500OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  put500(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  put500(options: Models.HttpRetryPut500OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  put500(options?: Models.HttpRetryPut500OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put500OperationSpec,
      callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  patch500(options?: Models.HttpRetryPatch500OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  patch500(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  patch500(options: Models.HttpRetryPatch500OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  patch500(options?: Models.HttpRetryPatch500OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch500OperationSpec,
      callback);
  }

  /**
   * Return 502 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  get502(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  get502(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get502(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  get502(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get502OperationSpec,
      callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  post503(options?: Models.HttpRetryPost503OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  post503(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  post503(options: Models.HttpRetryPost503OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  post503(options?: Models.HttpRetryPost503OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post503OperationSpec,
      callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  delete503(options?: Models.HttpRetryDelete503OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  delete503(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  delete503(options: Models.HttpRetryDelete503OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  delete503(options?: Models.HttpRetryDelete503OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete503OperationSpec,
      callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  put504(options?: Models.HttpRetryPut504OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  put504(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  put504(options: Models.HttpRetryPut504OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  put504(options?: Models.HttpRetryPut504OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put504OperationSpec,
      callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  patch504(options?: Models.HttpRetryPatch504OptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  patch504(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  patch504(options: Models.HttpRetryPatch504OptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  patch504(options?: Models.HttpRetryPatch504OptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch504OperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const head408OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/retry/408",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put500OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const patch500OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get502OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "http/retry/502",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post503OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete503OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put504OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const patch504OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
