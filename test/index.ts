interface Request {
  /** 200 成功  -200失败 */
  code: number;
  /** 返回成功 */
  message: string;
  /** 注释 */
  data: Data;
}

interface Data {
  /** 注释 */
  complianceOnlineCars: ComplianceOnlineCars;
  /** 注释 */
  inCount: number;
  /** 注释 */
  outCount: number;
  /** 注释 */
  statisticsTime: string;
  /** 注释 */
  createTime: string;
}

interface ComplianceOnlineCars {
  /** 站场名称 */
  statName: string;
  /** 日运行车次（车次） */
  dailyService: number;
  /** 日客运量（人次） */
  passengers: number;
  /** 保点车次（车次） */
  keepOnlineCar: number;
  /** 保点客运量（人次） */
  keepPassengers: number;
  /** 统计时间 */
  statisticsTime: string;
}
