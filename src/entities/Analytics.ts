import { Filters } from '../lib/types.ts';
import { AnalyticalReport } from './AnalyticalReport.ts';

export class Analytics {
  public readonly id: number;
  public filters: Filters;
  public report: AnalyticalReport;

  constructor(id: number, data: number[], filters?: Filters) {
    this.id = id;
    this.filters = filters ?? {};
    this.report = new AnalyticalReport(data);
  }

  public addFilters(additionalFilters: Filters): void {
    this.filters = { ...this.filters, ...additionalFilters };
  }

  public removeFilters(filterKeys: string[]): void {
    for (const key of filterKeys) {
      delete this.filters[key];
    }
  }

  public applyFilters(): void {
    console.log('The filters has been successfully applied!');
    console.log(this.filters);
  }
}
