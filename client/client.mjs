import alt from 'alt';

let webview;

alt.onServer('AUTH:Init', init)

function init(player) {
    if (webview === undefined) {
        webview = new alt.WebView('http://resource/client/html/index.html');
        webview.focus();
        alt.showCursor(true)
    }
    webview.on('AUTH:Login', (data) => {alt.emitServer('AUTH:Login', data)})
}
