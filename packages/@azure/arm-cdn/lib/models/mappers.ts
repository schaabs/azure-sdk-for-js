/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const PeeringSku: msRest.CompositeMapper = {
  serializedName: "PeeringSku",
  type: {
    name: "Composite",
    className: "PeeringSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BgpSession: msRest.CompositeMapper = {
  serializedName: "BgpSession",
  type: {
    name: "Composite",
    className: "BgpSession",
    modelProperties: {
      sessionPrefixV4: {
        serializedName: "sessionPrefixV4",
        type: {
          name: "String"
        }
      },
      sessionPrefixV6: {
        serializedName: "sessionPrefixV6",
        type: {
          name: "String"
        }
      },
      microsoftSessionIPv4Address: {
        readOnly: true,
        serializedName: "microsoftSessionIPv4Address",
        type: {
          name: "String"
        }
      },
      microsoftSessionIPv6Address: {
        readOnly: true,
        serializedName: "microsoftSessionIPv6Address",
        type: {
          name: "String"
        }
      },
      peerSessionIPv4Address: {
        serializedName: "peerSessionIPv4Address",
        type: {
          name: "String"
        }
      },
      peerSessionIPv6Address: {
        serializedName: "peerSessionIPv6Address",
        type: {
          name: "String"
        }
      },
      sessionStateV4: {
        readOnly: true,
        serializedName: "sessionStateV4",
        type: {
          name: "String"
        }
      },
      sessionStateV6: {
        readOnly: true,
        serializedName: "sessionStateV6",
        type: {
          name: "String"
        }
      },
      maxPrefixesAdvertisedV4: {
        serializedName: "maxPrefixesAdvertisedV4",
        type: {
          name: "Number"
        }
      },
      maxPrefixesAdvertisedV6: {
        serializedName: "maxPrefixesAdvertisedV6",
        type: {
          name: "Number"
        }
      },
      md5AuthenticationKey: {
        serializedName: "md5AuthenticationKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectConnection: msRest.CompositeMapper = {
  serializedName: "DirectConnection",
  type: {
    name: "Composite",
    className: "DirectConnection",
    modelProperties: {
      bandwidthInMbps: {
        serializedName: "bandwidthInMbps",
        type: {
          name: "Number"
        }
      },
      provisionedBandwidthInMbps: {
        serializedName: "provisionedBandwidthInMbps",
        type: {
          name: "Number"
        }
      },
      peeringDBFacilityId: {
        serializedName: "peeringDBFacilityId",
        type: {
          name: "Number"
        }
      },
      connectionState: {
        readOnly: true,
        serializedName: "connectionState",
        type: {
          name: "String"
        }
      },
      bgpSession: {
        serializedName: "bgpSession",
        type: {
          name: "Composite",
          className: "BgpSession"
        }
      }
    }
  }
};

export const PeeringPropertiesDirect: msRest.CompositeMapper = {
  serializedName: "PeeringPropertiesDirect",
  type: {
    name: "Composite",
    className: "PeeringPropertiesDirect",
    modelProperties: {
      connections: {
        serializedName: "connections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DirectConnection"
            }
          }
        }
      },
      peerAsn: {
        serializedName: "peerAsn",
        type: {
          name: "Number"
        }
      },
      useForPeeringService: {
        serializedName: "useForPeeringService",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ExchangeConnection: msRest.CompositeMapper = {
  serializedName: "ExchangeConnection",
  type: {
    name: "Composite",
    className: "ExchangeConnection",
    modelProperties: {
      peeringDBFacilityId: {
        serializedName: "peeringDBFacilityId",
        type: {
          name: "Number"
        }
      },
      connectionState: {
        readOnly: true,
        serializedName: "connectionState",
        type: {
          name: "String"
        }
      },
      bgpSession: {
        serializedName: "bgpSession",
        type: {
          name: "Composite",
          className: "BgpSession"
        }
      }
    }
  }
};

export const PeeringPropertiesExchange: msRest.CompositeMapper = {
  serializedName: "PeeringPropertiesExchange",
  type: {
    name: "Composite",
    className: "PeeringPropertiesExchange",
    modelProperties: {
      connections: {
        serializedName: "connections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExchangeConnection"
            }
          }
        }
      },
      peerAsn: {
        serializedName: "peerAsn",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Peering: msRest.CompositeMapper = {
  serializedName: "Peering",
  type: {
    name: "Composite",
    className: "Peering",
    modelProperties: {
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "PeeringSku"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      direct: {
        serializedName: "properties.direct",
        type: {
          name: "Composite",
          className: "PeeringPropertiesDirect"
        }
      },
      exchange: {
        serializedName: "properties.exchange",
        type: {
          name: "Composite",
          className: "PeeringPropertiesExchange"
        }
      },
      peeringLocation: {
        serializedName: "properties.peeringLocation",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplayInfo: msRest.CompositeMapper = {
  serializedName: "OperationDisplayInfo",
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      },
      isDataAction: {
        readOnly: true,
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ContactInfo: msRest.CompositeMapper = {
  serializedName: "ContactInfo",
  type: {
    name: "Composite",
    className: "ContactInfo",
    modelProperties: {
      emails: {
        serializedName: "emails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PeerAsn: msRest.CompositeMapper = {
  serializedName: "PeerAsn",
  type: {
    name: "Composite",
    className: "PeerAsn",
    modelProperties: {
      peerAsn: {
        serializedName: "properties.peerAsn",
        type: {
          name: "Number"
        }
      },
      peerContactInfo: {
        serializedName: "properties.peerContactInfo",
        type: {
          name: "Composite",
          className: "ContactInfo"
        }
      },
      peerName: {
        serializedName: "properties.peerName",
        type: {
          name: "String"
        }
      },
      validationState: {
        serializedName: "properties.validationState",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectPeeringFacility: msRest.CompositeMapper = {
  serializedName: "DirectPeeringFacility",
  type: {
    name: "Composite",
    className: "DirectPeeringFacility",
    modelProperties: {
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      peeringDBFacilityId: {
        serializedName: "peeringDBFacilityId",
        type: {
          name: "Number"
        }
      },
      peeringDBFacilityLink: {
        serializedName: "peeringDBFacilityLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PeeringBandwidthOffer: msRest.CompositeMapper = {
  serializedName: "PeeringBandwidthOffer",
  type: {
    name: "Composite",
    className: "PeeringBandwidthOffer",
    modelProperties: {
      offerName: {
        serializedName: "offerName",
        type: {
          name: "String"
        }
      },
      valueInMbps: {
        serializedName: "valueInMbps",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PeeringLocationPropertiesDirect: msRest.CompositeMapper = {
  serializedName: "PeeringLocationPropertiesDirect",
  type: {
    name: "Composite",
    className: "PeeringLocationPropertiesDirect",
    modelProperties: {
      peeringFacilities: {
        serializedName: "peeringFacilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DirectPeeringFacility"
            }
          }
        }
      },
      bandwidthOffers: {
        serializedName: "bandwidthOffers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PeeringBandwidthOffer"
            }
          }
        }
      }
    }
  }
};

export const ExchangePeeringFacility: msRest.CompositeMapper = {
  serializedName: "ExchangePeeringFacility",
  type: {
    name: "Composite",
    className: "ExchangePeeringFacility",
    modelProperties: {
      exchangeName: {
        serializedName: "exchangeName",
        type: {
          name: "String"
        }
      },
      bandwidthInMbps: {
        serializedName: "bandwidthInMbps",
        type: {
          name: "Number"
        }
      },
      microsoftIPv4Address: {
        serializedName: "microsoftIPv4Address",
        type: {
          name: "String"
        }
      },
      microsoftIPv6Address: {
        serializedName: "microsoftIPv6Address",
        type: {
          name: "String"
        }
      },
      facilityIPv4Prefix: {
        serializedName: "facilityIPv4Prefix",
        type: {
          name: "String"
        }
      },
      facilityIPv6Prefix: {
        serializedName: "facilityIPv6Prefix",
        type: {
          name: "String"
        }
      },
      peeringDBFacilityId: {
        serializedName: "peeringDBFacilityId",
        type: {
          name: "Number"
        }
      },
      peeringDBFacilityLink: {
        serializedName: "peeringDBFacilityLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PeeringLocationPropertiesExchange: msRest.CompositeMapper = {
  serializedName: "PeeringLocationPropertiesExchange",
  type: {
    name: "Composite",
    className: "PeeringLocationPropertiesExchange",
    modelProperties: {
      peeringFacilities: {
        serializedName: "peeringFacilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExchangePeeringFacility"
            }
          }
        }
      }
    }
  }
};

export const PeeringLocation: msRest.CompositeMapper = {
  serializedName: "PeeringLocation",
  type: {
    name: "Composite",
    className: "PeeringLocation",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      direct: {
        serializedName: "properties.direct",
        type: {
          name: "Composite",
          className: "PeeringLocationPropertiesDirect"
        }
      },
      exchange: {
        serializedName: "properties.exchange",
        type: {
          name: "Composite",
          className: "PeeringLocationPropertiesExchange"
        }
      },
      peeringLocation: {
        serializedName: "properties.peeringLocation",
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "properties.country",
        type: {
          name: "String"
        }
      },
      azureRegion: {
        serializedName: "properties.azureRegion",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceTags: msRest.CompositeMapper = {
  serializedName: "ResourceTags",
  type: {
    name: "Composite",
    className: "ResourceTags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PeeringListResult: msRest.CompositeMapper = {
  serializedName: "PeeringListResult",
  type: {
    name: "Composite",
    className: "PeeringListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Peering"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PeerAsnListResult: msRest.CompositeMapper = {
  serializedName: "PeerAsnListResult",
  type: {
    name: "Composite",
    className: "PeerAsnListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PeerAsn"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PeeringLocationListResult: msRest.CompositeMapper = {
  serializedName: "PeeringLocationListResult",
  type: {
    name: "Composite",
    className: "PeeringLocationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PeeringLocation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
