// 自动发现并绑定到指定 dns
// This file is auto-generated, don't edit it
import Alidns20150109, * as $Alidns20150109 from "@alicloud/alidns20150109";
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import OpenApi, * as $OpenApi from "@alicloud/openapi-client";
import * as $tea from "@alicloud/tea-typescript";
import { config } from "./config";

export default class DnsClient {
  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(
    accessKeyId: string,
    accessKeySecret: string
  ): Alidns20150109 {
    let config = new $OpenApi.Config({
      // 您的AccessKey ID
      accessKeyId: accessKeyId,
      // 您的AccessKey Secret
      accessKeySecret: accessKeySecret,
    });
    // 访问的域名
    config.endpoint = "alidns.cn-hangzhou.aliyuncs.com";
    const client = new Alidns20150109(config);
    client._readTimeout = 6000;
    return new Alidns20150109(config);
  }

  /** 更新解析记录 */
  static async updateDomainRecord({ value }: { value: string }) {
    let client = DnsClient.createClient(
      config.accessKeyId,
      config.accessKeySecret
    );
    let updateDomainRecordRequest =
      new $Alidns20150109.UpdateDomainRecordRequest({
        recordId: "717522503348904960",
        RR: "dev",
        type: "A",
        value,
      });
    // 复制代码运行请自行打印 API 的返回值
    return await client.updateDomainRecord(updateDomainRecordRequest);
  }
  static async describeDomainRecordInfo() {
    let client = DnsClient.createClient(
      config.accessKeyId,
      config.accessKeySecret
    );
    let describeDomainRecordInfoRequest =
      new $Alidns20150109.DescribeDomainRecordInfoRequest({
        recordId: "717522503348904960",
      });
    // 复制代码运行请自行打印 API 的返回值
    return await client.describeDomainRecordInfo(
      describeDomainRecordInfoRequest
    );
  }
  /** 获取当前 dns 解析所指向的 ip */
  static async getDnsIp() {
    const info = await DnsClient.describeDomainRecordInfo();
    return info.body.value;
  }
}
