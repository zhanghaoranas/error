
window.addEventListener("unhandledrejection", e => {
    throw e.reason
});
window.addEventListener('error', args => {
    uploadError(args)
}, true);

function uploadError({ lineno, colno, error, timeStamp, message, filename }: ErrorEvent): void {
    const errorInfo = {
        lineno,
        colno,
        stack: error.stack,
        timeStamp,
        message,
        filename,
    };
    const errorStr = JSON.stringify(errorInfo);
    const host = 'http://localhost:3001/error';
    new Image().src = `${host}?info=${errorStr}`
}


throw new Error('asdf')