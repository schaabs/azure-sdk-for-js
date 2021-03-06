/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageClientContext } from "./storageClientContext";

class StorageClient extends StorageClientContext {
  // Operation groups
  service: operations.Service;
  queue: operations.Queue;
  messages: operations.Messages;
  messageId: operations.MessageId;

  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, queue or message that is the targe of the desired
   * operation.
   * @param [options] The parameter options
   */
  constructor(url: string, options?: msRest.ServiceClientOptions) {
    super(url, options);
    this.service = new operations.Service(this);
    this.queue = new operations.Queue(this);
    this.messages = new operations.Messages(this);
    this.messageId = new operations.MessageId(this);
  }
}

// Operation Specifications

export {
  StorageClient,
  StorageClientContext,
  Models as StorageModels,
  Mappers as StorageMappers
};
export * from "./operations";
