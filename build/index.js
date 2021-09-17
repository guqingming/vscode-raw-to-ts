"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var path = require("path");
var os = require("os");
var fs = require("fs");
var vscode_1 = require("vscode");
var raw_to_ts_1 = require("raw-to-ts");
var lib_1 = require("./lib");
var UA = require("universal-analytics");
var visitor = UA("UA-97872528-2", (0, lib_1.getUserId)());
function activate(context) {
    context.subscriptions.push(vscode_1.commands.registerCommand("rawToTs.fromSelection", transformFromSelection));
    context.subscriptions.push(vscode_1.commands.registerCommand("rawToTs.fromClipboard", transformFromClipboard));
}
exports.activate = activate;
function transformFromSelection() {
    var tmpFilePath = path.join(os.tmpdir(), "raw-to-ts.ts");
    var tmpFileUri = vscode_1.Uri.file(tmpFilePath);
    (0, lib_1.getSelectedText)()
        .then((0, lib_1.logEvent)(visitor, "Selection"))
        .then(lib_1.validateLength)
        .then(lib_1.parseJson)
        .then(function (json) {
        return (0, raw_to_ts_1.default)(json).reduce(function (a, b) { return a + "\n\n" + b; });
    })
        .then(function (interfaces) {
        fs.writeFileSync(tmpFilePath, interfaces);
    })
        .then(function () {
        vscode_1.commands.executeCommand("vscode.open", tmpFileUri, (0, lib_1.getViewColumn)());
    })
        .catch(lib_1.handleError);
}
function transformFromClipboard() {
    (0, lib_1.getClipboardText)()
        .then((0, lib_1.logEvent)(visitor, "Clipboard"))
        .then(lib_1.validateLength)
        .then(lib_1.parseJson)
        .then(function (json) {
        return (0, raw_to_ts_1.default)(json).reduce(function (a, b) { return a + "\n\n" + b; });
    })
        .then(function (interfaces) {
        (0, lib_1.pasteToMarker)(interfaces);
    })
        .catch(lib_1.handleError);
}
//# sourceMappingURL=index.js.map