/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const StorageAccountCheckNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "StorageAccountCheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "StorageAccountCheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'Microsoft.Storage/storageAccounts',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "AccountNameInvalid",
            "AlreadyExists"
          ]
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
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
      type: {
        readOnly: true,
        serializedName: "type",
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
      }
    }
  }
};

export const StorageAccountCreateParameters: msRest.CompositeMapper = {
  serializedName: "StorageAccountCreateParameters",
  type: {
    name: "Composite",
    className: "StorageAccountCreateParameters",
    modelProperties: {
      ...Resource.type.modelProperties,
      accountType: {
        serializedName: "properties.accountType",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_ZRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Premium_LRS"
          ]
        }
      }
    }
  }
};

export const Bar: msRest.CompositeMapper = {
  serializedName: "Bar",
  type: {
    name: "Composite",
    className: "Bar",
    modelProperties: {
      recursivePoint: {
        serializedName: "RecursivePoint",
        type: {
          name: "Composite",
          className: "Endpoints"
        }
      }
    }
  }
};

export const Foo: msRest.CompositeMapper = {
  serializedName: "Foo",
  type: {
    name: "Composite",
    className: "Foo",
    modelProperties: {
      barPoint: {
        serializedName: "Bar\\.Point",
        type: {
          name: "Composite",
          className: "Bar"
        }
      }
    }
  }
};

export const Endpoints: msRest.CompositeMapper = {
  serializedName: "Endpoints",
  type: {
    name: "Composite",
    className: "Endpoints",
    modelProperties: {
      blob: {
        serializedName: "blob",
        type: {
          name: "String"
        }
      },
      queue: {
        serializedName: "queue",
        type: {
          name: "String"
        }
      },
      table: {
        serializedName: "table",
        type: {
          name: "String"
        }
      },
      dummyEndPoint: {
        serializedName: "dummyEndPoint",
        type: {
          name: "Composite",
          className: "Endpoints"
        }
      },
      fooPoint: {
        serializedName: "FooPoint",
        type: {
          name: "Composite",
          className: "Foo"
        }
      }
    }
  }
};

export const CustomDomain: msRest.CompositeMapper = {
  serializedName: "CustomDomain",
  type: {
    name: "Composite",
    className: "CustomDomain",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      useSubDomain: {
        serializedName: "useSubDomain",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StorageAccount: msRest.CompositeMapper = {
  serializedName: "StorageAccount",
  type: {
    name: "Composite",
    className: "StorageAccount",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "Creating",
            "ResolvingDNS",
            "Succeeded"
          ]
        }
      },
      accountType: {
        serializedName: "properties.accountType",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_ZRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Premium_LRS"
          ]
        }
      },
      primaryEndpoints: {
        serializedName: "properties.primaryEndpoints",
        type: {
          name: "Composite",
          className: "Endpoints"
        }
      },
      primaryLocation: {
        serializedName: "properties.primaryLocation",
        type: {
          name: "String"
        }
      },
      statusOfPrimary: {
        serializedName: "properties.statusOfPrimary",
        type: {
          name: "Enum",
          allowedValues: [
            "Available",
            "Unavailable"
          ]
        }
      },
      lastGeoFailoverTime: {
        serializedName: "properties.lastGeoFailoverTime",
        type: {
          name: "DateTime"
        }
      },
      secondaryLocation: {
        serializedName: "properties.secondaryLocation",
        type: {
          name: "String"
        }
      },
      statusOfSecondary: {
        serializedName: "properties.statusOfSecondary",
        type: {
          name: "Enum",
          allowedValues: [
            "Available",
            "Unavailable"
          ]
        }
      },
      creationTime: {
        serializedName: "properties.creationTime",
        type: {
          name: "DateTime"
        }
      },
      customDomain: {
        serializedName: "properties.customDomain",
        type: {
          name: "Composite",
          className: "CustomDomain"
        }
      },
      secondaryEndpoints: {
        serializedName: "properties.secondaryEndpoints",
        type: {
          name: "Composite",
          className: "Endpoints"
        }
      }
    }
  }
};

export const StorageAccountKeys: msRest.CompositeMapper = {
  serializedName: "StorageAccountKeys",
  type: {
    name: "Composite",
    className: "StorageAccountKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageAccountUpdateParameters: msRest.CompositeMapper = {
  serializedName: "StorageAccountUpdateParameters",
  type: {
    name: "Composite",
    className: "StorageAccountUpdateParameters",
    modelProperties: {
      ...Resource.type.modelProperties,
      accountType: {
        serializedName: "properties.accountType",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_ZRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Premium_LRS"
          ]
        }
      },
      customDomain: {
        serializedName: "properties.customDomain",
        type: {
          name: "Composite",
          className: "CustomDomain"
        }
      }
    }
  }
};

export const StorageAccountRegenerateKeyParameters: msRest.CompositeMapper = {
  serializedName: "StorageAccountRegenerateKeyParameters",
  type: {
    name: "Composite",
    className: "StorageAccountRegenerateKeyParameters",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: [
            "key1",
            "key2"
          ]
        }
      }
    }
  }
};

export const UsageName: msRest.CompositeMapper = {
  serializedName: "UsageName",
  type: {
    name: "Composite",
    className: "UsageName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Usage: msRest.CompositeMapper = {
  serializedName: "Usage",
  type: {
    name: "Composite",
    className: "Usage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "Enum",
          allowedValues: [
            "Count",
            "Bytes",
            "Seconds",
            "Percent",
            "CountsPerSecond",
            "BytesPerSecond"
          ]
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "UsageName"
        }
      }
    }
  }
};

export const UsageListResult: msRest.CompositeMapper = {
  serializedName: "UsageListResult",
  type: {
    name: "Composite",
    className: "UsageListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Usage"
            }
          }
        }
      }
    }
  }
};

export const SubResource: msRest.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageAccountsRegenerateKeyOptionalParams: msRest.CompositeMapper = {
  serializedName: "RegenerateKeyOptions",
  type: {
    name: "Composite",
    className: "StorageAccountsRegenerateKeyOptionalParams",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: [
            "key1",
            "key2"
          ]
        }
      }
    }
  }
};

export const StorageAccountListResult: msRest.CompositeMapper = {
  serializedName: "StorageAccountListResult",
  type: {
    name: "Composite",
    className: "StorageAccountListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StorageAccount"
            }
          }
        }
      }
    }
  }
};
