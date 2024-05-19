import { Module } from './Module.ts';
import { Filters } from '../lib/types.ts';
import { AnalyticalReport } from '../entities/AnalyticalReport.ts';
import { User } from '../entities/User.ts';

export class Analytics extends Module {
  protected _requiredAdminAccess: boolean = true;

  public filters: Filters;
  public report: AnalyticalReport;

  constructor(user: User) {
    super(user);

    // Mock data "fetched" from server
    this.filters = {
      month: (value) => (value as Date).getMonth() === 5,
      assigner: (value) => (value as User).lastName === 'Shevchenko',
    };

    this.report = new AnalyticalReport([1, 4.34, 3.3, 4.2, 111, 3.4, 47, 5]);
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
