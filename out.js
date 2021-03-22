/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.prb = (function() {

    /**
     * Namespace prb.
     * @exports prb
     * @namespace
     */
    var prb = {};

    /**
     * MessageType enum.
     * @name prb.MessageType
     * @enum {number}
     * @property {number} MTP_BROADCAST=0 MTP_BROADCAST value
     * @property {number} MTP_QUERY=1 MTP_QUERY value
     * @property {number} MTP_REPLY=2 MTP_REPLY value
     * @property {number} MTP_NOTIFY=3 MTP_NOTIFY value
     */
    prb.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MTP_BROADCAST"] = 0;
        values[valuesById[1] = "MTP_QUERY"] = 1;
        values[valuesById[2] = "MTP_REPLY"] = 2;
        values[valuesById[3] = "MTP_NOTIFY"] = 3;
        return values;
    })();

    /**
     * MessageTarget enum.
     * @name prb.MessageTarget
     * @enum {number}
     * @property {number} MTG_BROADCAST=0 MTG_BROADCAST value
     * @property {number} MTG_MANAGER=1 MTG_MANAGER value
     * @property {number} MTG_TRADE_SCHEDULER=2 MTG_TRADE_SCHEDULER value
     * @property {number} MTG_TRADE_WORKER=3 MTG_TRADE_WORKER value
     * @property {number} MTG_WORKER=4 MTG_WORKER value
     * @property {number} MTG_INTERNAL_PRESERVED=5 MTG_INTERNAL_PRESERVED value
     */
    prb.MessageTarget = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MTG_BROADCAST"] = 0;
        values[valuesById[1] = "MTG_MANAGER"] = 1;
        values[valuesById[2] = "MTG_TRADE_SCHEDULER"] = 2;
        values[valuesById[3] = "MTG_TRADE_WORKER"] = 3;
        values[valuesById[4] = "MTG_WORKER"] = 4;
        values[valuesById[5] = "MTG_INTERNAL_PRESERVED"] = 5;
        return values;
    })();

    prb.MessageContent = (function() {

        /**
         * Properties of a MessageContent.
         * @memberof prb
         * @interface IMessageContent
         * @property {Uint8Array|null} [encrypted] MessageContent encrypted
         * @property {prb.IError|null} [error] MessageContent error
         * @property {prb.IAck|null} [ack] MessageContent ack
         * @property {prb.manager.IWorkerStateUpdate|null} [workerStateUpdate] MessageContent workerStateUpdate
         * @property {prb.manager.IQueryWorkerState|null} [queryWorkerState] MessageContent queryWorkerState
         * @property {prb.manager.IAccountStateUpdate|null} [accountStateUpdate] MessageContent accountStateUpdate
         * @property {prb.manager.IQueryAccountState|null} [queryAccountState] MessageContent queryAccountState
         * @property {prb.worker.IRequestKickWorker|null} [requestKickWorker] MessageContent requestKickWorker
         * @property {prb.worker.IWorkerShouldExit|null} [workerShouldExit] MessageContent workerShouldExit
         * @property {prb.trade.ITradeSchedulerStateUpdate|null} [tradeSchedulerStateUpdate] MessageContent tradeSchedulerStateUpdate
         * @property {prb.trade.ICallOnlineScheduler|null} [callOnlineScheduler] MessageContent callOnlineScheduler
         * @property {prb.trade.IFetcherStateUpdate|null} [fetcherStateUpdate] MessageContent fetcherStateUpdate
         * @property {prb.trade.ICallOnlineFetcher|null} [callOnlineFetcher] MessageContent callOnlineFetcher
         * @property {prb.manager.ILifecycleManagerStateUpdate|null} [lifecycleManagerStateUpdate] MessageContent lifecycleManagerStateUpdate
         * @property {prb.manager.ICallOnlineLifecycleManager|null} [callOnlineLifecycleManager] MessageContent callOnlineLifecycleManager
         * @property {prb.manager.IRequestCreateWorker|null} [requestCreateWorker] MessageContent requestCreateWorker
         * @property {prb.manager.IRequestUpdateWorker|null} [requestUpdateWorker] MessageContent requestUpdateWorker
         * @property {prb.worker.IRequestStartWorkerLifecycle|null} [requestStartWorkerLifecycle] MessageContent requestStartWorkerLifecycle
         * @property {prb.worker.IAreYouThere|null} [areYouThere] MessageContent areYouThere
         */

        /**
         * Constructs a new MessageContent.
         * @memberof prb
         * @classdesc Represents a MessageContent.
         * @implements IMessageContent
         * @constructor
         * @param {prb.IMessageContent=} [properties] Properties to set
         */
        function MessageContent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageContent encrypted.
         * @member {Uint8Array} encrypted
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.encrypted = $util.newBuffer([]);

        /**
         * MessageContent error.
         * @member {prb.IError|null|undefined} error
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.error = null;

        /**
         * MessageContent ack.
         * @member {prb.IAck|null|undefined} ack
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.ack = null;

        /**
         * MessageContent workerStateUpdate.
         * @member {prb.manager.IWorkerStateUpdate|null|undefined} workerStateUpdate
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.workerStateUpdate = null;

        /**
         * MessageContent queryWorkerState.
         * @member {prb.manager.IQueryWorkerState|null|undefined} queryWorkerState
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.queryWorkerState = null;

        /**
         * MessageContent accountStateUpdate.
         * @member {prb.manager.IAccountStateUpdate|null|undefined} accountStateUpdate
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.accountStateUpdate = null;

        /**
         * MessageContent queryAccountState.
         * @member {prb.manager.IQueryAccountState|null|undefined} queryAccountState
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.queryAccountState = null;

        /**
         * MessageContent requestKickWorker.
         * @member {prb.worker.IRequestKickWorker|null|undefined} requestKickWorker
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.requestKickWorker = null;

        /**
         * MessageContent workerShouldExit.
         * @member {prb.worker.IWorkerShouldExit|null|undefined} workerShouldExit
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.workerShouldExit = null;

        /**
         * MessageContent tradeSchedulerStateUpdate.
         * @member {prb.trade.ITradeSchedulerStateUpdate|null|undefined} tradeSchedulerStateUpdate
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.tradeSchedulerStateUpdate = null;

        /**
         * MessageContent callOnlineScheduler.
         * @member {prb.trade.ICallOnlineScheduler|null|undefined} callOnlineScheduler
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.callOnlineScheduler = null;

        /**
         * MessageContent fetcherStateUpdate.
         * @member {prb.trade.IFetcherStateUpdate|null|undefined} fetcherStateUpdate
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.fetcherStateUpdate = null;

        /**
         * MessageContent callOnlineFetcher.
         * @member {prb.trade.ICallOnlineFetcher|null|undefined} callOnlineFetcher
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.callOnlineFetcher = null;

        /**
         * MessageContent lifecycleManagerStateUpdate.
         * @member {prb.manager.ILifecycleManagerStateUpdate|null|undefined} lifecycleManagerStateUpdate
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.lifecycleManagerStateUpdate = null;

        /**
         * MessageContent callOnlineLifecycleManager.
         * @member {prb.manager.ICallOnlineLifecycleManager|null|undefined} callOnlineLifecycleManager
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.callOnlineLifecycleManager = null;

        /**
         * MessageContent requestCreateWorker.
         * @member {prb.manager.IRequestCreateWorker|null|undefined} requestCreateWorker
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.requestCreateWorker = null;

        /**
         * MessageContent requestUpdateWorker.
         * @member {prb.manager.IRequestUpdateWorker|null|undefined} requestUpdateWorker
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.requestUpdateWorker = null;

        /**
         * MessageContent requestStartWorkerLifecycle.
         * @member {prb.worker.IRequestStartWorkerLifecycle|null|undefined} requestStartWorkerLifecycle
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.requestStartWorkerLifecycle = null;

        /**
         * MessageContent areYouThere.
         * @member {prb.worker.IAreYouThere|null|undefined} areYouThere
         * @memberof prb.MessageContent
         * @instance
         */
        MessageContent.prototype.areYouThere = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MessageContent type.
         * @member {"encrypted"|"error"|"ack"|"workerStateUpdate"|"queryWorkerState"|"accountStateUpdate"|"queryAccountState"|"requestKickWorker"|"workerShouldExit"|"tradeSchedulerStateUpdate"|"callOnlineScheduler"|"fetcherStateUpdate"|"callOnlineFetcher"|"lifecycleManagerStateUpdate"|"callOnlineLifecycleManager"|"requestCreateWorker"|"requestUpdateWorker"|"requestStartWorkerLifecycle"|"areYouThere"|undefined} type
         * @memberof prb.MessageContent
         * @instance
         */
        Object.defineProperty(MessageContent.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["encrypted", "error", "ack", "workerStateUpdate", "queryWorkerState", "accountStateUpdate", "queryAccountState", "requestKickWorker", "workerShouldExit", "tradeSchedulerStateUpdate", "callOnlineScheduler", "fetcherStateUpdate", "callOnlineFetcher", "lifecycleManagerStateUpdate", "callOnlineLifecycleManager", "requestCreateWorker", "requestUpdateWorker", "requestStartWorkerLifecycle", "areYouThere"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MessageContent instance using the specified properties.
         * @function create
         * @memberof prb.MessageContent
         * @static
         * @param {prb.IMessageContent=} [properties] Properties to set
         * @returns {prb.MessageContent} MessageContent instance
         */
        MessageContent.create = function create(properties) {
            return new MessageContent(properties);
        };

        /**
         * Encodes the specified MessageContent message. Does not implicitly {@link prb.MessageContent.verify|verify} messages.
         * @function encode
         * @memberof prb.MessageContent
         * @static
         * @param {prb.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encrypted != null && Object.hasOwnProperty.call(message, "encrypted"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encrypted);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.prb.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ack != null && Object.hasOwnProperty.call(message, "ack"))
                $root.prb.Ack.encode(message.ack, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.workerStateUpdate != null && Object.hasOwnProperty.call(message, "workerStateUpdate"))
                $root.prb.manager.WorkerStateUpdate.encode(message.workerStateUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.queryWorkerState != null && Object.hasOwnProperty.call(message, "queryWorkerState"))
                $root.prb.manager.QueryWorkerState.encode(message.queryWorkerState, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.accountStateUpdate != null && Object.hasOwnProperty.call(message, "accountStateUpdate"))
                $root.prb.manager.AccountStateUpdate.encode(message.accountStateUpdate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.queryAccountState != null && Object.hasOwnProperty.call(message, "queryAccountState"))
                $root.prb.manager.QueryAccountState.encode(message.queryAccountState, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.requestKickWorker != null && Object.hasOwnProperty.call(message, "requestKickWorker"))
                $root.prb.worker.RequestKickWorker.encode(message.requestKickWorker, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.workerShouldExit != null && Object.hasOwnProperty.call(message, "workerShouldExit"))
                $root.prb.worker.WorkerShouldExit.encode(message.workerShouldExit, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.tradeSchedulerStateUpdate != null && Object.hasOwnProperty.call(message, "tradeSchedulerStateUpdate"))
                $root.prb.trade.TradeSchedulerStateUpdate.encode(message.tradeSchedulerStateUpdate, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.callOnlineScheduler != null && Object.hasOwnProperty.call(message, "callOnlineScheduler"))
                $root.prb.trade.CallOnlineScheduler.encode(message.callOnlineScheduler, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.fetcherStateUpdate != null && Object.hasOwnProperty.call(message, "fetcherStateUpdate"))
                $root.prb.trade.FetcherStateUpdate.encode(message.fetcherStateUpdate, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.callOnlineFetcher != null && Object.hasOwnProperty.call(message, "callOnlineFetcher"))
                $root.prb.trade.CallOnlineFetcher.encode(message.callOnlineFetcher, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.lifecycleManagerStateUpdate != null && Object.hasOwnProperty.call(message, "lifecycleManagerStateUpdate"))
                $root.prb.manager.LifecycleManagerStateUpdate.encode(message.lifecycleManagerStateUpdate, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.callOnlineLifecycleManager != null && Object.hasOwnProperty.call(message, "callOnlineLifecycleManager"))
                $root.prb.manager.CallOnlineLifecycleManager.encode(message.callOnlineLifecycleManager, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.requestCreateWorker != null && Object.hasOwnProperty.call(message, "requestCreateWorker"))
                $root.prb.manager.RequestCreateWorker.encode(message.requestCreateWorker, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.requestUpdateWorker != null && Object.hasOwnProperty.call(message, "requestUpdateWorker"))
                $root.prb.manager.RequestUpdateWorker.encode(message.requestUpdateWorker, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.requestStartWorkerLifecycle != null && Object.hasOwnProperty.call(message, "requestStartWorkerLifecycle"))
                $root.prb.worker.RequestStartWorkerLifecycle.encode(message.requestStartWorkerLifecycle, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.areYouThere != null && Object.hasOwnProperty.call(message, "areYouThere"))
                $root.prb.worker.AreYouThere.encode(message.areYouThere, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link prb.MessageContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.MessageContent
         * @static
         * @param {prb.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer.
         * @function decode
         * @memberof prb.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.MessageContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encrypted = reader.bytes();
                    break;
                case 2:
                    message.error = $root.prb.Error.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ack = $root.prb.Ack.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.workerStateUpdate = $root.prb.manager.WorkerStateUpdate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryWorkerState = $root.prb.manager.QueryWorkerState.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.accountStateUpdate = $root.prb.manager.AccountStateUpdate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.queryAccountState = $root.prb.manager.QueryAccountState.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.requestKickWorker = $root.prb.worker.RequestKickWorker.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.workerShouldExit = $root.prb.worker.WorkerShouldExit.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.tradeSchedulerStateUpdate = $root.prb.trade.TradeSchedulerStateUpdate.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.callOnlineScheduler = $root.prb.trade.CallOnlineScheduler.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.fetcherStateUpdate = $root.prb.trade.FetcherStateUpdate.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.callOnlineFetcher = $root.prb.trade.CallOnlineFetcher.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.lifecycleManagerStateUpdate = $root.prb.manager.LifecycleManagerStateUpdate.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.callOnlineLifecycleManager = $root.prb.manager.CallOnlineLifecycleManager.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.requestCreateWorker = $root.prb.manager.RequestCreateWorker.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.requestUpdateWorker = $root.prb.manager.RequestUpdateWorker.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.requestStartWorkerLifecycle = $root.prb.worker.RequestStartWorkerLifecycle.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.areYouThere = $root.prb.worker.AreYouThere.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageContent message.
         * @function verify
         * @memberof prb.MessageContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.encrypted != null && message.hasOwnProperty("encrypted")) {
                properties.type = 1;
                if (!(message.encrypted && typeof message.encrypted.length === "number" || $util.isString(message.encrypted)))
                    return "encrypted: buffer expected";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.Ack.verify(message.ack);
                    if (error)
                        return "ack." + error;
                }
            }
            if (message.workerStateUpdate != null && message.hasOwnProperty("workerStateUpdate")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.WorkerStateUpdate.verify(message.workerStateUpdate);
                    if (error)
                        return "workerStateUpdate." + error;
                }
            }
            if (message.queryWorkerState != null && message.hasOwnProperty("queryWorkerState")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.QueryWorkerState.verify(message.queryWorkerState);
                    if (error)
                        return "queryWorkerState." + error;
                }
            }
            if (message.accountStateUpdate != null && message.hasOwnProperty("accountStateUpdate")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.AccountStateUpdate.verify(message.accountStateUpdate);
                    if (error)
                        return "accountStateUpdate." + error;
                }
            }
            if (message.queryAccountState != null && message.hasOwnProperty("queryAccountState")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.QueryAccountState.verify(message.queryAccountState);
                    if (error)
                        return "queryAccountState." + error;
                }
            }
            if (message.requestKickWorker != null && message.hasOwnProperty("requestKickWorker")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.worker.RequestKickWorker.verify(message.requestKickWorker);
                    if (error)
                        return "requestKickWorker." + error;
                }
            }
            if (message.workerShouldExit != null && message.hasOwnProperty("workerShouldExit")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.worker.WorkerShouldExit.verify(message.workerShouldExit);
                    if (error)
                        return "workerShouldExit." + error;
                }
            }
            if (message.tradeSchedulerStateUpdate != null && message.hasOwnProperty("tradeSchedulerStateUpdate")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.trade.TradeSchedulerStateUpdate.verify(message.tradeSchedulerStateUpdate);
                    if (error)
                        return "tradeSchedulerStateUpdate." + error;
                }
            }
            if (message.callOnlineScheduler != null && message.hasOwnProperty("callOnlineScheduler")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.trade.CallOnlineScheduler.verify(message.callOnlineScheduler);
                    if (error)
                        return "callOnlineScheduler." + error;
                }
            }
            if (message.fetcherStateUpdate != null && message.hasOwnProperty("fetcherStateUpdate")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.trade.FetcherStateUpdate.verify(message.fetcherStateUpdate);
                    if (error)
                        return "fetcherStateUpdate." + error;
                }
            }
            if (message.callOnlineFetcher != null && message.hasOwnProperty("callOnlineFetcher")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.trade.CallOnlineFetcher.verify(message.callOnlineFetcher);
                    if (error)
                        return "callOnlineFetcher." + error;
                }
            }
            if (message.lifecycleManagerStateUpdate != null && message.hasOwnProperty("lifecycleManagerStateUpdate")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.LifecycleManagerStateUpdate.verify(message.lifecycleManagerStateUpdate);
                    if (error)
                        return "lifecycleManagerStateUpdate." + error;
                }
            }
            if (message.callOnlineLifecycleManager != null && message.hasOwnProperty("callOnlineLifecycleManager")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.CallOnlineLifecycleManager.verify(message.callOnlineLifecycleManager);
                    if (error)
                        return "callOnlineLifecycleManager." + error;
                }
            }
            if (message.requestCreateWorker != null && message.hasOwnProperty("requestCreateWorker")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.RequestCreateWorker.verify(message.requestCreateWorker);
                    if (error)
                        return "requestCreateWorker." + error;
                }
            }
            if (message.requestUpdateWorker != null && message.hasOwnProperty("requestUpdateWorker")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.manager.RequestUpdateWorker.verify(message.requestUpdateWorker);
                    if (error)
                        return "requestUpdateWorker." + error;
                }
            }
            if (message.requestStartWorkerLifecycle != null && message.hasOwnProperty("requestStartWorkerLifecycle")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.worker.RequestStartWorkerLifecycle.verify(message.requestStartWorkerLifecycle);
                    if (error)
                        return "requestStartWorkerLifecycle." + error;
                }
            }
            if (message.areYouThere != null && message.hasOwnProperty("areYouThere")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.prb.worker.AreYouThere.verify(message.areYouThere);
                    if (error)
                        return "areYouThere." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.MessageContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.MessageContent} MessageContent
         */
        MessageContent.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.MessageContent)
                return object;
            var message = new $root.prb.MessageContent();
            if (object.encrypted != null)
                if (typeof object.encrypted === "string")
                    $util.base64.decode(object.encrypted, message.encrypted = $util.newBuffer($util.base64.length(object.encrypted)), 0);
                else if (object.encrypted.length)
                    message.encrypted = object.encrypted;
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".prb.MessageContent.error: object expected");
                message.error = $root.prb.Error.fromObject(object.error);
            }
            if (object.ack != null) {
                if (typeof object.ack !== "object")
                    throw TypeError(".prb.MessageContent.ack: object expected");
                message.ack = $root.prb.Ack.fromObject(object.ack);
            }
            if (object.workerStateUpdate != null) {
                if (typeof object.workerStateUpdate !== "object")
                    throw TypeError(".prb.MessageContent.workerStateUpdate: object expected");
                message.workerStateUpdate = $root.prb.manager.WorkerStateUpdate.fromObject(object.workerStateUpdate);
            }
            if (object.queryWorkerState != null) {
                if (typeof object.queryWorkerState !== "object")
                    throw TypeError(".prb.MessageContent.queryWorkerState: object expected");
                message.queryWorkerState = $root.prb.manager.QueryWorkerState.fromObject(object.queryWorkerState);
            }
            if (object.accountStateUpdate != null) {
                if (typeof object.accountStateUpdate !== "object")
                    throw TypeError(".prb.MessageContent.accountStateUpdate: object expected");
                message.accountStateUpdate = $root.prb.manager.AccountStateUpdate.fromObject(object.accountStateUpdate);
            }
            if (object.queryAccountState != null) {
                if (typeof object.queryAccountState !== "object")
                    throw TypeError(".prb.MessageContent.queryAccountState: object expected");
                message.queryAccountState = $root.prb.manager.QueryAccountState.fromObject(object.queryAccountState);
            }
            if (object.requestKickWorker != null) {
                if (typeof object.requestKickWorker !== "object")
                    throw TypeError(".prb.MessageContent.requestKickWorker: object expected");
                message.requestKickWorker = $root.prb.worker.RequestKickWorker.fromObject(object.requestKickWorker);
            }
            if (object.workerShouldExit != null) {
                if (typeof object.workerShouldExit !== "object")
                    throw TypeError(".prb.MessageContent.workerShouldExit: object expected");
                message.workerShouldExit = $root.prb.worker.WorkerShouldExit.fromObject(object.workerShouldExit);
            }
            if (object.tradeSchedulerStateUpdate != null) {
                if (typeof object.tradeSchedulerStateUpdate !== "object")
                    throw TypeError(".prb.MessageContent.tradeSchedulerStateUpdate: object expected");
                message.tradeSchedulerStateUpdate = $root.prb.trade.TradeSchedulerStateUpdate.fromObject(object.tradeSchedulerStateUpdate);
            }
            if (object.callOnlineScheduler != null) {
                if (typeof object.callOnlineScheduler !== "object")
                    throw TypeError(".prb.MessageContent.callOnlineScheduler: object expected");
                message.callOnlineScheduler = $root.prb.trade.CallOnlineScheduler.fromObject(object.callOnlineScheduler);
            }
            if (object.fetcherStateUpdate != null) {
                if (typeof object.fetcherStateUpdate !== "object")
                    throw TypeError(".prb.MessageContent.fetcherStateUpdate: object expected");
                message.fetcherStateUpdate = $root.prb.trade.FetcherStateUpdate.fromObject(object.fetcherStateUpdate);
            }
            if (object.callOnlineFetcher != null) {
                if (typeof object.callOnlineFetcher !== "object")
                    throw TypeError(".prb.MessageContent.callOnlineFetcher: object expected");
                message.callOnlineFetcher = $root.prb.trade.CallOnlineFetcher.fromObject(object.callOnlineFetcher);
            }
            if (object.lifecycleManagerStateUpdate != null) {
                if (typeof object.lifecycleManagerStateUpdate !== "object")
                    throw TypeError(".prb.MessageContent.lifecycleManagerStateUpdate: object expected");
                message.lifecycleManagerStateUpdate = $root.prb.manager.LifecycleManagerStateUpdate.fromObject(object.lifecycleManagerStateUpdate);
            }
            if (object.callOnlineLifecycleManager != null) {
                if (typeof object.callOnlineLifecycleManager !== "object")
                    throw TypeError(".prb.MessageContent.callOnlineLifecycleManager: object expected");
                message.callOnlineLifecycleManager = $root.prb.manager.CallOnlineLifecycleManager.fromObject(object.callOnlineLifecycleManager);
            }
            if (object.requestCreateWorker != null) {
                if (typeof object.requestCreateWorker !== "object")
                    throw TypeError(".prb.MessageContent.requestCreateWorker: object expected");
                message.requestCreateWorker = $root.prb.manager.RequestCreateWorker.fromObject(object.requestCreateWorker);
            }
            if (object.requestUpdateWorker != null) {
                if (typeof object.requestUpdateWorker !== "object")
                    throw TypeError(".prb.MessageContent.requestUpdateWorker: object expected");
                message.requestUpdateWorker = $root.prb.manager.RequestUpdateWorker.fromObject(object.requestUpdateWorker);
            }
            if (object.requestStartWorkerLifecycle != null) {
                if (typeof object.requestStartWorkerLifecycle !== "object")
                    throw TypeError(".prb.MessageContent.requestStartWorkerLifecycle: object expected");
                message.requestStartWorkerLifecycle = $root.prb.worker.RequestStartWorkerLifecycle.fromObject(object.requestStartWorkerLifecycle);
            }
            if (object.areYouThere != null) {
                if (typeof object.areYouThere !== "object")
                    throw TypeError(".prb.MessageContent.areYouThere: object expected");
                message.areYouThere = $root.prb.worker.AreYouThere.fromObject(object.areYouThere);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.MessageContent
         * @static
         * @param {prb.MessageContent} message MessageContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.encrypted != null && message.hasOwnProperty("encrypted")) {
                object.encrypted = options.bytes === String ? $util.base64.encode(message.encrypted, 0, message.encrypted.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted) : message.encrypted;
                if (options.oneofs)
                    object.type = "encrypted";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.prb.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.type = "error";
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                object.ack = $root.prb.Ack.toObject(message.ack, options);
                if (options.oneofs)
                    object.type = "ack";
            }
            if (message.workerStateUpdate != null && message.hasOwnProperty("workerStateUpdate")) {
                object.workerStateUpdate = $root.prb.manager.WorkerStateUpdate.toObject(message.workerStateUpdate, options);
                if (options.oneofs)
                    object.type = "workerStateUpdate";
            }
            if (message.queryWorkerState != null && message.hasOwnProperty("queryWorkerState")) {
                object.queryWorkerState = $root.prb.manager.QueryWorkerState.toObject(message.queryWorkerState, options);
                if (options.oneofs)
                    object.type = "queryWorkerState";
            }
            if (message.accountStateUpdate != null && message.hasOwnProperty("accountStateUpdate")) {
                object.accountStateUpdate = $root.prb.manager.AccountStateUpdate.toObject(message.accountStateUpdate, options);
                if (options.oneofs)
                    object.type = "accountStateUpdate";
            }
            if (message.queryAccountState != null && message.hasOwnProperty("queryAccountState")) {
                object.queryAccountState = $root.prb.manager.QueryAccountState.toObject(message.queryAccountState, options);
                if (options.oneofs)
                    object.type = "queryAccountState";
            }
            if (message.requestKickWorker != null && message.hasOwnProperty("requestKickWorker")) {
                object.requestKickWorker = $root.prb.worker.RequestKickWorker.toObject(message.requestKickWorker, options);
                if (options.oneofs)
                    object.type = "requestKickWorker";
            }
            if (message.workerShouldExit != null && message.hasOwnProperty("workerShouldExit")) {
                object.workerShouldExit = $root.prb.worker.WorkerShouldExit.toObject(message.workerShouldExit, options);
                if (options.oneofs)
                    object.type = "workerShouldExit";
            }
            if (message.tradeSchedulerStateUpdate != null && message.hasOwnProperty("tradeSchedulerStateUpdate")) {
                object.tradeSchedulerStateUpdate = $root.prb.trade.TradeSchedulerStateUpdate.toObject(message.tradeSchedulerStateUpdate, options);
                if (options.oneofs)
                    object.type = "tradeSchedulerStateUpdate";
            }
            if (message.callOnlineScheduler != null && message.hasOwnProperty("callOnlineScheduler")) {
                object.callOnlineScheduler = $root.prb.trade.CallOnlineScheduler.toObject(message.callOnlineScheduler, options);
                if (options.oneofs)
                    object.type = "callOnlineScheduler";
            }
            if (message.fetcherStateUpdate != null && message.hasOwnProperty("fetcherStateUpdate")) {
                object.fetcherStateUpdate = $root.prb.trade.FetcherStateUpdate.toObject(message.fetcherStateUpdate, options);
                if (options.oneofs)
                    object.type = "fetcherStateUpdate";
            }
            if (message.callOnlineFetcher != null && message.hasOwnProperty("callOnlineFetcher")) {
                object.callOnlineFetcher = $root.prb.trade.CallOnlineFetcher.toObject(message.callOnlineFetcher, options);
                if (options.oneofs)
                    object.type = "callOnlineFetcher";
            }
            if (message.lifecycleManagerStateUpdate != null && message.hasOwnProperty("lifecycleManagerStateUpdate")) {
                object.lifecycleManagerStateUpdate = $root.prb.manager.LifecycleManagerStateUpdate.toObject(message.lifecycleManagerStateUpdate, options);
                if (options.oneofs)
                    object.type = "lifecycleManagerStateUpdate";
            }
            if (message.callOnlineLifecycleManager != null && message.hasOwnProperty("callOnlineLifecycleManager")) {
                object.callOnlineLifecycleManager = $root.prb.manager.CallOnlineLifecycleManager.toObject(message.callOnlineLifecycleManager, options);
                if (options.oneofs)
                    object.type = "callOnlineLifecycleManager";
            }
            if (message.requestCreateWorker != null && message.hasOwnProperty("requestCreateWorker")) {
                object.requestCreateWorker = $root.prb.manager.RequestCreateWorker.toObject(message.requestCreateWorker, options);
                if (options.oneofs)
                    object.type = "requestCreateWorker";
            }
            if (message.requestUpdateWorker != null && message.hasOwnProperty("requestUpdateWorker")) {
                object.requestUpdateWorker = $root.prb.manager.RequestUpdateWorker.toObject(message.requestUpdateWorker, options);
                if (options.oneofs)
                    object.type = "requestUpdateWorker";
            }
            if (message.requestStartWorkerLifecycle != null && message.hasOwnProperty("requestStartWorkerLifecycle")) {
                object.requestStartWorkerLifecycle = $root.prb.worker.RequestStartWorkerLifecycle.toObject(message.requestStartWorkerLifecycle, options);
                if (options.oneofs)
                    object.type = "requestStartWorkerLifecycle";
            }
            if (message.areYouThere != null && message.hasOwnProperty("areYouThere")) {
                object.areYouThere = $root.prb.worker.AreYouThere.toObject(message.areYouThere, options);
                if (options.oneofs)
                    object.type = "areYouThere";
            }
            return object;
        };

        /**
         * Converts this MessageContent to JSON.
         * @function toJSON
         * @memberof prb.MessageContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageContent;
    })();

    prb.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof prb
         * @interface IMessage
         * @property {prb.MessageTarget|null} [from] Message from
         * @property {prb.MessageTarget|null} [to] Message to
         * @property {prb.IMessageContent|null} [content] Message content
         * @property {google.protobuf.ITimestamp|null} [createdAt] Message createdAt
         * @property {number|Long|null} [nonce] Message nonce
         * @property {number|Long|null} [nonceRef] Message nonceRef
         * @property {prb.MessageType|null} [type] Message type
         */

        /**
         * Constructs a new Message.
         * @memberof prb
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {prb.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message from.
         * @member {prb.MessageTarget} from
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.from = 0;

        /**
         * Message to.
         * @member {prb.MessageTarget} to
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.to = 0;

        /**
         * Message content.
         * @member {prb.IMessageContent|null|undefined} content
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.content = null;

        /**
         * Message createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.createdAt = null;

        /**
         * Message nonce.
         * @member {number|Long} nonce
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Message nonceRef.
         * @member {number|Long} nonceRef
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.nonceRef = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Message type.
         * @member {prb.MessageType} type
         * @memberof prb.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof prb.Message
         * @static
         * @param {prb.IMessage=} [properties] Properties to set
         * @returns {prb.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link prb.Message.verify|verify} messages.
         * @function encode
         * @memberof prb.Message
         * @static
         * @param {prb.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.to);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.prb.MessageContent.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.nonce);
            if (message.nonceRef != null && Object.hasOwnProperty.call(message, "nonceRef"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.nonceRef);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link prb.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Message
         * @static
         * @param {prb.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.from = reader.int32();
                    break;
                case 2:
                    message.to = reader.int32();
                    break;
                case 3:
                    message.content = $root.prb.MessageContent.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.nonce = reader.uint64();
                    break;
                case 6:
                    message.nonceRef = reader.uint64();
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof prb.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                switch (message.from) {
                default:
                    return "from: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.to != null && message.hasOwnProperty("to"))
                switch (message.to) {
                default:
                    return "to: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content")) {
                var error = $root.prb.MessageContent.verify(message.content);
                if (error)
                    return "content." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            if (message.nonceRef != null && message.hasOwnProperty("nonceRef"))
                if (!$util.isInteger(message.nonceRef) && !(message.nonceRef && $util.isInteger(message.nonceRef.low) && $util.isInteger(message.nonceRef.high)))
                    return "nonceRef: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Message)
                return object;
            var message = new $root.prb.Message();
            switch (object.from) {
            case "MTG_BROADCAST":
            case 0:
                message.from = 0;
                break;
            case "MTG_MANAGER":
            case 1:
                message.from = 1;
                break;
            case "MTG_TRADE_SCHEDULER":
            case 2:
                message.from = 2;
                break;
            case "MTG_TRADE_WORKER":
            case 3:
                message.from = 3;
                break;
            case "MTG_WORKER":
            case 4:
                message.from = 4;
                break;
            case "MTG_INTERNAL_PRESERVED":
            case 5:
                message.from = 5;
                break;
            }
            switch (object.to) {
            case "MTG_BROADCAST":
            case 0:
                message.to = 0;
                break;
            case "MTG_MANAGER":
            case 1:
                message.to = 1;
                break;
            case "MTG_TRADE_SCHEDULER":
            case 2:
                message.to = 2;
                break;
            case "MTG_TRADE_WORKER":
            case 3:
                message.to = 3;
                break;
            case "MTG_WORKER":
            case 4:
                message.to = 4;
                break;
            case "MTG_INTERNAL_PRESERVED":
            case 5:
                message.to = 5;
                break;
            }
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".prb.Message.content: object expected");
                message.content = $root.prb.MessageContent.fromObject(object.content);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".prb.Message.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.nonce != null)
                if ($util.Long)
                    (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = true;
                else if (typeof object.nonce === "string")
                    message.nonce = parseInt(object.nonce, 10);
                else if (typeof object.nonce === "number")
                    message.nonce = object.nonce;
                else if (typeof object.nonce === "object")
                    message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
            if (object.nonceRef != null)
                if ($util.Long)
                    (message.nonceRef = $util.Long.fromValue(object.nonceRef)).unsigned = true;
                else if (typeof object.nonceRef === "string")
                    message.nonceRef = parseInt(object.nonceRef, 10);
                else if (typeof object.nonceRef === "number")
                    message.nonceRef = object.nonceRef;
                else if (typeof object.nonceRef === "object")
                    message.nonceRef = new $util.LongBits(object.nonceRef.low >>> 0, object.nonceRef.high >>> 0).toNumber(true);
            switch (object.type) {
            case "MTP_BROADCAST":
            case 0:
                message.type = 0;
                break;
            case "MTP_QUERY":
            case 1:
                message.type = 1;
                break;
            case "MTP_REPLY":
            case 2:
                message.type = 2;
                break;
            case "MTP_NOTIFY":
            case 3:
                message.type = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Message
         * @static
         * @param {prb.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = options.enums === String ? "MTG_BROADCAST" : 0;
                object.to = options.enums === String ? "MTG_BROADCAST" : 0;
                object.content = null;
                object.createdAt = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nonce = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nonceRef = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nonceRef = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "MTP_BROADCAST" : 0;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = options.enums === String ? $root.prb.MessageTarget[message.from] : message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = options.enums === String ? $root.prb.MessageTarget[message.to] : message.to;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.prb.MessageContent.toObject(message.content, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
            if (message.nonceRef != null && message.hasOwnProperty("nonceRef"))
                if (typeof message.nonceRef === "number")
                    object.nonceRef = options.longs === String ? String(message.nonceRef) : message.nonceRef;
                else
                    object.nonceRef = options.longs === String ? $util.Long.prototype.toString.call(message.nonceRef) : options.longs === Number ? new $util.LongBits(message.nonceRef.low >>> 0, message.nonceRef.high >>> 0).toNumber(true) : message.nonceRef;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prb.MessageType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof prb.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    prb.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof prb
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof prb
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {prb.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty=} [properties] Properties to set
         * @returns {prb.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @function encode
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link prb.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Empty
         * @static
         * @param {prb.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof prb.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Empty)
                return object;
            return new $root.prb.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Empty
         * @static
         * @param {prb.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof prb.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    prb.Placeholder = (function() {

        /**
         * Properties of a Placeholder.
         * @memberof prb
         * @interface IPlaceholder
         */

        /**
         * Constructs a new Placeholder.
         * @memberof prb
         * @classdesc Represents a Placeholder.
         * @implements IPlaceholder
         * @constructor
         * @param {prb.IPlaceholder=} [properties] Properties to set
         */
        function Placeholder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Placeholder instance using the specified properties.
         * @function create
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder=} [properties] Properties to set
         * @returns {prb.Placeholder} Placeholder instance
         */
        Placeholder.create = function create(properties) {
            return new Placeholder(properties);
        };

        /**
         * Encodes the specified Placeholder message. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @function encode
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder} message Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link prb.Placeholder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Placeholder
         * @static
         * @param {prb.IPlaceholder} message Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Placeholder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Placeholder message.
         * @function verify
         * @memberof prb.Placeholder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Placeholder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Placeholder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Placeholder} Placeholder
         */
        Placeholder.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Placeholder)
                return object;
            return new $root.prb.Placeholder();
        };

        /**
         * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Placeholder
         * @static
         * @param {prb.Placeholder} message Placeholder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Placeholder.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Placeholder to JSON.
         * @function toJSON
         * @memberof prb.Placeholder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Placeholder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Placeholder;
    })();

    prb.Ack = (function() {

        /**
         * Properties of an Ack.
         * @memberof prb
         * @interface IAck
         * @property {boolean|null} [ack] Ack ack
         */

        /**
         * Constructs a new Ack.
         * @memberof prb
         * @classdesc Represents an Ack.
         * @implements IAck
         * @constructor
         * @param {prb.IAck=} [properties] Properties to set
         */
        function Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ack ack.
         * @member {boolean} ack
         * @memberof prb.Ack
         * @instance
         */
        Ack.prototype.ack = false;

        /**
         * Creates a new Ack instance using the specified properties.
         * @function create
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck=} [properties] Properties to set
         * @returns {prb.Ack} Ack instance
         */
        Ack.create = function create(properties) {
            return new Ack(properties);
        };

        /**
         * Encodes the specified Ack message. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @function encode
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ack != null && Object.hasOwnProperty.call(message, "ack"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ack);
            return writer;
        };

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link prb.Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Ack
         * @static
         * @param {prb.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ack = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ack message.
         * @function verify
         * @memberof prb.Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ack != null && message.hasOwnProperty("ack"))
                if (typeof message.ack !== "boolean")
                    return "ack: boolean expected";
            return null;
        };

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Ack} Ack
         */
        Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Ack)
                return object;
            var message = new $root.prb.Ack();
            if (object.ack != null)
                message.ack = Boolean(object.ack);
            return message;
        };

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Ack
         * @static
         * @param {prb.Ack} message Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ack = false;
            if (message.ack != null && message.hasOwnProperty("ack"))
                object.ack = message.ack;
            return object;
        };

        /**
         * Converts this Ack to JSON.
         * @function toJSON
         * @memberof prb.Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ack;
    })();

    prb.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof prb
         * @interface IError
         */

        /**
         * Constructs a new Error.
         * @memberof prb
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {prb.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof prb.Error
         * @static
         * @param {prb.IError=} [properties] Properties to set
         * @returns {prb.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @function encode
         * @memberof prb.Error
         * @static
         * @param {prb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link prb.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Error
         * @static
         * @param {prb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof prb.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Error)
                return object;
            return new $root.prb.Error();
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Error
         * @static
         * @param {prb.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof prb.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    prb.worker = (function() {

        /**
         * Namespace worker.
         * @memberof prb
         * @namespace
         */
        var worker = {};

        worker.RequestStartWorkerLifecycle = (function() {

            /**
             * Properties of a RequestStartWorkerLifecycle.
             * @memberof prb.worker
             * @interface IRequestStartWorkerLifecycle
             * @property {prb.IWorkerIdentity|null} [identity] RequestStartWorkerLifecycle identity
             */

            /**
             * Constructs a new RequestStartWorkerLifecycle.
             * @memberof prb.worker
             * @classdesc Represents a RequestStartWorkerLifecycle.
             * @implements IRequestStartWorkerLifecycle
             * @constructor
             * @param {prb.worker.IRequestStartWorkerLifecycle=} [properties] Properties to set
             */
            function RequestStartWorkerLifecycle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestStartWorkerLifecycle identity.
             * @member {prb.IWorkerIdentity|null|undefined} identity
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @instance
             */
            RequestStartWorkerLifecycle.prototype.identity = null;

            /**
             * Creates a new RequestStartWorkerLifecycle instance using the specified properties.
             * @function create
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {prb.worker.IRequestStartWorkerLifecycle=} [properties] Properties to set
             * @returns {prb.worker.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle instance
             */
            RequestStartWorkerLifecycle.create = function create(properties) {
                return new RequestStartWorkerLifecycle(properties);
            };

            /**
             * Encodes the specified RequestStartWorkerLifecycle message. Does not implicitly {@link prb.worker.RequestStartWorkerLifecycle.verify|verify} messages.
             * @function encode
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {prb.worker.IRequestStartWorkerLifecycle} message RequestStartWorkerLifecycle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestStartWorkerLifecycle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    $root.prb.WorkerIdentity.encode(message.identity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestStartWorkerLifecycle message, length delimited. Does not implicitly {@link prb.worker.RequestStartWorkerLifecycle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {prb.worker.IRequestStartWorkerLifecycle} message RequestStartWorkerLifecycle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestStartWorkerLifecycle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer.
             * @function decode
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.worker.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestStartWorkerLifecycle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.worker.RequestStartWorkerLifecycle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = $root.prb.WorkerIdentity.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestStartWorkerLifecycle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.worker.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestStartWorkerLifecycle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestStartWorkerLifecycle message.
             * @function verify
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestStartWorkerLifecycle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity")) {
                    var error = $root.prb.WorkerIdentity.verify(message.identity);
                    if (error)
                        return "identity." + error;
                }
                return null;
            };

            /**
             * Creates a RequestStartWorkerLifecycle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.worker.RequestStartWorkerLifecycle} RequestStartWorkerLifecycle
             */
            RequestStartWorkerLifecycle.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.worker.RequestStartWorkerLifecycle)
                    return object;
                var message = new $root.prb.worker.RequestStartWorkerLifecycle();
                if (object.identity != null) {
                    if (typeof object.identity !== "object")
                        throw TypeError(".prb.worker.RequestStartWorkerLifecycle.identity: object expected");
                    message.identity = $root.prb.WorkerIdentity.fromObject(object.identity);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestStartWorkerLifecycle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @static
             * @param {prb.worker.RequestStartWorkerLifecycle} message RequestStartWorkerLifecycle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestStartWorkerLifecycle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.identity = null;
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = $root.prb.WorkerIdentity.toObject(message.identity, options);
                return object;
            };

            /**
             * Converts this RequestStartWorkerLifecycle to JSON.
             * @function toJSON
             * @memberof prb.worker.RequestStartWorkerLifecycle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestStartWorkerLifecycle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestStartWorkerLifecycle;
        })();

        worker.AreYouThere = (function() {

            /**
             * Properties of an AreYouThere.
             * @memberof prb.worker
             * @interface IAreYouThere
             * @property {prb.IWorkerIdentity|null} [identity] AreYouThere identity
             * @property {boolean|null} [isResponse] AreYouThere isResponse
             */

            /**
             * Constructs a new AreYouThere.
             * @memberof prb.worker
             * @classdesc Represents an AreYouThere.
             * @implements IAreYouThere
             * @constructor
             * @param {prb.worker.IAreYouThere=} [properties] Properties to set
             */
            function AreYouThere(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AreYouThere identity.
             * @member {prb.IWorkerIdentity|null|undefined} identity
             * @memberof prb.worker.AreYouThere
             * @instance
             */
            AreYouThere.prototype.identity = null;

            /**
             * AreYouThere isResponse.
             * @member {boolean} isResponse
             * @memberof prb.worker.AreYouThere
             * @instance
             */
            AreYouThere.prototype.isResponse = false;

            /**
             * Creates a new AreYouThere instance using the specified properties.
             * @function create
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {prb.worker.IAreYouThere=} [properties] Properties to set
             * @returns {prb.worker.AreYouThere} AreYouThere instance
             */
            AreYouThere.create = function create(properties) {
                return new AreYouThere(properties);
            };

            /**
             * Encodes the specified AreYouThere message. Does not implicitly {@link prb.worker.AreYouThere.verify|verify} messages.
             * @function encode
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {prb.worker.IAreYouThere} message AreYouThere message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AreYouThere.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    $root.prb.WorkerIdentity.encode(message.identity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.isResponse != null && Object.hasOwnProperty.call(message, "isResponse"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isResponse);
                return writer;
            };

            /**
             * Encodes the specified AreYouThere message, length delimited. Does not implicitly {@link prb.worker.AreYouThere.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {prb.worker.IAreYouThere} message AreYouThere message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AreYouThere.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AreYouThere message from the specified reader or buffer.
             * @function decode
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.worker.AreYouThere} AreYouThere
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AreYouThere.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.worker.AreYouThere();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = $root.prb.WorkerIdentity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.isResponse = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AreYouThere message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.worker.AreYouThere} AreYouThere
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AreYouThere.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AreYouThere message.
             * @function verify
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AreYouThere.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity")) {
                    var error = $root.prb.WorkerIdentity.verify(message.identity);
                    if (error)
                        return "identity." + error;
                }
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    if (typeof message.isResponse !== "boolean")
                        return "isResponse: boolean expected";
                return null;
            };

            /**
             * Creates an AreYouThere message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.worker.AreYouThere} AreYouThere
             */
            AreYouThere.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.worker.AreYouThere)
                    return object;
                var message = new $root.prb.worker.AreYouThere();
                if (object.identity != null) {
                    if (typeof object.identity !== "object")
                        throw TypeError(".prb.worker.AreYouThere.identity: object expected");
                    message.identity = $root.prb.WorkerIdentity.fromObject(object.identity);
                }
                if (object.isResponse != null)
                    message.isResponse = Boolean(object.isResponse);
                return message;
            };

            /**
             * Creates a plain object from an AreYouThere message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.worker.AreYouThere
             * @static
             * @param {prb.worker.AreYouThere} message AreYouThere
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AreYouThere.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identity = null;
                    object.isResponse = false;
                }
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = $root.prb.WorkerIdentity.toObject(message.identity, options);
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    object.isResponse = message.isResponse;
                return object;
            };

            /**
             * Converts this AreYouThere to JSON.
             * @function toJSON
             * @memberof prb.worker.AreYouThere
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AreYouThere.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AreYouThere;
        })();

        worker.RequestKickWorker = (function() {

            /**
             * Properties of a RequestKickWorker.
             * @memberof prb.worker
             * @interface IRequestKickWorker
             * @property {prb.IWorkerIdentity|null} [identity] RequestKickWorker identity
             * @property {string|null} [reason] RequestKickWorker reason
             */

            /**
             * Constructs a new RequestKickWorker.
             * @memberof prb.worker
             * @classdesc Represents a RequestKickWorker.
             * @implements IRequestKickWorker
             * @constructor
             * @param {prb.worker.IRequestKickWorker=} [properties] Properties to set
             */
            function RequestKickWorker(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestKickWorker identity.
             * @member {prb.IWorkerIdentity|null|undefined} identity
             * @memberof prb.worker.RequestKickWorker
             * @instance
             */
            RequestKickWorker.prototype.identity = null;

            /**
             * RequestKickWorker reason.
             * @member {string} reason
             * @memberof prb.worker.RequestKickWorker
             * @instance
             */
            RequestKickWorker.prototype.reason = "";

            /**
             * Creates a new RequestKickWorker instance using the specified properties.
             * @function create
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {prb.worker.IRequestKickWorker=} [properties] Properties to set
             * @returns {prb.worker.RequestKickWorker} RequestKickWorker instance
             */
            RequestKickWorker.create = function create(properties) {
                return new RequestKickWorker(properties);
            };

            /**
             * Encodes the specified RequestKickWorker message. Does not implicitly {@link prb.worker.RequestKickWorker.verify|verify} messages.
             * @function encode
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {prb.worker.IRequestKickWorker} message RequestKickWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestKickWorker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    $root.prb.WorkerIdentity.encode(message.identity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified RequestKickWorker message, length delimited. Does not implicitly {@link prb.worker.RequestKickWorker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {prb.worker.IRequestKickWorker} message RequestKickWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestKickWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestKickWorker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.worker.RequestKickWorker} RequestKickWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestKickWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.worker.RequestKickWorker();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = $root.prb.WorkerIdentity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestKickWorker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.worker.RequestKickWorker} RequestKickWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestKickWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestKickWorker message.
             * @function verify
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestKickWorker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity")) {
                    var error = $root.prb.WorkerIdentity.verify(message.identity);
                    if (error)
                        return "identity." + error;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates a RequestKickWorker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.worker.RequestKickWorker} RequestKickWorker
             */
            RequestKickWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.worker.RequestKickWorker)
                    return object;
                var message = new $root.prb.worker.RequestKickWorker();
                if (object.identity != null) {
                    if (typeof object.identity !== "object")
                        throw TypeError(".prb.worker.RequestKickWorker.identity: object expected");
                    message.identity = $root.prb.WorkerIdentity.fromObject(object.identity);
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a plain object from a RequestKickWorker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.worker.RequestKickWorker
             * @static
             * @param {prb.worker.RequestKickWorker} message RequestKickWorker
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestKickWorker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identity = null;
                    object.reason = "";
                }
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = $root.prb.WorkerIdentity.toObject(message.identity, options);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Converts this RequestKickWorker to JSON.
             * @function toJSON
             * @memberof prb.worker.RequestKickWorker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestKickWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestKickWorker;
        })();

        worker.WorkerShouldExit = (function() {

            /**
             * Properties of a WorkerShouldExit.
             * @memberof prb.worker
             * @interface IWorkerShouldExit
             * @property {prb.IWorkerIdentity|null} [identity] WorkerShouldExit identity
             * @property {string|null} [reason] WorkerShouldExit reason
             */

            /**
             * Constructs a new WorkerShouldExit.
             * @memberof prb.worker
             * @classdesc Represents a WorkerShouldExit.
             * @implements IWorkerShouldExit
             * @constructor
             * @param {prb.worker.IWorkerShouldExit=} [properties] Properties to set
             */
            function WorkerShouldExit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkerShouldExit identity.
             * @member {prb.IWorkerIdentity|null|undefined} identity
             * @memberof prb.worker.WorkerShouldExit
             * @instance
             */
            WorkerShouldExit.prototype.identity = null;

            /**
             * WorkerShouldExit reason.
             * @member {string} reason
             * @memberof prb.worker.WorkerShouldExit
             * @instance
             */
            WorkerShouldExit.prototype.reason = "";

            /**
             * Creates a new WorkerShouldExit instance using the specified properties.
             * @function create
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {prb.worker.IWorkerShouldExit=} [properties] Properties to set
             * @returns {prb.worker.WorkerShouldExit} WorkerShouldExit instance
             */
            WorkerShouldExit.create = function create(properties) {
                return new WorkerShouldExit(properties);
            };

            /**
             * Encodes the specified WorkerShouldExit message. Does not implicitly {@link prb.worker.WorkerShouldExit.verify|verify} messages.
             * @function encode
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {prb.worker.IWorkerShouldExit} message WorkerShouldExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerShouldExit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    $root.prb.WorkerIdentity.encode(message.identity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified WorkerShouldExit message, length delimited. Does not implicitly {@link prb.worker.WorkerShouldExit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {prb.worker.IWorkerShouldExit} message WorkerShouldExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerShouldExit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WorkerShouldExit message from the specified reader or buffer.
             * @function decode
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.worker.WorkerShouldExit} WorkerShouldExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerShouldExit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.worker.WorkerShouldExit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = $root.prb.WorkerIdentity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WorkerShouldExit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.worker.WorkerShouldExit} WorkerShouldExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerShouldExit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WorkerShouldExit message.
             * @function verify
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkerShouldExit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity")) {
                    var error = $root.prb.WorkerIdentity.verify(message.identity);
                    if (error)
                        return "identity." + error;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates a WorkerShouldExit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.worker.WorkerShouldExit} WorkerShouldExit
             */
            WorkerShouldExit.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.worker.WorkerShouldExit)
                    return object;
                var message = new $root.prb.worker.WorkerShouldExit();
                if (object.identity != null) {
                    if (typeof object.identity !== "object")
                        throw TypeError(".prb.worker.WorkerShouldExit.identity: object expected");
                    message.identity = $root.prb.WorkerIdentity.fromObject(object.identity);
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a plain object from a WorkerShouldExit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.worker.WorkerShouldExit
             * @static
             * @param {prb.worker.WorkerShouldExit} message WorkerShouldExit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WorkerShouldExit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identity = null;
                    object.reason = "";
                }
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = $root.prb.WorkerIdentity.toObject(message.identity, options);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Converts this WorkerShouldExit to JSON.
             * @function toJSON
             * @memberof prb.worker.WorkerShouldExit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WorkerShouldExit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WorkerShouldExit;
        })();

        return worker;
    })();

    prb.WorkerCertificate = (function() {

        /**
         * Properties of a WorkerCertificate.
         * @memberof prb
         * @interface IWorkerCertificate
         * @property {string|null} [privateKey] WorkerCertificate privateKey
         * @property {string|null} [publicKey] WorkerCertificate publicKey
         */

        /**
         * Constructs a new WorkerCertificate.
         * @memberof prb
         * @classdesc Represents a WorkerCertificate.
         * @implements IWorkerCertificate
         * @constructor
         * @param {prb.IWorkerCertificate=} [properties] Properties to set
         */
        function WorkerCertificate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkerCertificate privateKey.
         * @member {string} privateKey
         * @memberof prb.WorkerCertificate
         * @instance
         */
        WorkerCertificate.prototype.privateKey = "";

        /**
         * WorkerCertificate publicKey.
         * @member {string} publicKey
         * @memberof prb.WorkerCertificate
         * @instance
         */
        WorkerCertificate.prototype.publicKey = "";

        /**
         * Creates a new WorkerCertificate instance using the specified properties.
         * @function create
         * @memberof prb.WorkerCertificate
         * @static
         * @param {prb.IWorkerCertificate=} [properties] Properties to set
         * @returns {prb.WorkerCertificate} WorkerCertificate instance
         */
        WorkerCertificate.create = function create(properties) {
            return new WorkerCertificate(properties);
        };

        /**
         * Encodes the specified WorkerCertificate message. Does not implicitly {@link prb.WorkerCertificate.verify|verify} messages.
         * @function encode
         * @memberof prb.WorkerCertificate
         * @static
         * @param {prb.IWorkerCertificate} message WorkerCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerCertificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.privateKey);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.publicKey);
            return writer;
        };

        /**
         * Encodes the specified WorkerCertificate message, length delimited. Does not implicitly {@link prb.WorkerCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WorkerCertificate
         * @static
         * @param {prb.IWorkerCertificate} message WorkerCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerCertificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WorkerCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.WorkerCertificate} WorkerCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerCertificate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WorkerCertificate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                case 2:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorkerCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WorkerCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WorkerCertificate} WorkerCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerCertificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerCertificate message.
         * @function verify
         * @memberof prb.WorkerCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerCertificate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!$util.isString(message.privateKey))
                    return "privateKey: string expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
            return null;
        };

        /**
         * Creates a WorkerCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WorkerCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.WorkerCertificate} WorkerCertificate
         */
        WorkerCertificate.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WorkerCertificate)
                return object;
            var message = new $root.prb.WorkerCertificate();
            if (object.privateKey != null)
                message.privateKey = String(object.privateKey);
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            return message;
        };

        /**
         * Creates a plain object from a WorkerCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WorkerCertificate
         * @static
         * @param {prb.WorkerCertificate} message WorkerCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerCertificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.privateKey = "";
                object.publicKey = "";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = message.privateKey;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            return object;
        };

        /**
         * Converts this WorkerCertificate to JSON.
         * @function toJSON
         * @memberof prb.WorkerCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorkerCertificate;
    })();

    prb.WorkerIdentity = (function() {

        /**
         * Properties of a WorkerIdentity.
         * @memberof prb
         * @interface IWorkerIdentity
         * @property {string|null} [uuid] WorkerIdentity uuid
         * @property {string|null} [certHash] WorkerIdentity certHash
         */

        /**
         * Constructs a new WorkerIdentity.
         * @memberof prb
         * @classdesc Represents a WorkerIdentity.
         * @implements IWorkerIdentity
         * @constructor
         * @param {prb.IWorkerIdentity=} [properties] Properties to set
         */
        function WorkerIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkerIdentity uuid.
         * @member {string} uuid
         * @memberof prb.WorkerIdentity
         * @instance
         */
        WorkerIdentity.prototype.uuid = "";

        /**
         * WorkerIdentity certHash.
         * @member {string} certHash
         * @memberof prb.WorkerIdentity
         * @instance
         */
        WorkerIdentity.prototype.certHash = "";

        /**
         * Creates a new WorkerIdentity instance using the specified properties.
         * @function create
         * @memberof prb.WorkerIdentity
         * @static
         * @param {prb.IWorkerIdentity=} [properties] Properties to set
         * @returns {prb.WorkerIdentity} WorkerIdentity instance
         */
        WorkerIdentity.create = function create(properties) {
            return new WorkerIdentity(properties);
        };

        /**
         * Encodes the specified WorkerIdentity message. Does not implicitly {@link prb.WorkerIdentity.verify|verify} messages.
         * @function encode
         * @memberof prb.WorkerIdentity
         * @static
         * @param {prb.IWorkerIdentity} message WorkerIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.certHash != null && Object.hasOwnProperty.call(message, "certHash"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.certHash);
            return writer;
        };

        /**
         * Encodes the specified WorkerIdentity message, length delimited. Does not implicitly {@link prb.WorkerIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.WorkerIdentity
         * @static
         * @param {prb.IWorkerIdentity} message WorkerIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof prb.WorkerIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.WorkerIdentity} WorkerIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.WorkerIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.certHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorkerIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.WorkerIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.WorkerIdentity} WorkerIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerIdentity message.
         * @function verify
         * @memberof prb.WorkerIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.certHash != null && message.hasOwnProperty("certHash"))
                if (!$util.isString(message.certHash))
                    return "certHash: string expected";
            return null;
        };

        /**
         * Creates a WorkerIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.WorkerIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.WorkerIdentity} WorkerIdentity
         */
        WorkerIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.WorkerIdentity)
                return object;
            var message = new $root.prb.WorkerIdentity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.certHash != null)
                message.certHash = String(object.certHash);
            return message;
        };

        /**
         * Creates a plain object from a WorkerIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.WorkerIdentity
         * @static
         * @param {prb.WorkerIdentity} message WorkerIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.certHash = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.certHash != null && message.hasOwnProperty("certHash"))
                object.certHash = message.certHash;
            return object;
        };

        /**
         * Converts this WorkerIdentity to JSON.
         * @function toJSON
         * @memberof prb.WorkerIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorkerIdentity;
    })();

    prb.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof prb
         * @interface IAccount
         * @property {string|null} [privateKey] Account privateKey
         */

        /**
         * Constructs a new Account.
         * @memberof prb
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {prb.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account privateKey.
         * @member {string} privateKey
         * @memberof prb.Account
         * @instance
         */
        Account.prototype.privateKey = "";

        /**
         * Creates a new Account instance using the specified properties.
         * @function create
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount=} [properties] Properties to set
         * @returns {prb.Account} Account instance
         */
        Account.create = function create(properties) {
            return new Account(properties);
        };

        /**
         * Encodes the specified Account message. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @function encode
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.privateKey);
            return writer;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link prb.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.Account
         * @static
         * @param {prb.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof prb.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.Account();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof prb.Account
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!$util.isString(message.privateKey))
                    return "privateKey: string expected";
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.Account)
                return object;
            var message = new $root.prb.Account();
            if (object.privateKey != null)
                message.privateKey = String(object.privateKey);
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.Account
         * @static
         * @param {prb.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.privateKey = "";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = message.privateKey;
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof prb.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    prb.AccountPublic = (function() {

        /**
         * Properties of an AccountPublic.
         * @memberof prb
         * @interface IAccountPublic
         * @property {string|null} [publicKey] AccountPublic publicKey
         * @property {string|null} [ss58AddressPhala] AccountPublic ss58AddressPhala
         * @property {string|null} [ss58AddressRococo] AccountPublic ss58AddressRococo
         */

        /**
         * Constructs a new AccountPublic.
         * @memberof prb
         * @classdesc Represents an AccountPublic.
         * @implements IAccountPublic
         * @constructor
         * @param {prb.IAccountPublic=} [properties] Properties to set
         */
        function AccountPublic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountPublic publicKey.
         * @member {string} publicKey
         * @memberof prb.AccountPublic
         * @instance
         */
        AccountPublic.prototype.publicKey = "";

        /**
         * AccountPublic ss58AddressPhala.
         * @member {string} ss58AddressPhala
         * @memberof prb.AccountPublic
         * @instance
         */
        AccountPublic.prototype.ss58AddressPhala = "";

        /**
         * AccountPublic ss58AddressRococo.
         * @member {string} ss58AddressRococo
         * @memberof prb.AccountPublic
         * @instance
         */
        AccountPublic.prototype.ss58AddressRococo = "";

        /**
         * Creates a new AccountPublic instance using the specified properties.
         * @function create
         * @memberof prb.AccountPublic
         * @static
         * @param {prb.IAccountPublic=} [properties] Properties to set
         * @returns {prb.AccountPublic} AccountPublic instance
         */
        AccountPublic.create = function create(properties) {
            return new AccountPublic(properties);
        };

        /**
         * Encodes the specified AccountPublic message. Does not implicitly {@link prb.AccountPublic.verify|verify} messages.
         * @function encode
         * @memberof prb.AccountPublic
         * @static
         * @param {prb.IAccountPublic} message AccountPublic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountPublic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
            if (message.ss58AddressPhala != null && Object.hasOwnProperty.call(message, "ss58AddressPhala"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ss58AddressPhala);
            if (message.ss58AddressRococo != null && Object.hasOwnProperty.call(message, "ss58AddressRococo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ss58AddressRococo);
            return writer;
        };

        /**
         * Encodes the specified AccountPublic message, length delimited. Does not implicitly {@link prb.AccountPublic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prb.AccountPublic
         * @static
         * @param {prb.IAccountPublic} message AccountPublic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountPublic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountPublic message from the specified reader or buffer.
         * @function decode
         * @memberof prb.AccountPublic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prb.AccountPublic} AccountPublic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountPublic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.AccountPublic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicKey = reader.string();
                    break;
                case 2:
                    message.ss58AddressPhala = reader.string();
                    break;
                case 3:
                    message.ss58AddressRococo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountPublic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prb.AccountPublic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prb.AccountPublic} AccountPublic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountPublic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountPublic message.
         * @function verify
         * @memberof prb.AccountPublic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountPublic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
            if (message.ss58AddressPhala != null && message.hasOwnProperty("ss58AddressPhala"))
                if (!$util.isString(message.ss58AddressPhala))
                    return "ss58AddressPhala: string expected";
            if (message.ss58AddressRococo != null && message.hasOwnProperty("ss58AddressRococo"))
                if (!$util.isString(message.ss58AddressRococo))
                    return "ss58AddressRococo: string expected";
            return null;
        };

        /**
         * Creates an AccountPublic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prb.AccountPublic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prb.AccountPublic} AccountPublic
         */
        AccountPublic.fromObject = function fromObject(object) {
            if (object instanceof $root.prb.AccountPublic)
                return object;
            var message = new $root.prb.AccountPublic();
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            if (object.ss58AddressPhala != null)
                message.ss58AddressPhala = String(object.ss58AddressPhala);
            if (object.ss58AddressRococo != null)
                message.ss58AddressRococo = String(object.ss58AddressRococo);
            return message;
        };

        /**
         * Creates a plain object from an AccountPublic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prb.AccountPublic
         * @static
         * @param {prb.AccountPublic} message AccountPublic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountPublic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.publicKey = "";
                object.ss58AddressPhala = "";
                object.ss58AddressRococo = "";
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.ss58AddressPhala != null && message.hasOwnProperty("ss58AddressPhala"))
                object.ss58AddressPhala = message.ss58AddressPhala;
            if (message.ss58AddressRococo != null && message.hasOwnProperty("ss58AddressRococo"))
                object.ss58AddressRococo = message.ss58AddressRococo;
            return object;
        };

        /**
         * Converts this AccountPublic to JSON.
         * @function toJSON
         * @memberof prb.AccountPublic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountPublic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountPublic;
    })();

    prb.manager = (function() {

        /**
         * Namespace manager.
         * @memberof prb
         * @namespace
         */
        var manager = {};

        manager.BN = (function() {

            /**
             * Properties of a BN.
             * @memberof prb.manager
             * @interface IBN
             * @property {string|null} [value] BN value
             */

            /**
             * Constructs a new BN.
             * @memberof prb.manager
             * @classdesc Represents a BN.
             * @implements IBN
             * @constructor
             * @param {prb.manager.IBN=} [properties] Properties to set
             */
            function BN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BN value.
             * @member {string} value
             * @memberof prb.manager.BN
             * @instance
             */
            BN.prototype.value = "";

            /**
             * Creates a new BN instance using the specified properties.
             * @function create
             * @memberof prb.manager.BN
             * @static
             * @param {prb.manager.IBN=} [properties] Properties to set
             * @returns {prb.manager.BN} BN instance
             */
            BN.create = function create(properties) {
                return new BN(properties);
            };

            /**
             * Encodes the specified BN message. Does not implicitly {@link prb.manager.BN.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.BN
             * @static
             * @param {prb.manager.IBN} message BN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified BN message, length delimited. Does not implicitly {@link prb.manager.BN.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.BN
             * @static
             * @param {prb.manager.IBN} message BN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BN.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BN message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.BN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.BN} BN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.BN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BN message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.BN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.BN} BN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BN.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BN message.
             * @function verify
             * @memberof prb.manager.BN
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BN.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a BN message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.BN
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.BN} BN
             */
            BN.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.BN)
                    return object;
                var message = new $root.prb.manager.BN();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BN message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.BN
             * @static
             * @param {prb.manager.BN} message BN
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BN.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BN to JSON.
             * @function toJSON
             * @memberof prb.manager.BN
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BN.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BN;
        })();

        manager.WorkerState = (function() {

            /**
             * Properties of a WorkerState.
             * @memberof prb.manager
             * @interface IWorkerState
             * @property {prb.manager.WorkerState.Status|null} [status] WorkerState status
             * @property {number|Long|null} [latestSynchedHeaderPhala] WorkerState latestSynchedHeaderPhala
             * @property {number|Long|null} [latestSynchedHeaderRococo] WorkerState latestSynchedHeaderRococo
             * @property {number|Long|null} [latestSynchedBlock] WorkerState latestSynchedBlock
             */

            /**
             * Constructs a new WorkerState.
             * @memberof prb.manager
             * @classdesc Represents a WorkerState.
             * @implements IWorkerState
             * @constructor
             * @param {prb.manager.IWorkerState=} [properties] Properties to set
             */
            function WorkerState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkerState status.
             * @member {prb.manager.WorkerState.Status} status
             * @memberof prb.manager.WorkerState
             * @instance
             */
            WorkerState.prototype.status = 0;

            /**
             * WorkerState latestSynchedHeaderPhala.
             * @member {number|Long} latestSynchedHeaderPhala
             * @memberof prb.manager.WorkerState
             * @instance
             */
            WorkerState.prototype.latestSynchedHeaderPhala = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WorkerState latestSynchedHeaderRococo.
             * @member {number|Long} latestSynchedHeaderRococo
             * @memberof prb.manager.WorkerState
             * @instance
             */
            WorkerState.prototype.latestSynchedHeaderRococo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WorkerState latestSynchedBlock.
             * @member {number|Long} latestSynchedBlock
             * @memberof prb.manager.WorkerState
             * @instance
             */
            WorkerState.prototype.latestSynchedBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new WorkerState instance using the specified properties.
             * @function create
             * @memberof prb.manager.WorkerState
             * @static
             * @param {prb.manager.IWorkerState=} [properties] Properties to set
             * @returns {prb.manager.WorkerState} WorkerState instance
             */
            WorkerState.create = function create(properties) {
                return new WorkerState(properties);
            };

            /**
             * Encodes the specified WorkerState message. Does not implicitly {@link prb.manager.WorkerState.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.WorkerState
             * @static
             * @param {prb.manager.IWorkerState} message WorkerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.latestSynchedHeaderPhala != null && Object.hasOwnProperty.call(message, "latestSynchedHeaderPhala"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.latestSynchedHeaderPhala);
                if (message.latestSynchedHeaderRococo != null && Object.hasOwnProperty.call(message, "latestSynchedHeaderRococo"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.latestSynchedHeaderRococo);
                if (message.latestSynchedBlock != null && Object.hasOwnProperty.call(message, "latestSynchedBlock"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.latestSynchedBlock);
                return writer;
            };

            /**
             * Encodes the specified WorkerState message, length delimited. Does not implicitly {@link prb.manager.WorkerState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.WorkerState
             * @static
             * @param {prb.manager.IWorkerState} message WorkerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WorkerState message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.WorkerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.WorkerState} WorkerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.WorkerState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.latestSynchedHeaderPhala = reader.uint64();
                        break;
                    case 3:
                        message.latestSynchedHeaderRococo = reader.uint64();
                        break;
                    case 4:
                        message.latestSynchedBlock = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WorkerState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.WorkerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.WorkerState} WorkerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WorkerState message.
             * @function verify
             * @memberof prb.manager.WorkerState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkerState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.latestSynchedHeaderPhala != null && message.hasOwnProperty("latestSynchedHeaderPhala"))
                    if (!$util.isInteger(message.latestSynchedHeaderPhala) && !(message.latestSynchedHeaderPhala && $util.isInteger(message.latestSynchedHeaderPhala.low) && $util.isInteger(message.latestSynchedHeaderPhala.high)))
                        return "latestSynchedHeaderPhala: integer|Long expected";
                if (message.latestSynchedHeaderRococo != null && message.hasOwnProperty("latestSynchedHeaderRococo"))
                    if (!$util.isInteger(message.latestSynchedHeaderRococo) && !(message.latestSynchedHeaderRococo && $util.isInteger(message.latestSynchedHeaderRococo.low) && $util.isInteger(message.latestSynchedHeaderRococo.high)))
                        return "latestSynchedHeaderRococo: integer|Long expected";
                if (message.latestSynchedBlock != null && message.hasOwnProperty("latestSynchedBlock"))
                    if (!$util.isInteger(message.latestSynchedBlock) && !(message.latestSynchedBlock && $util.isInteger(message.latestSynchedBlock.low) && $util.isInteger(message.latestSynchedBlock.high)))
                        return "latestSynchedBlock: integer|Long expected";
                return null;
            };

            /**
             * Creates a WorkerState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.WorkerState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.WorkerState} WorkerState
             */
            WorkerState.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.WorkerState)
                    return object;
                var message = new $root.prb.manager.WorkerState();
                switch (object.status) {
                case "S_IDLE":
                case 0:
                    message.status = 0;
                    break;
                case "S_STARTING":
                case 1:
                    message.status = 1;
                    break;
                case "S_PENDING_SYNCHING":
                case 2:
                    message.status = 2;
                    break;
                case "S_SYNCHING":
                case 3:
                    message.status = 3;
                    break;
                case "S_ONLINE":
                case 4:
                    message.status = 4;
                    break;
                case "S_KICKED":
                case 5:
                    message.status = 5;
                    break;
                }
                if (object.latestSynchedHeaderPhala != null)
                    if ($util.Long)
                        (message.latestSynchedHeaderPhala = $util.Long.fromValue(object.latestSynchedHeaderPhala)).unsigned = true;
                    else if (typeof object.latestSynchedHeaderPhala === "string")
                        message.latestSynchedHeaderPhala = parseInt(object.latestSynchedHeaderPhala, 10);
                    else if (typeof object.latestSynchedHeaderPhala === "number")
                        message.latestSynchedHeaderPhala = object.latestSynchedHeaderPhala;
                    else if (typeof object.latestSynchedHeaderPhala === "object")
                        message.latestSynchedHeaderPhala = new $util.LongBits(object.latestSynchedHeaderPhala.low >>> 0, object.latestSynchedHeaderPhala.high >>> 0).toNumber(true);
                if (object.latestSynchedHeaderRococo != null)
                    if ($util.Long)
                        (message.latestSynchedHeaderRococo = $util.Long.fromValue(object.latestSynchedHeaderRococo)).unsigned = true;
                    else if (typeof object.latestSynchedHeaderRococo === "string")
                        message.latestSynchedHeaderRococo = parseInt(object.latestSynchedHeaderRococo, 10);
                    else if (typeof object.latestSynchedHeaderRococo === "number")
                        message.latestSynchedHeaderRococo = object.latestSynchedHeaderRococo;
                    else if (typeof object.latestSynchedHeaderRococo === "object")
                        message.latestSynchedHeaderRococo = new $util.LongBits(object.latestSynchedHeaderRococo.low >>> 0, object.latestSynchedHeaderRococo.high >>> 0).toNumber(true);
                if (object.latestSynchedBlock != null)
                    if ($util.Long)
                        (message.latestSynchedBlock = $util.Long.fromValue(object.latestSynchedBlock)).unsigned = true;
                    else if (typeof object.latestSynchedBlock === "string")
                        message.latestSynchedBlock = parseInt(object.latestSynchedBlock, 10);
                    else if (typeof object.latestSynchedBlock === "number")
                        message.latestSynchedBlock = object.latestSynchedBlock;
                    else if (typeof object.latestSynchedBlock === "object")
                        message.latestSynchedBlock = new $util.LongBits(object.latestSynchedBlock.low >>> 0, object.latestSynchedBlock.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a WorkerState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.WorkerState
             * @static
             * @param {prb.manager.WorkerState} message WorkerState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WorkerState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "S_IDLE" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestSynchedHeaderPhala = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestSynchedHeaderPhala = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestSynchedHeaderRococo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestSynchedHeaderRococo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestSynchedBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestSynchedBlock = options.longs === String ? "0" : 0;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.prb.manager.WorkerState.Status[message.status] : message.status;
                if (message.latestSynchedHeaderPhala != null && message.hasOwnProperty("latestSynchedHeaderPhala"))
                    if (typeof message.latestSynchedHeaderPhala === "number")
                        object.latestSynchedHeaderPhala = options.longs === String ? String(message.latestSynchedHeaderPhala) : message.latestSynchedHeaderPhala;
                    else
                        object.latestSynchedHeaderPhala = options.longs === String ? $util.Long.prototype.toString.call(message.latestSynchedHeaderPhala) : options.longs === Number ? new $util.LongBits(message.latestSynchedHeaderPhala.low >>> 0, message.latestSynchedHeaderPhala.high >>> 0).toNumber(true) : message.latestSynchedHeaderPhala;
                if (message.latestSynchedHeaderRococo != null && message.hasOwnProperty("latestSynchedHeaderRococo"))
                    if (typeof message.latestSynchedHeaderRococo === "number")
                        object.latestSynchedHeaderRococo = options.longs === String ? String(message.latestSynchedHeaderRococo) : message.latestSynchedHeaderRococo;
                    else
                        object.latestSynchedHeaderRococo = options.longs === String ? $util.Long.prototype.toString.call(message.latestSynchedHeaderRococo) : options.longs === Number ? new $util.LongBits(message.latestSynchedHeaderRococo.low >>> 0, message.latestSynchedHeaderRococo.high >>> 0).toNumber(true) : message.latestSynchedHeaderRococo;
                if (message.latestSynchedBlock != null && message.hasOwnProperty("latestSynchedBlock"))
                    if (typeof message.latestSynchedBlock === "number")
                        object.latestSynchedBlock = options.longs === String ? String(message.latestSynchedBlock) : message.latestSynchedBlock;
                    else
                        object.latestSynchedBlock = options.longs === String ? $util.Long.prototype.toString.call(message.latestSynchedBlock) : options.longs === Number ? new $util.LongBits(message.latestSynchedBlock.low >>> 0, message.latestSynchedBlock.high >>> 0).toNumber(true) : message.latestSynchedBlock;
                return object;
            };

            /**
             * Converts this WorkerState to JSON.
             * @function toJSON
             * @memberof prb.manager.WorkerState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WorkerState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Status enum.
             * @name prb.manager.WorkerState.Status
             * @enum {number}
             * @property {number} S_IDLE=0 S_IDLE value
             * @property {number} S_STARTING=1 S_STARTING value
             * @property {number} S_PENDING_SYNCHING=2 S_PENDING_SYNCHING value
             * @property {number} S_SYNCHING=3 S_SYNCHING value
             * @property {number} S_ONLINE=4 S_ONLINE value
             * @property {number} S_KICKED=5 S_KICKED value
             */
            WorkerState.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "S_IDLE"] = 0;
                values[valuesById[1] = "S_STARTING"] = 1;
                values[valuesById[2] = "S_PENDING_SYNCHING"] = 2;
                values[valuesById[3] = "S_SYNCHING"] = 3;
                values[valuesById[4] = "S_ONLINE"] = 4;
                values[valuesById[5] = "S_KICKED"] = 5;
                return values;
            })();

            return WorkerState;
        })();

        manager.AccountState = (function() {

            /**
             * Properties of an AccountState.
             * @memberof prb.manager
             * @interface IAccountState
             * @property {prb.manager.IBN|null} [balance] AccountState balance
             */

            /**
             * Constructs a new AccountState.
             * @memberof prb.manager
             * @classdesc Represents an AccountState.
             * @implements IAccountState
             * @constructor
             * @param {prb.manager.IAccountState=} [properties] Properties to set
             */
            function AccountState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AccountState balance.
             * @member {prb.manager.IBN|null|undefined} balance
             * @memberof prb.manager.AccountState
             * @instance
             */
            AccountState.prototype.balance = null;

            /**
             * Creates a new AccountState instance using the specified properties.
             * @function create
             * @memberof prb.manager.AccountState
             * @static
             * @param {prb.manager.IAccountState=} [properties] Properties to set
             * @returns {prb.manager.AccountState} AccountState instance
             */
            AccountState.create = function create(properties) {
                return new AccountState(properties);
            };

            /**
             * Encodes the specified AccountState message. Does not implicitly {@link prb.manager.AccountState.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.AccountState
             * @static
             * @param {prb.manager.IAccountState} message AccountState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                    $root.prb.manager.BN.encode(message.balance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AccountState message, length delimited. Does not implicitly {@link prb.manager.AccountState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.AccountState
             * @static
             * @param {prb.manager.IAccountState} message AccountState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AccountState message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.AccountState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.AccountState} AccountState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.AccountState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.balance = $root.prb.manager.BN.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AccountState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.AccountState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.AccountState} AccountState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AccountState message.
             * @function verify
             * @memberof prb.manager.AccountState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.balance != null && message.hasOwnProperty("balance")) {
                    var error = $root.prb.manager.BN.verify(message.balance);
                    if (error)
                        return "balance." + error;
                }
                return null;
            };

            /**
             * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.AccountState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.AccountState} AccountState
             */
            AccountState.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.AccountState)
                    return object;
                var message = new $root.prb.manager.AccountState();
                if (object.balance != null) {
                    if (typeof object.balance !== "object")
                        throw TypeError(".prb.manager.AccountState.balance: object expected");
                    message.balance = $root.prb.manager.BN.fromObject(object.balance);
                }
                return message;
            };

            /**
             * Creates a plain object from an AccountState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.AccountState
             * @static
             * @param {prb.manager.AccountState} message AccountState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.balance = null;
                if (message.balance != null && message.hasOwnProperty("balance"))
                    object.balance = $root.prb.manager.BN.toObject(message.balance, options);
                return object;
            };

            /**
             * Converts this AccountState to JSON.
             * @function toJSON
             * @memberof prb.manager.AccountState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AccountState;
        })();

        manager.WorkerStateUpdate = (function() {

            /**
             * Properties of a WorkerStateUpdate.
             * @memberof prb.manager
             * @interface IWorkerStateUpdate
             * @property {Array.<prb.manager.IWorkerState>|null} [values] WorkerStateUpdate values
             */

            /**
             * Constructs a new WorkerStateUpdate.
             * @memberof prb.manager
             * @classdesc Represents a WorkerStateUpdate.
             * @implements IWorkerStateUpdate
             * @constructor
             * @param {prb.manager.IWorkerStateUpdate=} [properties] Properties to set
             */
            function WorkerStateUpdate(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WorkerStateUpdate values.
             * @member {Array.<prb.manager.IWorkerState>} values
             * @memberof prb.manager.WorkerStateUpdate
             * @instance
             */
            WorkerStateUpdate.prototype.values = $util.emptyArray;

            /**
             * Creates a new WorkerStateUpdate instance using the specified properties.
             * @function create
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {prb.manager.IWorkerStateUpdate=} [properties] Properties to set
             * @returns {prb.manager.WorkerStateUpdate} WorkerStateUpdate instance
             */
            WorkerStateUpdate.create = function create(properties) {
                return new WorkerStateUpdate(properties);
            };

            /**
             * Encodes the specified WorkerStateUpdate message. Does not implicitly {@link prb.manager.WorkerStateUpdate.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {prb.manager.IWorkerStateUpdate} message WorkerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerStateUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.prb.manager.WorkerState.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WorkerStateUpdate message, length delimited. Does not implicitly {@link prb.manager.WorkerStateUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {prb.manager.IWorkerStateUpdate} message WorkerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WorkerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WorkerStateUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.WorkerStateUpdate} WorkerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerStateUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.WorkerStateUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.prb.manager.WorkerState.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WorkerStateUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.WorkerStateUpdate} WorkerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WorkerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WorkerStateUpdate message.
             * @function verify
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WorkerStateUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.prb.manager.WorkerState.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a WorkerStateUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.WorkerStateUpdate} WorkerStateUpdate
             */
            WorkerStateUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.WorkerStateUpdate)
                    return object;
                var message = new $root.prb.manager.WorkerStateUpdate();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".prb.manager.WorkerStateUpdate.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".prb.manager.WorkerStateUpdate.values: object expected");
                        message.values[i] = $root.prb.manager.WorkerState.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a WorkerStateUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.WorkerStateUpdate
             * @static
             * @param {prb.manager.WorkerStateUpdate} message WorkerStateUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WorkerStateUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.prb.manager.WorkerState.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this WorkerStateUpdate to JSON.
             * @function toJSON
             * @memberof prb.manager.WorkerStateUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WorkerStateUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WorkerStateUpdate;
        })();

        manager.QueryWorkerState = (function() {

            /**
             * Properties of a QueryWorkerState.
             * @memberof prb.manager
             * @interface IQueryWorkerState
             * @property {Array.<prb.IWorkerIdentity>|null} [queries] QueryWorkerState queries
             */

            /**
             * Constructs a new QueryWorkerState.
             * @memberof prb.manager
             * @classdesc Represents a QueryWorkerState.
             * @implements IQueryWorkerState
             * @constructor
             * @param {prb.manager.IQueryWorkerState=} [properties] Properties to set
             */
            function QueryWorkerState(properties) {
                this.queries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryWorkerState queries.
             * @member {Array.<prb.IWorkerIdentity>} queries
             * @memberof prb.manager.QueryWorkerState
             * @instance
             */
            QueryWorkerState.prototype.queries = $util.emptyArray;

            /**
             * Creates a new QueryWorkerState instance using the specified properties.
             * @function create
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {prb.manager.IQueryWorkerState=} [properties] Properties to set
             * @returns {prb.manager.QueryWorkerState} QueryWorkerState instance
             */
            QueryWorkerState.create = function create(properties) {
                return new QueryWorkerState(properties);
            };

            /**
             * Encodes the specified QueryWorkerState message. Does not implicitly {@link prb.manager.QueryWorkerState.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {prb.manager.IQueryWorkerState} message QueryWorkerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryWorkerState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.queries != null && message.queries.length)
                    for (var i = 0; i < message.queries.length; ++i)
                        $root.prb.WorkerIdentity.encode(message.queries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryWorkerState message, length delimited. Does not implicitly {@link prb.manager.QueryWorkerState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {prb.manager.IQueryWorkerState} message QueryWorkerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryWorkerState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryWorkerState message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.QueryWorkerState} QueryWorkerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryWorkerState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.QueryWorkerState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.queries && message.queries.length))
                            message.queries = [];
                        message.queries.push($root.prb.WorkerIdentity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryWorkerState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.QueryWorkerState} QueryWorkerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryWorkerState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryWorkerState message.
             * @function verify
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryWorkerState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.queries != null && message.hasOwnProperty("queries")) {
                    if (!Array.isArray(message.queries))
                        return "queries: array expected";
                    for (var i = 0; i < message.queries.length; ++i) {
                        var error = $root.prb.WorkerIdentity.verify(message.queries[i]);
                        if (error)
                            return "queries." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a QueryWorkerState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.QueryWorkerState} QueryWorkerState
             */
            QueryWorkerState.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.QueryWorkerState)
                    return object;
                var message = new $root.prb.manager.QueryWorkerState();
                if (object.queries) {
                    if (!Array.isArray(object.queries))
                        throw TypeError(".prb.manager.QueryWorkerState.queries: array expected");
                    message.queries = [];
                    for (var i = 0; i < object.queries.length; ++i) {
                        if (typeof object.queries[i] !== "object")
                            throw TypeError(".prb.manager.QueryWorkerState.queries: object expected");
                        message.queries[i] = $root.prb.WorkerIdentity.fromObject(object.queries[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryWorkerState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.QueryWorkerState
             * @static
             * @param {prb.manager.QueryWorkerState} message QueryWorkerState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryWorkerState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.queries = [];
                if (message.queries && message.queries.length) {
                    object.queries = [];
                    for (var j = 0; j < message.queries.length; ++j)
                        object.queries[j] = $root.prb.WorkerIdentity.toObject(message.queries[j], options);
                }
                return object;
            };

            /**
             * Converts this QueryWorkerState to JSON.
             * @function toJSON
             * @memberof prb.manager.QueryWorkerState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryWorkerState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryWorkerState;
        })();

        manager.AccountStateUpdate = (function() {

            /**
             * Properties of an AccountStateUpdate.
             * @memberof prb.manager
             * @interface IAccountStateUpdate
             * @property {Array.<prb.manager.IAccountState>|null} [values] AccountStateUpdate values
             */

            /**
             * Constructs a new AccountStateUpdate.
             * @memberof prb.manager
             * @classdesc Represents an AccountStateUpdate.
             * @implements IAccountStateUpdate
             * @constructor
             * @param {prb.manager.IAccountStateUpdate=} [properties] Properties to set
             */
            function AccountStateUpdate(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AccountStateUpdate values.
             * @member {Array.<prb.manager.IAccountState>} values
             * @memberof prb.manager.AccountStateUpdate
             * @instance
             */
            AccountStateUpdate.prototype.values = $util.emptyArray;

            /**
             * Creates a new AccountStateUpdate instance using the specified properties.
             * @function create
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {prb.manager.IAccountStateUpdate=} [properties] Properties to set
             * @returns {prb.manager.AccountStateUpdate} AccountStateUpdate instance
             */
            AccountStateUpdate.create = function create(properties) {
                return new AccountStateUpdate(properties);
            };

            /**
             * Encodes the specified AccountStateUpdate message. Does not implicitly {@link prb.manager.AccountStateUpdate.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {prb.manager.IAccountStateUpdate} message AccountStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountStateUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.prb.manager.AccountState.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AccountStateUpdate message, length delimited. Does not implicitly {@link prb.manager.AccountStateUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {prb.manager.IAccountStateUpdate} message AccountStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AccountStateUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.AccountStateUpdate} AccountStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountStateUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.AccountStateUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.prb.manager.AccountState.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AccountStateUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.AccountStateUpdate} AccountStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountStateUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AccountStateUpdate message.
             * @function verify
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountStateUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.prb.manager.AccountState.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an AccountStateUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.AccountStateUpdate} AccountStateUpdate
             */
            AccountStateUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.AccountStateUpdate)
                    return object;
                var message = new $root.prb.manager.AccountStateUpdate();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".prb.manager.AccountStateUpdate.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".prb.manager.AccountStateUpdate.values: object expected");
                        message.values[i] = $root.prb.manager.AccountState.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an AccountStateUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.AccountStateUpdate
             * @static
             * @param {prb.manager.AccountStateUpdate} message AccountStateUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountStateUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.prb.manager.AccountState.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this AccountStateUpdate to JSON.
             * @function toJSON
             * @memberof prb.manager.AccountStateUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountStateUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AccountStateUpdate;
        })();

        manager.QueryAccountState = (function() {

            /**
             * Properties of a QueryAccountState.
             * @memberof prb.manager
             * @interface IQueryAccountState
             * @property {Array.<prb.IAccountPublic>|null} [queries] QueryAccountState queries
             */

            /**
             * Constructs a new QueryAccountState.
             * @memberof prb.manager
             * @classdesc Represents a QueryAccountState.
             * @implements IQueryAccountState
             * @constructor
             * @param {prb.manager.IQueryAccountState=} [properties] Properties to set
             */
            function QueryAccountState(properties) {
                this.queries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryAccountState queries.
             * @member {Array.<prb.IAccountPublic>} queries
             * @memberof prb.manager.QueryAccountState
             * @instance
             */
            QueryAccountState.prototype.queries = $util.emptyArray;

            /**
             * Creates a new QueryAccountState instance using the specified properties.
             * @function create
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {prb.manager.IQueryAccountState=} [properties] Properties to set
             * @returns {prb.manager.QueryAccountState} QueryAccountState instance
             */
            QueryAccountState.create = function create(properties) {
                return new QueryAccountState(properties);
            };

            /**
             * Encodes the specified QueryAccountState message. Does not implicitly {@link prb.manager.QueryAccountState.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {prb.manager.IQueryAccountState} message QueryAccountState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAccountState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.queries != null && message.queries.length)
                    for (var i = 0; i < message.queries.length; ++i)
                        $root.prb.AccountPublic.encode(message.queries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryAccountState message, length delimited. Does not implicitly {@link prb.manager.QueryAccountState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {prb.manager.IQueryAccountState} message QueryAccountState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAccountState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryAccountState message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.QueryAccountState} QueryAccountState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAccountState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.QueryAccountState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.queries && message.queries.length))
                            message.queries = [];
                        message.queries.push($root.prb.AccountPublic.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryAccountState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.QueryAccountState} QueryAccountState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAccountState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryAccountState message.
             * @function verify
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryAccountState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.queries != null && message.hasOwnProperty("queries")) {
                    if (!Array.isArray(message.queries))
                        return "queries: array expected";
                    for (var i = 0; i < message.queries.length; ++i) {
                        var error = $root.prb.AccountPublic.verify(message.queries[i]);
                        if (error)
                            return "queries." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a QueryAccountState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.QueryAccountState} QueryAccountState
             */
            QueryAccountState.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.QueryAccountState)
                    return object;
                var message = new $root.prb.manager.QueryAccountState();
                if (object.queries) {
                    if (!Array.isArray(object.queries))
                        throw TypeError(".prb.manager.QueryAccountState.queries: array expected");
                    message.queries = [];
                    for (var i = 0; i < object.queries.length; ++i) {
                        if (typeof object.queries[i] !== "object")
                            throw TypeError(".prb.manager.QueryAccountState.queries: object expected");
                        message.queries[i] = $root.prb.AccountPublic.fromObject(object.queries[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryAccountState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.QueryAccountState
             * @static
             * @param {prb.manager.QueryAccountState} message QueryAccountState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryAccountState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.queries = [];
                if (message.queries && message.queries.length) {
                    object.queries = [];
                    for (var j = 0; j < message.queries.length; ++j)
                        object.queries[j] = $root.prb.AccountPublic.toObject(message.queries[j], options);
                }
                return object;
            };

            /**
             * Converts this QueryAccountState to JSON.
             * @function toJSON
             * @memberof prb.manager.QueryAccountState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryAccountState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryAccountState;
        })();

        manager.LifecycleManagerStateUpdate = (function() {

            /**
             * Properties of a LifecycleManagerStateUpdate.
             * @memberof prb.manager
             * @interface ILifecycleManagerStateUpdate
             * @property {string|null} [hostname] LifecycleManagerStateUpdate hostname
             */

            /**
             * Constructs a new LifecycleManagerStateUpdate.
             * @memberof prb.manager
             * @classdesc Represents a LifecycleManagerStateUpdate.
             * @implements ILifecycleManagerStateUpdate
             * @constructor
             * @param {prb.manager.ILifecycleManagerStateUpdate=} [properties] Properties to set
             */
            function LifecycleManagerStateUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LifecycleManagerStateUpdate hostname.
             * @member {string} hostname
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @instance
             */
            LifecycleManagerStateUpdate.prototype.hostname = "";

            /**
             * Creates a new LifecycleManagerStateUpdate instance using the specified properties.
             * @function create
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {prb.manager.ILifecycleManagerStateUpdate=} [properties] Properties to set
             * @returns {prb.manager.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate instance
             */
            LifecycleManagerStateUpdate.create = function create(properties) {
                return new LifecycleManagerStateUpdate(properties);
            };

            /**
             * Encodes the specified LifecycleManagerStateUpdate message. Does not implicitly {@link prb.manager.LifecycleManagerStateUpdate.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {prb.manager.ILifecycleManagerStateUpdate} message LifecycleManagerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LifecycleManagerStateUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
                return writer;
            };

            /**
             * Encodes the specified LifecycleManagerStateUpdate message, length delimited. Does not implicitly {@link prb.manager.LifecycleManagerStateUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {prb.manager.ILifecycleManagerStateUpdate} message LifecycleManagerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LifecycleManagerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LifecycleManagerStateUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.LifecycleManagerStateUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hostname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LifecycleManagerStateUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LifecycleManagerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LifecycleManagerStateUpdate message.
             * @function verify
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LifecycleManagerStateUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                return null;
            };

            /**
             * Creates a LifecycleManagerStateUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.LifecycleManagerStateUpdate} LifecycleManagerStateUpdate
             */
            LifecycleManagerStateUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.LifecycleManagerStateUpdate)
                    return object;
                var message = new $root.prb.manager.LifecycleManagerStateUpdate();
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                return message;
            };

            /**
             * Creates a plain object from a LifecycleManagerStateUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @static
             * @param {prb.manager.LifecycleManagerStateUpdate} message LifecycleManagerStateUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LifecycleManagerStateUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.hostname = "";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                return object;
            };

            /**
             * Converts this LifecycleManagerStateUpdate to JSON.
             * @function toJSON
             * @memberof prb.manager.LifecycleManagerStateUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LifecycleManagerStateUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LifecycleManagerStateUpdate;
        })();

        manager.CallOnlineLifecycleManager = (function() {

            /**
             * Properties of a CallOnlineLifecycleManager.
             * @memberof prb.manager
             * @interface ICallOnlineLifecycleManager
             * @property {boolean|null} [isResponse] CallOnlineLifecycleManager isResponse
             * @property {string|null} [hostname] CallOnlineLifecycleManager hostname
             */

            /**
             * Constructs a new CallOnlineLifecycleManager.
             * @memberof prb.manager
             * @classdesc Represents a CallOnlineLifecycleManager.
             * @implements ICallOnlineLifecycleManager
             * @constructor
             * @param {prb.manager.ICallOnlineLifecycleManager=} [properties] Properties to set
             */
            function CallOnlineLifecycleManager(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CallOnlineLifecycleManager isResponse.
             * @member {boolean} isResponse
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @instance
             */
            CallOnlineLifecycleManager.prototype.isResponse = false;

            /**
             * CallOnlineLifecycleManager hostname.
             * @member {string} hostname
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @instance
             */
            CallOnlineLifecycleManager.prototype.hostname = "";

            /**
             * Creates a new CallOnlineLifecycleManager instance using the specified properties.
             * @function create
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {prb.manager.ICallOnlineLifecycleManager=} [properties] Properties to set
             * @returns {prb.manager.CallOnlineLifecycleManager} CallOnlineLifecycleManager instance
             */
            CallOnlineLifecycleManager.create = function create(properties) {
                return new CallOnlineLifecycleManager(properties);
            };

            /**
             * Encodes the specified CallOnlineLifecycleManager message. Does not implicitly {@link prb.manager.CallOnlineLifecycleManager.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {prb.manager.ICallOnlineLifecycleManager} message CallOnlineLifecycleManager message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineLifecycleManager.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isResponse != null && Object.hasOwnProperty.call(message, "isResponse"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isResponse);
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostname);
                return writer;
            };

            /**
             * Encodes the specified CallOnlineLifecycleManager message, length delimited. Does not implicitly {@link prb.manager.CallOnlineLifecycleManager.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {prb.manager.ICallOnlineLifecycleManager} message CallOnlineLifecycleManager message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineLifecycleManager.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.CallOnlineLifecycleManager} CallOnlineLifecycleManager
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineLifecycleManager.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.CallOnlineLifecycleManager();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isResponse = reader.bool();
                        break;
                    case 2:
                        message.hostname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CallOnlineLifecycleManager message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.CallOnlineLifecycleManager} CallOnlineLifecycleManager
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineLifecycleManager.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CallOnlineLifecycleManager message.
             * @function verify
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallOnlineLifecycleManager.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    if (typeof message.isResponse !== "boolean")
                        return "isResponse: boolean expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                return null;
            };

            /**
             * Creates a CallOnlineLifecycleManager message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.CallOnlineLifecycleManager} CallOnlineLifecycleManager
             */
            CallOnlineLifecycleManager.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.CallOnlineLifecycleManager)
                    return object;
                var message = new $root.prb.manager.CallOnlineLifecycleManager();
                if (object.isResponse != null)
                    message.isResponse = Boolean(object.isResponse);
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                return message;
            };

            /**
             * Creates a plain object from a CallOnlineLifecycleManager message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @static
             * @param {prb.manager.CallOnlineLifecycleManager} message CallOnlineLifecycleManager
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallOnlineLifecycleManager.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isResponse = false;
                    object.hostname = "";
                }
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    object.isResponse = message.isResponse;
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                return object;
            };

            /**
             * Converts this CallOnlineLifecycleManager to JSON.
             * @function toJSON
             * @memberof prb.manager.CallOnlineLifecycleManager
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallOnlineLifecycleManager.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CallOnlineLifecycleManager;
        })();

        manager.RequestCreateWorker = (function() {

            /**
             * Properties of a RequestCreateWorker.
             * @memberof prb.manager
             * @interface IRequestCreateWorker
             * @property {prb.IWorkerIdentity|null} [identity] RequestCreateWorker identity
             * @property {prb.IWorkerCertificate|null} [cert] RequestCreateWorker cert
             * @property {prb.IAccount|null} [stashAccount] RequestCreateWorker stashAccount
             * @property {prb.IAccount|null} [controllerAccount] RequestCreateWorker controllerAccount
             */

            /**
             * Constructs a new RequestCreateWorker.
             * @memberof prb.manager
             * @classdesc Represents a RequestCreateWorker.
             * @implements IRequestCreateWorker
             * @constructor
             * @param {prb.manager.IRequestCreateWorker=} [properties] Properties to set
             */
            function RequestCreateWorker(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestCreateWorker identity.
             * @member {prb.IWorkerIdentity|null|undefined} identity
             * @memberof prb.manager.RequestCreateWorker
             * @instance
             */
            RequestCreateWorker.prototype.identity = null;

            /**
             * RequestCreateWorker cert.
             * @member {prb.IWorkerCertificate|null|undefined} cert
             * @memberof prb.manager.RequestCreateWorker
             * @instance
             */
            RequestCreateWorker.prototype.cert = null;

            /**
             * RequestCreateWorker stashAccount.
             * @member {prb.IAccount|null|undefined} stashAccount
             * @memberof prb.manager.RequestCreateWorker
             * @instance
             */
            RequestCreateWorker.prototype.stashAccount = null;

            /**
             * RequestCreateWorker controllerAccount.
             * @member {prb.IAccount|null|undefined} controllerAccount
             * @memberof prb.manager.RequestCreateWorker
             * @instance
             */
            RequestCreateWorker.prototype.controllerAccount = null;

            /**
             * Creates a new RequestCreateWorker instance using the specified properties.
             * @function create
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {prb.manager.IRequestCreateWorker=} [properties] Properties to set
             * @returns {prb.manager.RequestCreateWorker} RequestCreateWorker instance
             */
            RequestCreateWorker.create = function create(properties) {
                return new RequestCreateWorker(properties);
            };

            /**
             * Encodes the specified RequestCreateWorker message. Does not implicitly {@link prb.manager.RequestCreateWorker.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {prb.manager.IRequestCreateWorker} message RequestCreateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCreateWorker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identity != null && Object.hasOwnProperty.call(message, "identity"))
                    $root.prb.WorkerIdentity.encode(message.identity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                    $root.prb.WorkerCertificate.encode(message.cert, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.stashAccount != null && Object.hasOwnProperty.call(message, "stashAccount"))
                    $root.prb.Account.encode(message.stashAccount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.controllerAccount != null && Object.hasOwnProperty.call(message, "controllerAccount"))
                    $root.prb.Account.encode(message.controllerAccount, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestCreateWorker message, length delimited. Does not implicitly {@link prb.manager.RequestCreateWorker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {prb.manager.IRequestCreateWorker} message RequestCreateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestCreateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestCreateWorker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.RequestCreateWorker} RequestCreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCreateWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.RequestCreateWorker();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identity = $root.prb.WorkerIdentity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.cert = $root.prb.WorkerCertificate.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.stashAccount = $root.prb.Account.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.controllerAccount = $root.prb.Account.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestCreateWorker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.RequestCreateWorker} RequestCreateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestCreateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestCreateWorker message.
             * @function verify
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestCreateWorker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identity != null && message.hasOwnProperty("identity")) {
                    var error = $root.prb.WorkerIdentity.verify(message.identity);
                    if (error)
                        return "identity." + error;
                }
                if (message.cert != null && message.hasOwnProperty("cert")) {
                    var error = $root.prb.WorkerCertificate.verify(message.cert);
                    if (error)
                        return "cert." + error;
                }
                if (message.stashAccount != null && message.hasOwnProperty("stashAccount")) {
                    var error = $root.prb.Account.verify(message.stashAccount);
                    if (error)
                        return "stashAccount." + error;
                }
                if (message.controllerAccount != null && message.hasOwnProperty("controllerAccount")) {
                    var error = $root.prb.Account.verify(message.controllerAccount);
                    if (error)
                        return "controllerAccount." + error;
                }
                return null;
            };

            /**
             * Creates a RequestCreateWorker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.RequestCreateWorker} RequestCreateWorker
             */
            RequestCreateWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.RequestCreateWorker)
                    return object;
                var message = new $root.prb.manager.RequestCreateWorker();
                if (object.identity != null) {
                    if (typeof object.identity !== "object")
                        throw TypeError(".prb.manager.RequestCreateWorker.identity: object expected");
                    message.identity = $root.prb.WorkerIdentity.fromObject(object.identity);
                }
                if (object.cert != null) {
                    if (typeof object.cert !== "object")
                        throw TypeError(".prb.manager.RequestCreateWorker.cert: object expected");
                    message.cert = $root.prb.WorkerCertificate.fromObject(object.cert);
                }
                if (object.stashAccount != null) {
                    if (typeof object.stashAccount !== "object")
                        throw TypeError(".prb.manager.RequestCreateWorker.stashAccount: object expected");
                    message.stashAccount = $root.prb.Account.fromObject(object.stashAccount);
                }
                if (object.controllerAccount != null) {
                    if (typeof object.controllerAccount !== "object")
                        throw TypeError(".prb.manager.RequestCreateWorker.controllerAccount: object expected");
                    message.controllerAccount = $root.prb.Account.fromObject(object.controllerAccount);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestCreateWorker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.RequestCreateWorker
             * @static
             * @param {prb.manager.RequestCreateWorker} message RequestCreateWorker
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestCreateWorker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identity = null;
                    object.cert = null;
                    object.stashAccount = null;
                    object.controllerAccount = null;
                }
                if (message.identity != null && message.hasOwnProperty("identity"))
                    object.identity = $root.prb.WorkerIdentity.toObject(message.identity, options);
                if (message.cert != null && message.hasOwnProperty("cert"))
                    object.cert = $root.prb.WorkerCertificate.toObject(message.cert, options);
                if (message.stashAccount != null && message.hasOwnProperty("stashAccount"))
                    object.stashAccount = $root.prb.Account.toObject(message.stashAccount, options);
                if (message.controllerAccount != null && message.hasOwnProperty("controllerAccount"))
                    object.controllerAccount = $root.prb.Account.toObject(message.controllerAccount, options);
                return object;
            };

            /**
             * Converts this RequestCreateWorker to JSON.
             * @function toJSON
             * @memberof prb.manager.RequestCreateWorker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestCreateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestCreateWorker;
        })();

        manager.RequestUpdateWorker = (function() {

            /**
             * Properties of a RequestUpdateWorker.
             * @memberof prb.manager
             * @interface IRequestUpdateWorker
             * @property {string|null} [uuid] RequestUpdateWorker uuid
             * @property {prb.manager.IRequestCreateWorker|null} [fullValue] RequestUpdateWorker fullValue
             */

            /**
             * Constructs a new RequestUpdateWorker.
             * @memberof prb.manager
             * @classdesc Represents a RequestUpdateWorker.
             * @implements IRequestUpdateWorker
             * @constructor
             * @param {prb.manager.IRequestUpdateWorker=} [properties] Properties to set
             */
            function RequestUpdateWorker(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestUpdateWorker uuid.
             * @member {string} uuid
             * @memberof prb.manager.RequestUpdateWorker
             * @instance
             */
            RequestUpdateWorker.prototype.uuid = "";

            /**
             * RequestUpdateWorker fullValue.
             * @member {prb.manager.IRequestCreateWorker|null|undefined} fullValue
             * @memberof prb.manager.RequestUpdateWorker
             * @instance
             */
            RequestUpdateWorker.prototype.fullValue = null;

            /**
             * Creates a new RequestUpdateWorker instance using the specified properties.
             * @function create
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {prb.manager.IRequestUpdateWorker=} [properties] Properties to set
             * @returns {prb.manager.RequestUpdateWorker} RequestUpdateWorker instance
             */
            RequestUpdateWorker.create = function create(properties) {
                return new RequestUpdateWorker(properties);
            };

            /**
             * Encodes the specified RequestUpdateWorker message. Does not implicitly {@link prb.manager.RequestUpdateWorker.verify|verify} messages.
             * @function encode
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {prb.manager.IRequestUpdateWorker} message RequestUpdateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestUpdateWorker.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.fullValue != null && Object.hasOwnProperty.call(message, "fullValue"))
                    $root.prb.manager.RequestCreateWorker.encode(message.fullValue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestUpdateWorker message, length delimited. Does not implicitly {@link prb.manager.RequestUpdateWorker.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {prb.manager.IRequestUpdateWorker} message RequestUpdateWorker message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestUpdateWorker.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestUpdateWorker message from the specified reader or buffer.
             * @function decode
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.manager.RequestUpdateWorker} RequestUpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestUpdateWorker.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.manager.RequestUpdateWorker();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.string();
                        break;
                    case 2:
                        message.fullValue = $root.prb.manager.RequestCreateWorker.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestUpdateWorker message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.manager.RequestUpdateWorker} RequestUpdateWorker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestUpdateWorker.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestUpdateWorker message.
             * @function verify
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestUpdateWorker.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.fullValue != null && message.hasOwnProperty("fullValue")) {
                    var error = $root.prb.manager.RequestCreateWorker.verify(message.fullValue);
                    if (error)
                        return "fullValue." + error;
                }
                return null;
            };

            /**
             * Creates a RequestUpdateWorker message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.manager.RequestUpdateWorker} RequestUpdateWorker
             */
            RequestUpdateWorker.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.manager.RequestUpdateWorker)
                    return object;
                var message = new $root.prb.manager.RequestUpdateWorker();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.fullValue != null) {
                    if (typeof object.fullValue !== "object")
                        throw TypeError(".prb.manager.RequestUpdateWorker.fullValue: object expected");
                    message.fullValue = $root.prb.manager.RequestCreateWorker.fromObject(object.fullValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestUpdateWorker message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.manager.RequestUpdateWorker
             * @static
             * @param {prb.manager.RequestUpdateWorker} message RequestUpdateWorker
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestUpdateWorker.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.fullValue = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.fullValue != null && message.hasOwnProperty("fullValue"))
                    object.fullValue = $root.prb.manager.RequestCreateWorker.toObject(message.fullValue, options);
                return object;
            };

            /**
             * Converts this RequestUpdateWorker to JSON.
             * @function toJSON
             * @memberof prb.manager.RequestUpdateWorker
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestUpdateWorker.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestUpdateWorker;
        })();

        return manager;
    })();

    prb.trade = (function() {

        /**
         * Namespace trade.
         * @memberof prb
         * @namespace
         */
        var trade = {};

        trade.TradeSchedulerStateUpdate = (function() {

            /**
             * Properties of a TradeSchedulerStateUpdate.
             * @memberof prb.trade
             * @interface ITradeSchedulerStateUpdate
             * @property {string|null} [hostname] TradeSchedulerStateUpdate hostname
             * @property {number|null} [onlineWorkerCount] TradeSchedulerStateUpdate onlineWorkerCount
             */

            /**
             * Constructs a new TradeSchedulerStateUpdate.
             * @memberof prb.trade
             * @classdesc Represents a TradeSchedulerStateUpdate.
             * @implements ITradeSchedulerStateUpdate
             * @constructor
             * @param {prb.trade.ITradeSchedulerStateUpdate=} [properties] Properties to set
             */
            function TradeSchedulerStateUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TradeSchedulerStateUpdate hostname.
             * @member {string} hostname
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @instance
             */
            TradeSchedulerStateUpdate.prototype.hostname = "";

            /**
             * TradeSchedulerStateUpdate onlineWorkerCount.
             * @member {number} onlineWorkerCount
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @instance
             */
            TradeSchedulerStateUpdate.prototype.onlineWorkerCount = 0;

            /**
             * Creates a new TradeSchedulerStateUpdate instance using the specified properties.
             * @function create
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {prb.trade.ITradeSchedulerStateUpdate=} [properties] Properties to set
             * @returns {prb.trade.TradeSchedulerStateUpdate} TradeSchedulerStateUpdate instance
             */
            TradeSchedulerStateUpdate.create = function create(properties) {
                return new TradeSchedulerStateUpdate(properties);
            };

            /**
             * Encodes the specified TradeSchedulerStateUpdate message. Does not implicitly {@link prb.trade.TradeSchedulerStateUpdate.verify|verify} messages.
             * @function encode
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {prb.trade.ITradeSchedulerStateUpdate} message TradeSchedulerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TradeSchedulerStateUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
                if (message.onlineWorkerCount != null && Object.hasOwnProperty.call(message, "onlineWorkerCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.onlineWorkerCount);
                return writer;
            };

            /**
             * Encodes the specified TradeSchedulerStateUpdate message, length delimited. Does not implicitly {@link prb.trade.TradeSchedulerStateUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {prb.trade.ITradeSchedulerStateUpdate} message TradeSchedulerStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TradeSchedulerStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TradeSchedulerStateUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.trade.TradeSchedulerStateUpdate} TradeSchedulerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TradeSchedulerStateUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.trade.TradeSchedulerStateUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hostname = reader.string();
                        break;
                    case 2:
                        message.onlineWorkerCount = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TradeSchedulerStateUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.trade.TradeSchedulerStateUpdate} TradeSchedulerStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TradeSchedulerStateUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TradeSchedulerStateUpdate message.
             * @function verify
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TradeSchedulerStateUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                if (message.onlineWorkerCount != null && message.hasOwnProperty("onlineWorkerCount"))
                    if (!$util.isInteger(message.onlineWorkerCount))
                        return "onlineWorkerCount: integer expected";
                return null;
            };

            /**
             * Creates a TradeSchedulerStateUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.trade.TradeSchedulerStateUpdate} TradeSchedulerStateUpdate
             */
            TradeSchedulerStateUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.trade.TradeSchedulerStateUpdate)
                    return object;
                var message = new $root.prb.trade.TradeSchedulerStateUpdate();
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                if (object.onlineWorkerCount != null)
                    message.onlineWorkerCount = object.onlineWorkerCount >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a TradeSchedulerStateUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @static
             * @param {prb.trade.TradeSchedulerStateUpdate} message TradeSchedulerStateUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TradeSchedulerStateUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.hostname = "";
                    object.onlineWorkerCount = 0;
                }
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                if (message.onlineWorkerCount != null && message.hasOwnProperty("onlineWorkerCount"))
                    object.onlineWorkerCount = message.onlineWorkerCount;
                return object;
            };

            /**
             * Converts this TradeSchedulerStateUpdate to JSON.
             * @function toJSON
             * @memberof prb.trade.TradeSchedulerStateUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TradeSchedulerStateUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TradeSchedulerStateUpdate;
        })();

        trade.CallOnlineScheduler = (function() {

            /**
             * Properties of a CallOnlineScheduler.
             * @memberof prb.trade
             * @interface ICallOnlineScheduler
             * @property {boolean|null} [isResponse] CallOnlineScheduler isResponse
             * @property {string|null} [hostname] CallOnlineScheduler hostname
             */

            /**
             * Constructs a new CallOnlineScheduler.
             * @memberof prb.trade
             * @classdesc Represents a CallOnlineScheduler.
             * @implements ICallOnlineScheduler
             * @constructor
             * @param {prb.trade.ICallOnlineScheduler=} [properties] Properties to set
             */
            function CallOnlineScheduler(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CallOnlineScheduler isResponse.
             * @member {boolean} isResponse
             * @memberof prb.trade.CallOnlineScheduler
             * @instance
             */
            CallOnlineScheduler.prototype.isResponse = false;

            /**
             * CallOnlineScheduler hostname.
             * @member {string} hostname
             * @memberof prb.trade.CallOnlineScheduler
             * @instance
             */
            CallOnlineScheduler.prototype.hostname = "";

            /**
             * Creates a new CallOnlineScheduler instance using the specified properties.
             * @function create
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {prb.trade.ICallOnlineScheduler=} [properties] Properties to set
             * @returns {prb.trade.CallOnlineScheduler} CallOnlineScheduler instance
             */
            CallOnlineScheduler.create = function create(properties) {
                return new CallOnlineScheduler(properties);
            };

            /**
             * Encodes the specified CallOnlineScheduler message. Does not implicitly {@link prb.trade.CallOnlineScheduler.verify|verify} messages.
             * @function encode
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {prb.trade.ICallOnlineScheduler} message CallOnlineScheduler message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineScheduler.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isResponse != null && Object.hasOwnProperty.call(message, "isResponse"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isResponse);
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostname);
                return writer;
            };

            /**
             * Encodes the specified CallOnlineScheduler message, length delimited. Does not implicitly {@link prb.trade.CallOnlineScheduler.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {prb.trade.ICallOnlineScheduler} message CallOnlineScheduler message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineScheduler.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CallOnlineScheduler message from the specified reader or buffer.
             * @function decode
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.trade.CallOnlineScheduler} CallOnlineScheduler
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineScheduler.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.trade.CallOnlineScheduler();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isResponse = reader.bool();
                        break;
                    case 2:
                        message.hostname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CallOnlineScheduler message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.trade.CallOnlineScheduler} CallOnlineScheduler
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineScheduler.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CallOnlineScheduler message.
             * @function verify
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallOnlineScheduler.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    if (typeof message.isResponse !== "boolean")
                        return "isResponse: boolean expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                return null;
            };

            /**
             * Creates a CallOnlineScheduler message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.trade.CallOnlineScheduler} CallOnlineScheduler
             */
            CallOnlineScheduler.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.trade.CallOnlineScheduler)
                    return object;
                var message = new $root.prb.trade.CallOnlineScheduler();
                if (object.isResponse != null)
                    message.isResponse = Boolean(object.isResponse);
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                return message;
            };

            /**
             * Creates a plain object from a CallOnlineScheduler message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.trade.CallOnlineScheduler
             * @static
             * @param {prb.trade.CallOnlineScheduler} message CallOnlineScheduler
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallOnlineScheduler.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isResponse = false;
                    object.hostname = "";
                }
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    object.isResponse = message.isResponse;
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                return object;
            };

            /**
             * Converts this CallOnlineScheduler to JSON.
             * @function toJSON
             * @memberof prb.trade.CallOnlineScheduler
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallOnlineScheduler.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CallOnlineScheduler;
        })();

        trade.FetcherStateUpdate = (function() {

            /**
             * Properties of a FetcherStateUpdate.
             * @memberof prb.trade
             * @interface IFetcherStateUpdate
             * @property {string|null} [hostname] FetcherStateUpdate hostname
             * @property {number|Long|null} [latestHeaderPhala] FetcherStateUpdate latestHeaderPhala
             * @property {number|Long|null} [latestHeaderRococo] FetcherStateUpdate latestHeaderRococo
             * @property {number|Long|null} [latestBlock] FetcherStateUpdate latestBlock
             * @property {boolean|null} [synching] FetcherStateUpdate synching
             */

            /**
             * Constructs a new FetcherStateUpdate.
             * @memberof prb.trade
             * @classdesc Represents a FetcherStateUpdate.
             * @implements IFetcherStateUpdate
             * @constructor
             * @param {prb.trade.IFetcherStateUpdate=} [properties] Properties to set
             */
            function FetcherStateUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FetcherStateUpdate hostname.
             * @member {string} hostname
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             */
            FetcherStateUpdate.prototype.hostname = "";

            /**
             * FetcherStateUpdate latestHeaderPhala.
             * @member {number|Long} latestHeaderPhala
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             */
            FetcherStateUpdate.prototype.latestHeaderPhala = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FetcherStateUpdate latestHeaderRococo.
             * @member {number|Long} latestHeaderRococo
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             */
            FetcherStateUpdate.prototype.latestHeaderRococo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FetcherStateUpdate latestBlock.
             * @member {number|Long} latestBlock
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             */
            FetcherStateUpdate.prototype.latestBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FetcherStateUpdate synching.
             * @member {boolean} synching
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             */
            FetcherStateUpdate.prototype.synching = false;

            /**
             * Creates a new FetcherStateUpdate instance using the specified properties.
             * @function create
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {prb.trade.IFetcherStateUpdate=} [properties] Properties to set
             * @returns {prb.trade.FetcherStateUpdate} FetcherStateUpdate instance
             */
            FetcherStateUpdate.create = function create(properties) {
                return new FetcherStateUpdate(properties);
            };

            /**
             * Encodes the specified FetcherStateUpdate message. Does not implicitly {@link prb.trade.FetcherStateUpdate.verify|verify} messages.
             * @function encode
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {prb.trade.IFetcherStateUpdate} message FetcherStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FetcherStateUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
                if (message.latestHeaderPhala != null && Object.hasOwnProperty.call(message, "latestHeaderPhala"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.latestHeaderPhala);
                if (message.latestHeaderRococo != null && Object.hasOwnProperty.call(message, "latestHeaderRococo"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.latestHeaderRococo);
                if (message.latestBlock != null && Object.hasOwnProperty.call(message, "latestBlock"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.latestBlock);
                if (message.synching != null && Object.hasOwnProperty.call(message, "synching"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.synching);
                return writer;
            };

            /**
             * Encodes the specified FetcherStateUpdate message, length delimited. Does not implicitly {@link prb.trade.FetcherStateUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {prb.trade.IFetcherStateUpdate} message FetcherStateUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FetcherStateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FetcherStateUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.trade.FetcherStateUpdate} FetcherStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FetcherStateUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.trade.FetcherStateUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hostname = reader.string();
                        break;
                    case 2:
                        message.latestHeaderPhala = reader.uint64();
                        break;
                    case 3:
                        message.latestHeaderRococo = reader.uint64();
                        break;
                    case 4:
                        message.latestBlock = reader.uint64();
                        break;
                    case 5:
                        message.synching = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FetcherStateUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.trade.FetcherStateUpdate} FetcherStateUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FetcherStateUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FetcherStateUpdate message.
             * @function verify
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FetcherStateUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                if (message.latestHeaderPhala != null && message.hasOwnProperty("latestHeaderPhala"))
                    if (!$util.isInteger(message.latestHeaderPhala) && !(message.latestHeaderPhala && $util.isInteger(message.latestHeaderPhala.low) && $util.isInteger(message.latestHeaderPhala.high)))
                        return "latestHeaderPhala: integer|Long expected";
                if (message.latestHeaderRococo != null && message.hasOwnProperty("latestHeaderRococo"))
                    if (!$util.isInteger(message.latestHeaderRococo) && !(message.latestHeaderRococo && $util.isInteger(message.latestHeaderRococo.low) && $util.isInteger(message.latestHeaderRococo.high)))
                        return "latestHeaderRococo: integer|Long expected";
                if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
                    if (!$util.isInteger(message.latestBlock) && !(message.latestBlock && $util.isInteger(message.latestBlock.low) && $util.isInteger(message.latestBlock.high)))
                        return "latestBlock: integer|Long expected";
                if (message.synching != null && message.hasOwnProperty("synching"))
                    if (typeof message.synching !== "boolean")
                        return "synching: boolean expected";
                return null;
            };

            /**
             * Creates a FetcherStateUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.trade.FetcherStateUpdate} FetcherStateUpdate
             */
            FetcherStateUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.trade.FetcherStateUpdate)
                    return object;
                var message = new $root.prb.trade.FetcherStateUpdate();
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                if (object.latestHeaderPhala != null)
                    if ($util.Long)
                        (message.latestHeaderPhala = $util.Long.fromValue(object.latestHeaderPhala)).unsigned = true;
                    else if (typeof object.latestHeaderPhala === "string")
                        message.latestHeaderPhala = parseInt(object.latestHeaderPhala, 10);
                    else if (typeof object.latestHeaderPhala === "number")
                        message.latestHeaderPhala = object.latestHeaderPhala;
                    else if (typeof object.latestHeaderPhala === "object")
                        message.latestHeaderPhala = new $util.LongBits(object.latestHeaderPhala.low >>> 0, object.latestHeaderPhala.high >>> 0).toNumber(true);
                if (object.latestHeaderRococo != null)
                    if ($util.Long)
                        (message.latestHeaderRococo = $util.Long.fromValue(object.latestHeaderRococo)).unsigned = true;
                    else if (typeof object.latestHeaderRococo === "string")
                        message.latestHeaderRococo = parseInt(object.latestHeaderRococo, 10);
                    else if (typeof object.latestHeaderRococo === "number")
                        message.latestHeaderRococo = object.latestHeaderRococo;
                    else if (typeof object.latestHeaderRococo === "object")
                        message.latestHeaderRococo = new $util.LongBits(object.latestHeaderRococo.low >>> 0, object.latestHeaderRococo.high >>> 0).toNumber(true);
                if (object.latestBlock != null)
                    if ($util.Long)
                        (message.latestBlock = $util.Long.fromValue(object.latestBlock)).unsigned = true;
                    else if (typeof object.latestBlock === "string")
                        message.latestBlock = parseInt(object.latestBlock, 10);
                    else if (typeof object.latestBlock === "number")
                        message.latestBlock = object.latestBlock;
                    else if (typeof object.latestBlock === "object")
                        message.latestBlock = new $util.LongBits(object.latestBlock.low >>> 0, object.latestBlock.high >>> 0).toNumber(true);
                if (object.synching != null)
                    message.synching = Boolean(object.synching);
                return message;
            };

            /**
             * Creates a plain object from a FetcherStateUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.trade.FetcherStateUpdate
             * @static
             * @param {prb.trade.FetcherStateUpdate} message FetcherStateUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FetcherStateUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.hostname = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestHeaderPhala = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestHeaderPhala = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestHeaderRococo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestHeaderRococo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.latestBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.latestBlock = options.longs === String ? "0" : 0;
                    object.synching = false;
                }
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                if (message.latestHeaderPhala != null && message.hasOwnProperty("latestHeaderPhala"))
                    if (typeof message.latestHeaderPhala === "number")
                        object.latestHeaderPhala = options.longs === String ? String(message.latestHeaderPhala) : message.latestHeaderPhala;
                    else
                        object.latestHeaderPhala = options.longs === String ? $util.Long.prototype.toString.call(message.latestHeaderPhala) : options.longs === Number ? new $util.LongBits(message.latestHeaderPhala.low >>> 0, message.latestHeaderPhala.high >>> 0).toNumber(true) : message.latestHeaderPhala;
                if (message.latestHeaderRococo != null && message.hasOwnProperty("latestHeaderRococo"))
                    if (typeof message.latestHeaderRococo === "number")
                        object.latestHeaderRococo = options.longs === String ? String(message.latestHeaderRococo) : message.latestHeaderRococo;
                    else
                        object.latestHeaderRococo = options.longs === String ? $util.Long.prototype.toString.call(message.latestHeaderRococo) : options.longs === Number ? new $util.LongBits(message.latestHeaderRococo.low >>> 0, message.latestHeaderRococo.high >>> 0).toNumber(true) : message.latestHeaderRococo;
                if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
                    if (typeof message.latestBlock === "number")
                        object.latestBlock = options.longs === String ? String(message.latestBlock) : message.latestBlock;
                    else
                        object.latestBlock = options.longs === String ? $util.Long.prototype.toString.call(message.latestBlock) : options.longs === Number ? new $util.LongBits(message.latestBlock.low >>> 0, message.latestBlock.high >>> 0).toNumber(true) : message.latestBlock;
                if (message.synching != null && message.hasOwnProperty("synching"))
                    object.synching = message.synching;
                return object;
            };

            /**
             * Converts this FetcherStateUpdate to JSON.
             * @function toJSON
             * @memberof prb.trade.FetcherStateUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FetcherStateUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FetcherStateUpdate;
        })();

        trade.CallOnlineFetcher = (function() {

            /**
             * Properties of a CallOnlineFetcher.
             * @memberof prb.trade
             * @interface ICallOnlineFetcher
             * @property {boolean|null} [isResponse] CallOnlineFetcher isResponse
             * @property {string|null} [hostname] CallOnlineFetcher hostname
             */

            /**
             * Constructs a new CallOnlineFetcher.
             * @memberof prb.trade
             * @classdesc Represents a CallOnlineFetcher.
             * @implements ICallOnlineFetcher
             * @constructor
             * @param {prb.trade.ICallOnlineFetcher=} [properties] Properties to set
             */
            function CallOnlineFetcher(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CallOnlineFetcher isResponse.
             * @member {boolean} isResponse
             * @memberof prb.trade.CallOnlineFetcher
             * @instance
             */
            CallOnlineFetcher.prototype.isResponse = false;

            /**
             * CallOnlineFetcher hostname.
             * @member {string} hostname
             * @memberof prb.trade.CallOnlineFetcher
             * @instance
             */
            CallOnlineFetcher.prototype.hostname = "";

            /**
             * Creates a new CallOnlineFetcher instance using the specified properties.
             * @function create
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {prb.trade.ICallOnlineFetcher=} [properties] Properties to set
             * @returns {prb.trade.CallOnlineFetcher} CallOnlineFetcher instance
             */
            CallOnlineFetcher.create = function create(properties) {
                return new CallOnlineFetcher(properties);
            };

            /**
             * Encodes the specified CallOnlineFetcher message. Does not implicitly {@link prb.trade.CallOnlineFetcher.verify|verify} messages.
             * @function encode
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {prb.trade.ICallOnlineFetcher} message CallOnlineFetcher message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineFetcher.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isResponse != null && Object.hasOwnProperty.call(message, "isResponse"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isResponse);
                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.hostname);
                return writer;
            };

            /**
             * Encodes the specified CallOnlineFetcher message, length delimited. Does not implicitly {@link prb.trade.CallOnlineFetcher.verify|verify} messages.
             * @function encodeDelimited
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {prb.trade.ICallOnlineFetcher} message CallOnlineFetcher message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallOnlineFetcher.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CallOnlineFetcher message from the specified reader or buffer.
             * @function decode
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {prb.trade.CallOnlineFetcher} CallOnlineFetcher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineFetcher.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.prb.trade.CallOnlineFetcher();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isResponse = reader.bool();
                        break;
                    case 2:
                        message.hostname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CallOnlineFetcher message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {prb.trade.CallOnlineFetcher} CallOnlineFetcher
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallOnlineFetcher.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CallOnlineFetcher message.
             * @function verify
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallOnlineFetcher.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    if (typeof message.isResponse !== "boolean")
                        return "isResponse: boolean expected";
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    if (!$util.isString(message.hostname))
                        return "hostname: string expected";
                return null;
            };

            /**
             * Creates a CallOnlineFetcher message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {prb.trade.CallOnlineFetcher} CallOnlineFetcher
             */
            CallOnlineFetcher.fromObject = function fromObject(object) {
                if (object instanceof $root.prb.trade.CallOnlineFetcher)
                    return object;
                var message = new $root.prb.trade.CallOnlineFetcher();
                if (object.isResponse != null)
                    message.isResponse = Boolean(object.isResponse);
                if (object.hostname != null)
                    message.hostname = String(object.hostname);
                return message;
            };

            /**
             * Creates a plain object from a CallOnlineFetcher message. Also converts values to other types if specified.
             * @function toObject
             * @memberof prb.trade.CallOnlineFetcher
             * @static
             * @param {prb.trade.CallOnlineFetcher} message CallOnlineFetcher
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallOnlineFetcher.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isResponse = false;
                    object.hostname = "";
                }
                if (message.isResponse != null && message.hasOwnProperty("isResponse"))
                    object.isResponse = message.isResponse;
                if (message.hostname != null && message.hasOwnProperty("hostname"))
                    object.hostname = message.hostname;
                return object;
            };

            /**
             * Converts this CallOnlineFetcher to JSON.
             * @function toJSON
             * @memberof prb.trade.CallOnlineFetcher
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallOnlineFetcher.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CallOnlineFetcher;
        })();

        return trade;
    })();

    return prb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
