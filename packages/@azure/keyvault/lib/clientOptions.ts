// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

/**
 * Retry options interface.
 *
 * @export
 * @interface IRetryOptions
 */
export interface IRetryOptions {
  /**
   * Optional. Max try number of attempts, default is 3.
   * A value of 1 means 1 try and no retries.
   * A value smaller than 1 means default retry number of attempts.
   *
   * @type {number}
   * @memberof IRetryOptions
   */
  readonly retryCount?: number;

  /**
   * Optional. Specifies the amount of delay to use before retrying an operation (default is 30s or 30 * 1000ms).
   * The delay increases exponentially with each retry up to a maximum specified by maxRetryDelayInMs.
   *
   * @type {number}
   * @memberof IRetryOptions
   */
  readonly retryIntervalInMS?: number;

  /**
   * Optional. Specifies the maximum delay allowed before retrying an operation (default is 90s or 90 * 1000ms).
   *
   * @type {number}
   * @memberof IRetryOptions
   */
  readonly maxRetryDelayInMs?: number;
}

/**
 * Interface of proxy policy options.
 *
 * @export
 * @interface IProxyOptions
 */

export interface IProxyOptions {
  proxySettings? : string
}