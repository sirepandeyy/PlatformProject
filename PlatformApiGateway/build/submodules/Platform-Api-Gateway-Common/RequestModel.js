"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelQuery = exports.RequestModel = void 0;
const requestModelBase_1 = require("./requestModelBase");
const filter_1 = require("./filter");
//************** REQUEST MODEL FOR PUT/POST/DELETE **************************************** */
class RequestModel extends requestModelBase_1.RequestModelBase {
    constructor() {
        //TODO: GENERATE THE TENANT ID, CULTURE AND REQUEST ID INSIDE BASE CLASS
        super(0, '', '');
        this.DataCollection = [];
        this.ErrorCode = 200;
        this.Error = '';
        this.DataCollection = new Array();
        this.SocketId = "";
        this.token = "";
        this.CommunityUrl = "sample_community_url";
        this.RequestGuid = "sample_guid";
        // let filter = new Filter();
        // filter.setConditions(new Array<Condition>());
    }
    ;
    // constructor(tenantId:number,culture:string,requestId:string){
    //     super(tenantId,culture,requestId);
    // }
    getData() {
        let t_temp = this.DataCollection != null && this.DataCollection[0] != null ?
            this.DataCollection[0] : null;
        return t_temp;
    }
    ;
    CreateRequestModel() {
        let requestModel = new RequestModel();
        return requestModel;
    }
    ;
    CreateFailureModel(errorCode, error) {
        let requestModel = new RequestModel();
        requestModel.Error = error;
        requestModel.ErrorCode = errorCode;
        return requestModel;
    }
    CreateSuccessModel(tDtos) {
        //TODO: Return requestModel with dataSet
        let requestModel = new RequestModel();
        requestModel.DataCollection = tDtos;
        return requestModel;
    }
    ;
}
exports.RequestModel = RequestModel;
;
//************** REQUEST MODEL FOR QUERY **************************************** */
class RequestModelQuery {
    constructor() {
        this.Children = [];
        this.Filter = new filter_1.Filter;
        // this.RequestGuid = new Guid().NewGuid();
    }
    ;
}
exports.RequestModelQuery = RequestModelQuery;
;
//# sourceMappingURL=RequestModel.js.map