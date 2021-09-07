import http from "http";

const StartupTime = Date.now();
export let pingTime = Date.now();
const requestListener = function (req, res) {
  pingTime = Date.now();
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>💓</title>
      <meta http-equiv="refresh" content="60;url=./">
    </head>
    <body>
      <h1>维持心跳/每分钟刷新一次</h1>
      已启动 ${(Date.now() - StartupTime) / 1000}s
    </body>
  </html>
  `);
};

const server = http.createServer(requestListener);
server.listen(7000, "0.0.0.0");
