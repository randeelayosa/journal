export function Entry (title, date, post) {
  this.title = title;
  this.date = date;
  this.post = post;
}

export function getTeaser(post) {
  var words = post.split(" ");
  var sentence = words.slice(0,8);
  return sentence.join(" ");
}

export function Count(post) {
  var words = post.split(" ");
  var wordCount = words.length;
  return wordCount;
}

export function Vowels(post) {
  var words = post;
  var vow = (/[aeiou]/gi);
  var vowMatch = (words.match(vow)).length;
  return vowMatch;
}

export function Consonants(post) {
  var words = post;
  var consonants = (/[bcdfghjklmnpqrstvxz]/gi);
  var consonantMatch = (words.match(consonants)).length;
  return consonantMatch;
}
