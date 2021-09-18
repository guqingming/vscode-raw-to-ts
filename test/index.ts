interface Request {
  /** undefined **/
  code: number;
  /** undefined **/
  data: Data;
  /** undefined **/
  message: string;
}

interface Data {
  /** 机场巴士客运量及运行车次日报表详情--数据 **/
  airportBusReports: AirportBusReports;
  /** 当日日客流量合计 **/
  flowCount: number;
  /** 去年--日客流量合计 **/
  lastFlowCount: number;
  /** 去年--日客运行车次合计 **/
  lastTrainCount: number;
  /** 统计日期 **/
  statisticalDate: string;
  /** 当日客运行车次合计 **/
  trainCount: number;
}

interface AirportBusReports {
  /** 机场ID **/
  airportId: number;
  /** 机场名称 **/
  airportName: string;
  /** 日流量 **/
  dailyFlow: number;
  /** 日车次 **/
  dailyTrain: number;
  /** undefined **/
  id: number;
  /** 去年日流量 **/
  lastDailyFlow: number;
  /** 去年日车次 **/
  lastDailyTrain: number;
  /** 填报人 **/
  statisticalName: string;
  /** 填报时间 **/
  statisticalTime: string;
}
