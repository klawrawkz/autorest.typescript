/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      parentError: {
        serializedName: "parentError",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const Resource: coreHttp.CompositeMapper = {
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
      type: {
        readOnly: true,
        serializedName: "type",
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
      location: {
        serializedName: "location",
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
      }
    }
  }
};

export const FlattenedProduct: coreHttp.CompositeMapper = {
  serializedName: "FlattenedProduct",
  type: {
    name: "Composite",
    className: "FlattenedProduct",
    modelProperties: {
      ...Resource.type.modelProperties,
      pname: {
        serializedName: "properties.p\\.name",
        type: {
          name: "String"
        }
      },
      flattenedProductType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      provisioningStateValues: {
        readOnly: true,
        serializedName: "properties.provisioningStateValues",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCollection: coreHttp.CompositeMapper = {
  serializedName: "ResourceCollection",
  type: {
    name: "Composite",
    className: "ResourceCollection",
    modelProperties: {
      productresource: {
        serializedName: "productresource",
        type: {
          name: "Composite",
          className: "FlattenedProduct"
        }
      },
      arrayofresources: {
        serializedName: "arrayofresources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      },
      dictionaryofresources: {
        serializedName: "dictionaryofresources",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    }
  }
};

export const BaseProduct: coreHttp.CompositeMapper = {
  serializedName: "BaseProduct",
  type: {
    name: "Composite",
    className: "BaseProduct",
    modelProperties: {
      productId: {
        required: true,
        serializedName: "base_product_id",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "base_product_description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SimpleProduct: coreHttp.CompositeMapper = {
  serializedName: "SimpleProduct",
  type: {
    name: "Composite",
    className: "SimpleProduct",
    modelProperties: {
      ...BaseProduct.type.modelProperties,
      maxProductDisplayName: {
        required: true,
        serializedName: "details.max_product_display_name",
        type: {
          name: "String"
        }
      },
      capacity: {
        required: true,
        isConstant: true,
        serializedName: "details.max_product_capacity",
        defaultValue: 'Large',
        type: {
          name: "String"
        }
      },
      genericValue: {
        serializedName: "details.max_product_image.generic_value",
        type: {
          name: "String"
        }
      },
      odatavalue: {
        serializedName: "details.max_product_image.@odata\\.value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GenericUrl: coreHttp.CompositeMapper = {
  serializedName: "GenericUrl",
  type: {
    name: "Composite",
    className: "GenericUrl",
    modelProperties: {
      genericValue: {
        serializedName: "generic_value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WrappedProduct: coreHttp.CompositeMapper = {
  serializedName: "WrappedProduct",
  type: {
    name: "Composite",
    className: "WrappedProduct",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProductWrapper: coreHttp.CompositeMapper = {
  serializedName: "ProductWrapper",
  type: {
    name: "Composite",
    className: "ProductWrapper",
    modelProperties: {
      value: {
        serializedName: "property.value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FlattenParameterGroup: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FlattenParameterGroup",
    modelProperties: {
      name: {
        required: true,
        type: {
          name: "String"
        }
      },
      productId: {
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        type: {
          name: "String"
        }
      },
      maxProductDisplayName: {
        required: true,
        type: {
          name: "String"
        }
      },
      genericValue: {
        type: {
          name: "String"
        }
      },
      odatavalue: {
        type: {
          name: "String"
        }
      }
    }
  }
};
