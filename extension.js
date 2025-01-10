const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('blackboxAI.start', function () {
        vscode.window.showInformationMessage('Blackbox AI is now running!');
        // Integrate Blackbox AI functionalities here
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
