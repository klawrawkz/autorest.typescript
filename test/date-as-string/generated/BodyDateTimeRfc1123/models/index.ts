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


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * Contains response data for the getNull operation.
 */
export interface Datetimerfc1123GetNullResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getInvalid operation.
 */
export interface Datetimerfc1123GetInvalidResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getOverflow operation.
 */
export interface Datetimerfc1123GetOverflowResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getUnderflow operation.
 */
export interface Datetimerfc1123GetUnderflowResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getUtcLowercaseMaxDateTime operation.
 */
export interface Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getUtcUppercaseMaxDateTime operation.
 */
export interface Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}

/**
 * Contains response data for the getUtcMinDateTime operation.
 */
export interface Datetimerfc1123GetUtcMinDateTimeResponse extends msRest.HttpResponse {
  /**
   * The response body as text (string format)
   */
  bodyAsText: string;
  /**
   * The response body as parsed JSON or XML
   */
  parsedBody: string;
}
