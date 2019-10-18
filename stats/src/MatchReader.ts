import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName))
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6]
      ];
    })
  }
}