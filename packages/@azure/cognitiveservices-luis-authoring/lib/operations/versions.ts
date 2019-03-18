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
import * as Mappers from "../models/versionsMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Versions. */
export class Versions {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Versions.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * Creates a new version from the selected version.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionCloneObject A model containing the new version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsCloneResponse>
   */
  clone(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionCloneObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase): Promise<Models.VersionsCloneResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionCloneObject A model containing the new version ID.
   * @param callback The callback
   */
  clone(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionCloneObject: Models.TaskUpdateObject, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionCloneObject A model containing the new version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  clone(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionCloneObject: Models.TaskUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  clone(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionCloneObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.VersionsCloneResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        versionCloneObject,
        options
      },
      cloneOperationSpec,
      callback) as Promise<Models.VersionsCloneResponse>;
  }

  /**
   * Gets a list of versions for this application ID.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsListResponse>
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, options?: Models.VersionsListOptionalParams): Promise<Models.VersionsListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param callback The callback
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, callback: msRest.ServiceCallback<Models.VersionInfo[]>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, options: Models.VersionsListOptionalParams, callback: msRest.ServiceCallback<Models.VersionInfo[]>): void;
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, options?: Models.VersionsListOptionalParams | msRest.ServiceCallback<Models.VersionInfo[]>, callback?: msRest.ServiceCallback<Models.VersionInfo[]>): Promise<Models.VersionsListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VersionsListResponse>;
  }

  /**
   * Gets the version information such as date created, last modified date, endpoint URL, count of
   * intents and entities, training and publishing status.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsGetResponse>
   */
  get(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.VersionsGetResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  get(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.VersionInfo>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VersionInfo>): void;
  get(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VersionInfo>, callback?: msRest.ServiceCallback<Models.VersionInfo>): Promise<Models.VersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VersionsGetResponse>;
  }

  /**
   * Updates the name or description of the application version.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionUpdateObject A model containing Name and Description of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsUpdateResponse>
   */
  update(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase): Promise<Models.VersionsUpdateResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionUpdateObject A model containing Name and Description of the application.
   * @param callback The callback
   */
  update(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param versionUpdateObject A model containing Name and Description of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.VersionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        versionUpdateObject,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.VersionsUpdateResponse>;
  }

  /**
   * Deletes an application version.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsDeleteMethodResponse>
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.VersionsDeleteMethodResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.VersionsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.VersionsDeleteMethodResponse>;
  }

  /**
   * Exports a LUIS application to JSON format.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsExportMethodResponse>
   */
  exportMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.VersionsExportMethodResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  exportMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LuisApp>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  exportMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LuisApp>): void;
  exportMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LuisApp>, callback?: msRest.ServiceCallback<Models.LuisApp>): Promise<Models.VersionsExportMethodResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      exportMethodOperationSpec,
      callback) as Promise<Models.VersionsExportMethodResponse>;
  }

  /**
   * Imports a new version into a LUIS application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param luisApp A LUIS application structure.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsImportMethodResponse>
   */
  importMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, luisApp: Models.LuisApp, options?: Models.VersionsImportMethodOptionalParams): Promise<Models.VersionsImportMethodResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param luisApp A LUIS application structure.
   * @param callback The callback
   */
  importMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, luisApp: Models.LuisApp, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param luisApp A LUIS application structure.
   * @param options The optional parameters
   * @param callback The callback
   */
  importMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, luisApp: Models.LuisApp, options: Models.VersionsImportMethodOptionalParams, callback: msRest.ServiceCallback<string>): void;
  importMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, luisApp: Models.LuisApp, options?: Models.VersionsImportMethodOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.VersionsImportMethodResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        luisApp,
        options
      },
      importMethodOperationSpec,
      callback) as Promise<Models.VersionsImportMethodResponse>;
  }

  /**
   * Deleted an unlabelled utterance in a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param utterance The utterance text to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.VersionsDeleteUnlabelledUtteranceResponse>
   */
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, utterance: string, options?: msRest.RequestOptionsBase): Promise<Models.VersionsDeleteUnlabelledUtteranceResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param utterance The utterance text to delete.
   * @param callback The callback
   */
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, utterance: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param utterance The utterance text to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, utterance: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, utterance: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.VersionsDeleteUnlabelledUtteranceResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        utterance,
        options
      },
      deleteUnlabelledUtteranceOperationSpec,
      callback) as Promise<Models.VersionsDeleteUnlabelledUtteranceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const cloneOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/clone",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "versionCloneObject",
    mapper: {
      ...Mappers.TaskUpdateObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VersionInfo"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VersionInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "versionUpdateObject",
    mapper: {
      ...Mappers.TaskUpdateObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const exportMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/export",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LuisApp
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const importMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/import",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId
  ],
  queryParameters: [
    Parameters.versionId1
  ],
  requestBody: {
    parameterPath: "luisApp",
    mapper: {
      ...Mappers.LuisApp,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteUnlabelledUtteranceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}/versions/{versionId}/suggest",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "utterance",
    mapper: {
      required: true,
      serializedName: "utterance",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
