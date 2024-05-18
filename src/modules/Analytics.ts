import { IModule } from '../interfaces/IModule.ts';
import { Filters } from '../lib/types.ts';
import { AnalyticalReport } from '../entities/AnalyticalReport.ts';

export class Analytics implements IModule {
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

  public display(): void {
    console.log('Display analytics module');
  }
}
