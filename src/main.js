import { Entry, getTeaser, Count, Vowels, Consonants } from './journal.js';
import './sass/styles.scss';


$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    console.log("clicked");
    var title = $('#title').val();
    var date = $('#date').val();
    var post = $('#post').val();

    var newUpdate = new Entry(title, date, post);
    var teaser = getTeaser(post);
    var words = Count(post);
    var vowels = Vowels(post);
    var consonants = Consonants(post);
    $(".title").text(newUpdate.title);
    $(".date").text(newUpdate.date);
    $(".teaser").text(teaser);
    $(".post").text(newUpdate.post);
    $(".words-count").text(words);
    $(".vowels-count").text(vowels);
    $(".consonant-count").text(consonants);
    console.log(teaser);
    console.log(words);
    console.log(vowels);
    console.log(consonants);
  });
});
