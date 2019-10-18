import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync('football.csv', {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map((row: string[]): T => this.mapRow(row));
  }
}