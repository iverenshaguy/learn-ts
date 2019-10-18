import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const htmlSummary = Summary.WinsAnalysisWithHtmlReport('Chelsea', 'report.html');
const consoleSummary = new Summary(
  new WinsAnalysis('Chelsea'),
  new ConsoleReport()
);

matchReader.load();

htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
