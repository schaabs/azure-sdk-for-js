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
import * as Mappers from "../models/featuresMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Features. */
export class Features {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Features.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * [DEPRECATED NOTICE: This operation will soon be removed] Gets all the pattern features.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @deprecated This operation is deprecated. Please do not use it any longer.
   * @returns Promise<Models.FeaturesListApplicationVersionPatternFeaturesResponse>
   */
  listApplicationVersionPatternFeatures(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListApplicationVersionPatternFeaturesOptionalParams): Promise<Models.FeaturesListApplicationVersionPatternFeaturesResponse>;
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
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  listApplicationVersionPatternFeatures(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.PatternFeatureInfo[]>): void;
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
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  listApplicationVersionPatternFeatures(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: Models.FeaturesListApplicationVersionPatternFeaturesOptionalParams, callback: msRest.ServiceCallback<Models.PatternFeatureInfo[]>): void;
  listApplicationVersionPatternFeatures(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListApplicationVersionPatternFeaturesOptionalParams | msRest.ServiceCallback<Models.PatternFeatureInfo[]>, callback?: msRest.ServiceCallback<Models.PatternFeatureInfo[]>): Promise<Models.FeaturesListApplicationVersionPatternFeaturesResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      listApplicationVersionPatternFeaturesOperationSpec,
      callback) as Promise<Models.FeaturesListApplicationVersionPatternFeaturesResponse>;
  }

  /**
   * Creates a new phraselist feature in a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistCreateObject A Phraselist object containing Name, comma-separated Phrases and
   * the isExchangeable boolean. Default value for isExchangeable is true.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesAddPhraseListResponse>
   */
  addPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistCreateObject: Models.PhraselistCreateObject, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesAddPhraseListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistCreateObject A Phraselist object containing Name, comma-separated Phrases and
   * the isExchangeable boolean. Default value for isExchangeable is true.
   * @param callback The callback
   */
  addPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistCreateObject: Models.PhraselistCreateObject, callback: msRest.ServiceCallback<number>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistCreateObject A Phraselist object containing Name, comma-separated Phrases and
   * the isExchangeable boolean. Default value for isExchangeable is true.
   * @param options The optional parameters
   * @param callback The callback
   */
  addPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistCreateObject: Models.PhraselistCreateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  addPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistCreateObject: Models.PhraselistCreateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<number>, callback?: msRest.ServiceCallback<number>): Promise<Models.FeaturesAddPhraseListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        phraselistCreateObject,
        options
      },
      addPhraseListOperationSpec,
      callback) as Promise<Models.FeaturesAddPhraseListResponse>;
  }

  /**
   * Gets all the phraselist features in a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListPhraseListsResponse>
   */
  listPhraseLists(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListPhraseListsOptionalParams): Promise<Models.FeaturesListPhraseListsResponse>;
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
  listPhraseLists(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.PhraseListFeatureInfo[]>): void;
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
  listPhraseLists(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: Models.FeaturesListPhraseListsOptionalParams, callback: msRest.ServiceCallback<Models.PhraseListFeatureInfo[]>): void;
  listPhraseLists(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListPhraseListsOptionalParams | msRest.ServiceCallback<Models.PhraseListFeatureInfo[]>, callback?: msRest.ServiceCallback<Models.PhraseListFeatureInfo[]>): Promise<Models.FeaturesListPhraseListsResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      listPhraseListsOperationSpec,
      callback) as Promise<Models.FeaturesListPhraseListsResponse>;
  }

  /**
   * Gets all the extraction phraselist and pattern features in a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListResponse>
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListOptionalParams): Promise<Models.FeaturesListResponse>;
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
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.FeaturesResponseObject>): void;
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
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: Models.FeaturesListOptionalParams, callback: msRest.ServiceCallback<Models.FeaturesResponseObject>): void;
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.FeaturesListOptionalParams | msRest.ServiceCallback<Models.FeaturesResponseObject>, callback?: msRest.ServiceCallback<Models.FeaturesResponseObject>): Promise<Models.FeaturesListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FeaturesListResponse>;
  }

  /**
   * Gets phraselist feature info in a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesGetPhraseListResponse>
   */
  getPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesGetPhraseListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be retrieved.
   * @param callback The callback
   */
  getPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, callback: msRest.ServiceCallback<Models.PhraseListFeatureInfo>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PhraseListFeatureInfo>): void;
  getPhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PhraseListFeatureInfo>, callback?: msRest.ServiceCallback<Models.PhraseListFeatureInfo>): Promise<Models.FeaturesGetPhraseListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        phraselistId,
        options
      },
      getPhraseListOperationSpec,
      callback) as Promise<Models.FeaturesGetPhraseListResponse>;
  }

  /**
   * Updates the phrases, the state and the name of the phraselist feature in a version of the
   * application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be updated.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesUpdatePhraseListResponse>
   */
  updatePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: Models.FeaturesUpdatePhraseListOptionalParams): Promise<Models.FeaturesUpdatePhraseListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be updated.
   * @param callback The callback
   */
  updatePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be updated.
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options: Models.FeaturesUpdatePhraseListOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  updatePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: Models.FeaturesUpdatePhraseListOptionalParams | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.FeaturesUpdatePhraseListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        phraselistId,
        options
      },
      updatePhraseListOperationSpec,
      callback) as Promise<Models.FeaturesUpdatePhraseListResponse>;
  }

  /**
   * Deletes a phraselist feature from a version of the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesDeletePhraseListResponse>
   */
  deletePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesDeletePhraseListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be deleted.
   * @param callback The callback
   */
  deletePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param phraselistId The ID of the feature to be deleted.
   * @param options The optional parameters
   * @param callback The callback
   */
  deletePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deletePhraseList(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, phraselistId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.FeaturesDeletePhraseListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        phraselistId,
        options
      },
      deletePhraseListOperationSpec,
      callback) as Promise<Models.FeaturesDeletePhraseListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listApplicationVersionPatternFeaturesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/patterns",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
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
              className: "PatternFeatureInfo"
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

const addPhraseListOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/phraselists",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "phraselistCreateObject",
    mapper: {
      ...Mappers.PhraselistCreateObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listPhraseListsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/phraselists",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
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
              className: "PhraseListFeatureInfo"
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

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/features",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesResponseObject
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getPhraseListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/phraselists/{phraselistId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.phraselistId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PhraseListFeatureInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updatePhraseListOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/versions/{versionId}/phraselists/{phraselistId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.phraselistId
  ],
  requestBody: {
    parameterPath: [
      "options",
      "phraselistUpdateObject"
    ],
    mapper: Mappers.PhraselistUpdateObject
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

const deletePhraseListOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}/versions/{versionId}/phraselists/{phraselistId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.phraselistId
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
