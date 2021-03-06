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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/devicesMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a Devices. */
export class Devices {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a Devices.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the data box edge/gateway devices in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.DevicesListBySubscriptionOptionalParams): Promise<Models.DevicesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.DevicesListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  listBySubscription(options?: Models.DevicesListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): Promise<Models.DevicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.DevicesListBySubscriptionResponse>;
  }

  /**
   * Gets all the data box edge/gateway devices in a resource group.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.DevicesListByResourceGroupOptionalParams): Promise<Models.DevicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.DevicesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.DevicesListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): Promise<Models.DevicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DevicesListByResourceGroupResponse>;
  }

  /**
   * Gets the properties of the data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesGetResponse>
   */
  get(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesGetResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): void;
  get(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataBoxEdgeDevice>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): Promise<Models.DevicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DevicesGetResponse>;
  }

  /**
   * Creates or updates a Data Box Edge/Gateway resource.
   * @param deviceName The device name.
   * @param dataBoxEdgeDevice The resource object.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, dataBoxEdgeDevice: Models.DataBoxEdgeDevice, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,dataBoxEdgeDevice,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DevicesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modifies a Data Box Edge/Gateway resource.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesUpdateResponse>
   */
  update(deviceName: string, resourceGroupName: string, options?: Models.DevicesUpdateOptionalParams): Promise<Models.DevicesUpdateResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  update(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(deviceName: string, resourceGroupName: string, options: Models.DevicesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): void;
  update(deviceName: string, resourceGroupName: string, options?: Models.DevicesUpdateOptionalParams | msRest.ServiceCallback<Models.DataBoxEdgeDevice>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDevice>): Promise<Models.DevicesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.DevicesUpdateResponse>;
  }

  /**
   * @summary Downloads the updates on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  downloadUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDownloadUpdates(deviceName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates the additional information of a the data box edge/gateway device.
   * @param deviceName The device name.
   * @param parameters The additional information.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesCreateOrUpdateExtendedInfoResponse>
   */
  createOrUpdateExtendedInfo(deviceName: string, parameters: Models.DataBoxEdgeDeviceExtendedInfo, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesCreateOrUpdateExtendedInfoResponse>;
  /**
   * @param deviceName The device name.
   * @param parameters The additional information.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  createOrUpdateExtendedInfo(deviceName: string, parameters: Models.DataBoxEdgeDeviceExtendedInfo, resourceGroupName: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): void;
  /**
   * @param deviceName The device name.
   * @param parameters The additional information.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateExtendedInfo(deviceName: string, parameters: Models.DataBoxEdgeDeviceExtendedInfo, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): void;
  createOrUpdateExtendedInfo(deviceName: string, parameters: Models.DataBoxEdgeDeviceExtendedInfo, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): Promise<Models.DevicesCreateOrUpdateExtendedInfoResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        parameters,
        resourceGroupName,
        options
      },
      createOrUpdateExtendedInfoOperationSpec,
      callback) as Promise<Models.DevicesCreateOrUpdateExtendedInfoResponse>;
  }

  /**
   * Gets additional information for the specified data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesGetExtendedInformationResponse>
   */
  getExtendedInformation(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesGetExtendedInformationResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  getExtendedInformation(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getExtendedInformation(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): void;
  getExtendedInformation(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceExtendedInfo>): Promise<Models.DevicesGetExtendedInformationResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      getExtendedInformationOperationSpec,
      callback) as Promise<Models.DevicesGetExtendedInformationResponse>;
  }

  /**
   * @summary Installs the updates on the data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  installUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginInstallUpdates(deviceName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the network settings of the specified data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesGetNetworkSettingsResponse>
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesGetNetworkSettingsResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkSettings>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getNetworkSettings(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSettings>): void;
  getNetworkSettings(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkSettings>, callback?: msRest.ServiceCallback<Models.NetworkSettings>): Promise<Models.DevicesGetNetworkSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      getNetworkSettingsOperationSpec,
      callback) as Promise<Models.DevicesGetNetworkSettingsResponse>;
  }

  /**
   * @summary Scans for updates on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  scanForUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginScanForUpdates(deviceName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates the security settings on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param deviceAdminPassword Device administrator password as an encrypted string (encrypted using
   * RSA PKCS #1) is used to sign into the  local web UI of the device. The Actual password should
   * have at least 8 characters that are a combination of  uppercase, lowercase, numeric, and special
   * characters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createOrUpdateSecuritySettings(deviceName: string, resourceGroupName: string, deviceAdminPassword: Models.AsymmetricEncryptedSecret, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginCreateOrUpdateSecuritySettings(deviceName,resourceGroupName,deviceAdminPassword,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Gets information about the availability of updates based on the last scan of the
   * device. It also gets information about any ongoing download or install jobs on the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesGetUpdateSummaryResponse>
   */
  getUpdateSummary(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesGetUpdateSummaryResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  getUpdateSummary(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.UpdateSummary>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUpdateSummary(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UpdateSummary>): void;
  getUpdateSummary(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UpdateSummary>, callback?: msRest.ServiceCallback<Models.UpdateSummary>): Promise<Models.DevicesGetUpdateSummaryResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      getUpdateSummaryOperationSpec,
      callback) as Promise<Models.DevicesGetUpdateSummaryResponse>;
  }

  /**
   * Uploads registration certificate for the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param certificate The base64 encoded certificate raw data.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesUploadCertificateResponse>
   */
  uploadCertificate(deviceName: string, resourceGroupName: string, certificate: string, options?: Models.DevicesUploadCertificateOptionalParams): Promise<Models.DevicesUploadCertificateResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param certificate The base64 encoded certificate raw data.
   * @param callback The callback
   */
  uploadCertificate(deviceName: string, resourceGroupName: string, certificate: string, callback: msRest.ServiceCallback<Models.UploadCertificateResponse>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param certificate The base64 encoded certificate raw data.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadCertificate(deviceName: string, resourceGroupName: string, certificate: string, options: Models.DevicesUploadCertificateOptionalParams, callback: msRest.ServiceCallback<Models.UploadCertificateResponse>): void;
  uploadCertificate(deviceName: string, resourceGroupName: string, certificate: string, options?: Models.DevicesUploadCertificateOptionalParams | msRest.ServiceCallback<Models.UploadCertificateResponse>, callback?: msRest.ServiceCallback<Models.UploadCertificateResponse>): Promise<Models.DevicesUploadCertificateResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        certificate,
        options
      },
      uploadCertificateOperationSpec,
      callback) as Promise<Models.DevicesUploadCertificateResponse>;
  }

  /**
   * Creates or updates a Data Box Edge/Gateway resource.
   * @param deviceName The device name.
   * @param dataBoxEdgeDevice The resource object.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, dataBoxEdgeDevice: Models.DataBoxEdgeDevice, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        dataBoxEdgeDevice,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Downloads the updates on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDownloadUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      beginDownloadUpdatesOperationSpec,
      options);
  }

  /**
   * @summary Installs the updates on the data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginInstallUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      beginInstallUpdatesOperationSpec,
      options);
  }

  /**
   * @summary Scans for updates on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginScanForUpdates(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      beginScanForUpdatesOperationSpec,
      options);
  }

  /**
   * Updates the security settings on a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param deviceAdminPassword Device administrator password as an encrypted string (encrypted using
   * RSA PKCS #1) is used to sign into the  local web UI of the device. The Actual password should
   * have at least 8 characters that are a combination of  uppercase, lowercase, numeric, and special
   * characters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateSecuritySettings(deviceName: string, resourceGroupName: string, deviceAdminPassword: Models.AsymmetricEncryptedSecret, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        deviceAdminPassword,
        options
      },
      beginCreateOrUpdateSecuritySettingsOperationSpec,
      options);
  }

  /**
   * Gets all the data box edge/gateway devices in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): Promise<Models.DevicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.DevicesListBySubscriptionNextResponse>;
  }

  /**
   * Gets all the data box edge/gateway devices in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DevicesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DevicesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>, callback?: msRest.ServiceCallback<Models.DataBoxEdgeDeviceList>): Promise<Models.DevicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DevicesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDevice
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.DataBoxEdgeDevicePatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDevice
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateExtendedInfoOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/getExtendedInformation",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
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
      ...Mappers.DataBoxEdgeDeviceExtendedInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceExtendedInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getExtendedInformationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/getExtendedInformation",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceExtendedInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getNetworkSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/networkSettings/default",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getUpdateSummaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/updateSummary/default",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UpdateSummary
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const uploadCertificateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/uploadCertificate",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      authenticationType: [
        "options",
        "authenticationType"
      ],
      certificate: "certificate"
    },
    mapper: {
      ...Mappers.UploadCertificateRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UploadCertificateResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "dataBoxEdgeDevice",
    mapper: {
      ...Mappers.DataBoxEdgeDevice,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDevice
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDownloadUpdatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/downloadUpdates",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginInstallUpdatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/installUpdates",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginScanForUpdatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/scanForUpdates",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateSecuritySettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/securitySettings/default/update",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      deviceAdminPassword: "deviceAdminPassword"
    },
    mapper: {
      ...Mappers.SecuritySettings,
      required: true
    }
  },
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataBoxEdgeDeviceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
