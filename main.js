function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1c1Ux06yn/', modelReady);
}
//
function modelReady(){
  classifier.classify( gotResults);
}
function gotResults(error, results) {

if (error) {
  console.error(error)
} else {
random_num_1 = (Math.random() * 255) +1
random_num_2 = (Math.random() * 255) +1
random_num_3 = (Math.random() * 255) +1
random_color = 'rgb('+String(random_num_1)+', '+String(random_num_2)+', '+ String(random_num_3) + ')'
random_color2 = 'rgb('+String(random_num_2)+', '+String(random_num_3)+', '+ String(random_num_1) + ')'
console.log(random_color)
console.log(results)
document.getElementById('result_label').innerHTML = 'Posso ouvir: ' + (results[0].label)
document.getElementById('result_confidence').innerHTML = 'Confia: ' + (results[0].confidence)
document.getElementById('result_label').style.color = random_color
document.getElementById('result_confidence').style.color = random_color2
image = document.getElementById('image')

if (results[0].label == 'Mugido') {
  image.src = 'Vaca.jpg'
} else if (results[0].label == 'Rugido') {
  image.src = 'Leão.jpg'
} else if (results[0].label == 'Cachorro') {
  image.src = 'Cachorro.jpg'

} else if (results[0].label == 'Miado') {
image.src = 'Gato.jpg'
}

}
}