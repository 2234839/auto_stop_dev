// This file is auto-generated, don't edit it
import { exec } from "shelljs";
import EcsClient from "./ecs";
import DnsClient from "./dns";

let FirstRun = true;
const main = async () => {
  if (FirstRun) {
    FirstRun = false;
    const [publicIp, dnsIp] = await Promise.all([
      EcsClient.getPublicIp(),
      DnsClient.getDnsIp(),
    ]);
    if (publicIp !== dnsIp) {
      console.log("publicIp dnsIp 不相等", publicIp, dnsIp);
      DnsClient.updateDomainRecord({ value: publicIp }).then((r) => {
        console.log("更新解析记录,由于解析记录 ttl 时间限制 建议刷新本地 dns 缓存", r);
      });
    }else{
      console.log("公网 ip 与 dns 解析记录值相同");
    }
  }
  if (new Date().getHours() >= 23 || new Date().getHours() <= 5) {
    /** 在没有用户登录的情况下是 3 */
    const len = exec("w").stdout.split("\n").length;
    if (len <= 3) {
      console.log("关机");
      EcsClient.StopCharging();
    } else {
      console.log("仍然有用户连接，暂不关机");
    }
  }
};
main();
setInterval(main, 10000);
