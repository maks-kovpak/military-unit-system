import { AnalyticalReport } from './AnalyticalReport.ts';

export class AnalyticalReportCreator {
  public static create(chartConfig: Record<string, unknown>) {
    return class extends AnalyticalReport {
      constructor(data: number[]) {
        super(data, chartConfig);
      }
    };
  }
}
