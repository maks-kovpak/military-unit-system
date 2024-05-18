export class AnalyticalReport {
  public readonly data: number[];
  public readonly chartConfig: Record<string, unknown>;

  constructor(data: number[], chartConfig: Record<string, unknown> = {}) {
    this.data = data;
    this.chartConfig = {
      data: this.data,
      ...chartConfig,
    };
  }

  public show(): void {
    console.log('Drawing chart...');
    console.log(this.chartConfig);
  }

  public download(): File {
    const stringData = this.data.map((item) => item.toString());
    return new File(stringData, `report-${new Date().toUTCString()}.txt`, { type: 'text/plain' });
  }

  public print(): void {
    console.log('The report is ready for printing!');
  }
}
