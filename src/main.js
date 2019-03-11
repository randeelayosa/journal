import { turn } from './simon.js';
import './sass/styles.scss';



$(document).ready(function() {
  console.log("test");
  $('#start').click(function() {
    turn();
    
  });
});
