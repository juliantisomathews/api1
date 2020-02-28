function setup() {
  createCanvas(400, 400)
  drawData();
  console.log('running')

  var button = select('#submit');
  button.mousePressed(submitPlayer);

}

function drawData() {
  loadJSON('all', gotData);
}

function submitPlayer(){
  var player = select('#player').value();
  var number = select('#number').value();
  console.log(player,number);

  loadJSON('add/' + player + '/' + number, finished);

  function finished(data){
  console.log(data)
  drawData();
  }
}

function gotData(data){
  background(51);
  console.log(data);
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++){
    var word = keys[i];
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(255);
    textSize(32);
    text(word, x, y);

  }
}

