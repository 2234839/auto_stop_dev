// This file is auto-generated, don't edit it
import Ecs20140526, * as $Ecs20140526 from "@alicloud/ecs20140526";
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import * as $OpenApi from "@alicloud/openapi-client";
import Console from "@alicloud/tea-console";
import * as $tea from "@alicloud/tea-typescript";
import Util from "@alicloud/tea-util";
import { config } from "./config";

export default class EcsClient {
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
  ): Ecs20140526 {
    let config = new $OpenApi.Config({
      // 您的AccessKey ID
      accessKeyId: accessKeyId,
      // 您的AccessKey Secret
      accessKeySecret: accessKeySecret,
      readTimeout:12000
    });
    // 访问的域名
    config.endpoint = "ecs-cn-hangzhou.aliyuncs.com";
    return new Ecs20140526(config);
  }
  static getClient() {
    return EcsClient.createClient(
      config.accessKeyId,
      config.accessKeySecret
    );
  }
  /** 关闭当前实例 */
  static async StopCharging(): Promise<void> {
    let client = EcsClient.getClient();
    let stopInstanceRequest = new $Ecs20140526.StopInstanceRequest({
      instanceId: "i-0xicjvrx92ijfnc1o0y9",
      stoppedMode: "StopCharging",
      // dryRun: true,
    });
    let resp = await client.stopInstance(stopInstanceRequest);
    Console.log(Util.toJSONString($tea.toMap(resp)));
  }
  /** 查询当前实例信息 */
  static async describeInstances() {
    let client = EcsClient.getClient();
    let describeInstancesRequest = new $Ecs20140526.DescribeInstancesRequest({
      regionId: "us-east-1",
      instanceIds: `["i-0xicjvrx92ijfnc1o0y9"]`,
    });
    // 复制代码运行请自行打印 API 的返回值
    return await client.describeInstances(describeInstancesRequest);
  }
  static async getPublicIp() {
    return (await EcsClient.describeInstances()).body.instances.instance[0]
      .publicIpAddress.ipAddress[0];
  }
}
