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
import * as Models from "../models";
import * as Mappers from "../models/applicationsMappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";

/** Class representing a Applications. */
export class Applications {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Create a Applications.
   * @param {GraphRbacManagementClientContext} client Reference to the service client.
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Create a new application.
   * @param parameters The parameters for creating an application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsCreateResponse>
   */
  create(parameters: Models.ApplicationCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsCreateResponse>;
  /**
   * @param parameters The parameters for creating an application.
   * @param callback The callback
   */
  create(parameters: Models.ApplicationCreateParameters, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param parameters The parameters for creating an application.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(parameters: Models.ApplicationCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
  create(parameters: Models.ApplicationCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ApplicationsCreateResponse>;
  }

  /**
   * Lists applications by filter parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListResponse>
   */
  list(options?: Models.ApplicationsListOptionalParams): Promise<Models.ApplicationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ApplicationsListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  list(options?: Models.ApplicationsListOptionalParams | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationsListResponse>;
  }

  /**
   * Delete an application.
   * @param applicationObjectId Application object ID.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(applicationObjectId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param callback The callback
   */
  deleteMethod(applicationObjectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(applicationObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(applicationObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get an application by object ID.
   * @param applicationObjectId Application object ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsGetResponse>
   */
  get(applicationObjectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsGetResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param callback The callback
   */
  get(applicationObjectId: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(applicationObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
  get(applicationObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationsGetResponse>;
  }

  /**
   * Update an existing application.
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update an existing application.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  patch(applicationObjectId: string, parameters: Models.ApplicationUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update an existing application.
   * @param callback The callback
   */
  patch(applicationObjectId: string, parameters: Models.ApplicationUpdateParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param parameters Parameters to update an existing application.
   * @param options The optional parameters
   * @param callback The callback
   */
  patch(applicationObjectId: string, parameters: Models.ApplicationUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  patch(applicationObjectId: string, parameters: Models.ApplicationUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        parameters,
        options
      },
      patchOperationSpec,
      callback);
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @summary Directory objects that are owners of the application.
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListOwnersResponse>
   */
  listOwners(applicationObjectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListOwnersResponse>;
  /**
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param callback The callback
   */
  listOwners(applicationObjectId: string, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param applicationObjectId The object ID of the application for which to get owners.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwners(applicationObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwners(applicationObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.ApplicationsListOwnersResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        options
      },
      listOwnersOperationSpec,
      callback) as Promise<Models.ApplicationsListOwnersResponse>;
  }

  /**
   * Add an owner to an application.
   * @param applicationObjectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addOwner(applicationObjectId: string, parameters: Models.AddOwnerParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param callback The callback
   */
  addOwner(applicationObjectId: string, parameters: Models.AddOwnerParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The optional parameters
   * @param callback The callback
   */
  addOwner(applicationObjectId: string, parameters: Models.AddOwnerParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  addOwner(applicationObjectId: string, parameters: Models.AddOwnerParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        parameters,
        options
      },
      addOwnerOperationSpec,
      callback);
  }

  /**
   * Remove a member from owners.
   * @param applicationObjectId The object ID of the application from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  removeOwner(applicationObjectId: string, ownerObjectId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId The object ID of the application from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param callback The callback
   */
  removeOwner(applicationObjectId: string, ownerObjectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId The object ID of the application from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The optional parameters
   * @param callback The callback
   */
  removeOwner(applicationObjectId: string, ownerObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  removeOwner(applicationObjectId: string, ownerObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        ownerObjectId,
        options
      },
      removeOwnerOperationSpec,
      callback);
  }

  /**
   * Get the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListKeyCredentialsResponse>
   */
  listKeyCredentials(applicationObjectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListKeyCredentialsResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param callback The callback
   */
  listKeyCredentials(applicationObjectId: string, callback: msRest.ServiceCallback<Models.KeyCredentialListResult>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeyCredentials(applicationObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KeyCredentialListResult>): void;
  listKeyCredentials(applicationObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.KeyCredentialListResult>, callback?: msRest.ServiceCallback<Models.KeyCredentialListResult>): Promise<Models.ApplicationsListKeyCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        options
      },
      listKeyCredentialsOperationSpec,
      callback) as Promise<Models.ApplicationsListKeyCredentialsResponse>;
  }

  /**
   * Update the keyCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param value A collection of KeyCredentials.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateKeyCredentials(applicationObjectId: string, value: Models.KeyCredential[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param value A collection of KeyCredentials.
   * @param callback The callback
   */
  updateKeyCredentials(applicationObjectId: string, value: Models.KeyCredential[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param value A collection of KeyCredentials.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateKeyCredentials(applicationObjectId: string, value: Models.KeyCredential[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateKeyCredentials(applicationObjectId: string, value: Models.KeyCredential[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        value,
        options
      },
      updateKeyCredentialsOperationSpec,
      callback);
  }

  /**
   * Get the passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListPasswordCredentialsResponse>
   */
  listPasswordCredentials(applicationObjectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListPasswordCredentialsResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param callback The callback
   */
  listPasswordCredentials(applicationObjectId: string, callback: msRest.ServiceCallback<Models.PasswordCredentialListResult>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listPasswordCredentials(applicationObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PasswordCredentialListResult>): void;
  listPasswordCredentials(applicationObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PasswordCredentialListResult>, callback?: msRest.ServiceCallback<Models.PasswordCredentialListResult>): Promise<Models.ApplicationsListPasswordCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        options
      },
      listPasswordCredentialsOperationSpec,
      callback) as Promise<Models.ApplicationsListPasswordCredentialsResponse>;
  }

  /**
   * Update passwordCredentials associated with an application.
   * @param applicationObjectId Application object ID.
   * @param value A collection of PasswordCredentials.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updatePasswordCredentials(applicationObjectId: string, value: Models.PasswordCredential[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param applicationObjectId Application object ID.
   * @param value A collection of PasswordCredentials.
   * @param callback The callback
   */
  updatePasswordCredentials(applicationObjectId: string, value: Models.PasswordCredential[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param applicationObjectId Application object ID.
   * @param value A collection of PasswordCredentials.
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePasswordCredentials(applicationObjectId: string, value: Models.PasswordCredential[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updatePasswordCredentials(applicationObjectId: string, value: Models.PasswordCredential[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        applicationObjectId,
        value,
        options
      },
      updatePasswordCredentialsOperationSpec,
      callback);
  }

  /**
   * Gets an object id for a given application id from the current tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsGetServicePrincipalsIdByAppIdResponse>
   */
  getServicePrincipalsIdByAppId(options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsGetServicePrincipalsIdByAppIdResponse>;
  /**
   * @param callback The callback
   */
  getServicePrincipalsIdByAppId(callback: msRest.ServiceCallback<Models.ServicePrincipalObjectResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getServicePrincipalsIdByAppId(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicePrincipalObjectResult>): void;
  getServicePrincipalsIdByAppId(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicePrincipalObjectResult>, callback?: msRest.ServiceCallback<Models.ServicePrincipalObjectResult>): Promise<Models.ApplicationsGetServicePrincipalsIdByAppIdResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getServicePrincipalsIdByAppIdOperationSpec,
      callback) as Promise<Models.ApplicationsGetServicePrincipalsIdByAppIdResponse>;
  }

  /**
   * Gets a list of applications from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListNextResponse>
   */
  listNext(nextLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListNextResponse>;
  /**
   * @param nextLink Next link for the list operation.
   * @param callback The callback
   */
  listNext(nextLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param nextLink Next link for the list operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listNext(nextLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationsListNextResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @summary Directory objects that are owners of the application.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListOwnersNextResponse>
   */
  listOwnersNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListOwnersNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOwnersNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwnersNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwnersNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.ApplicationsListOwnersNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOwnersNextOperationSpec,
      callback) as Promise<Models.ApplicationsListOwnersNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/applications",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplicationCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/applications",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{tenantID}/applications/{applicationObjectId}",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/applications/{applicationObjectId}",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const patchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/applications/{applicationObjectId}",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplicationUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOwnersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/applications/{applicationObjectId}/owners",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const addOwnerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/applications/{applicationObjectId}/$links/owners",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AddOwnerParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const removeOwnerOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.ownerObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listKeyCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/applications/{applicationObjectId}/keyCredentials",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.KeyCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updateKeyCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/applications/{applicationObjectId}/keyCredentials",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.KeyCredentialsUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listPasswordCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PasswordCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updatePasswordCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/applications/{applicationObjectId}/passwordCredentials",
  urlParameters: [
    Parameters.applicationObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.PasswordCredentialsUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const getServicePrincipalsIdByAppIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId",
  urlParameters: [
    Parameters.tenantID,
    Parameters.applicationID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalObjectResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/{nextLink}",
  urlParameters: [
    Parameters.nextLink,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOwnersNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://graph.windows.net",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};
