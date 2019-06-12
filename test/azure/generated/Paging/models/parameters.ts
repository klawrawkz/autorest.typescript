/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const acceptLanguage: coreHttp.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api_version",
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "customParameterGroup",
    "apiVersion"
  ],
  mapper: {
    required: true,
    serializedName: "api_version",
    type: {
      name: "String"
    }
  }
};
export const clientRequestId: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "clientRequestId"
  ],
  mapper: {
    serializedName: "client-request-id",
    type: {
      name: "String"
    }
  }
};
export const maxresults0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesOptions",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};
export const maxresults1: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetOdataMultiplePagesOptions",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};
export const maxresults2: coreHttp.OperationParameter = {
  parameterPath: [
    "pagingGetMultiplePagesWithOffsetOptions",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};
export const maxresults3: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesLROOptions",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};
export const maxresults4: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesWithOffsetNextOptions",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};
export const nextLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const nextPageLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const offset: coreHttp.OperationURLParameter = {
  parameterPath: [
    "pagingGetMultiplePagesWithOffsetOptions",
    "offset"
  ],
  mapper: {
    required: true,
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};
export const tenant0: coreHttp.OperationURLParameter = {
  parameterPath: "tenant",
  mapper: {
    required: true,
    serializedName: "tenant",
    type: {
      name: "String"
    }
  }
};
export const tenant1: coreHttp.OperationURLParameter = {
  parameterPath: [
    "customParameterGroup",
    "tenant"
  ],
  mapper: {
    required: true,
    serializedName: "tenant",
    type: {
      name: "String"
    }
  }
};
export const timeout0: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesOptions",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const timeout1: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetOdataMultiplePagesOptions",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const timeout2: coreHttp.OperationParameter = {
  parameterPath: [
    "pagingGetMultiplePagesWithOffsetOptions",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const timeout3: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesLROOptions",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const timeout4: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "pagingGetMultiplePagesWithOffsetNextOptions",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
