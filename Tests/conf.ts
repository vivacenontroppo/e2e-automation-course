
import {Config} from "protractor";

export let config: Config = {
  framework: 'jasmine',
  specs: ['./FirstTest.spec.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
};