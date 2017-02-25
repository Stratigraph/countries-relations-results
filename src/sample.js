import * as d3 from "d3";
import _ from 'lodash';
import results from '../results/sample.json';

const clusters = _.groupBy(results, 'cluster');

console.log(clusters);

