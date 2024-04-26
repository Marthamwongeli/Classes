class Car{
    constructor(make,model,year,isAvailable){
    this.make = make
    this.model= model
    this.year = year
    this.isAvailable = isAvailable
    }
    toggleAvailability(){
        this.isAvailable = ! this.isAvailable
       
    }
}
const mazda = new Car('Isuzu','Toyota',2016,'true')
mazda.toggleAvailability();
console.log(mazda.isAvailable);

// 2.)
class Rental {
 constructor(car,renterName,rentalStartDate,rentalEndDate){
    this.car = car;
    this.renterName= renterName;
    this.rentalStartDate =rentalStartDate;
    this.rentalEndDate = rentalEndDate;
 }
 calculateRentalDuration() {
    const startDate = this.rentalStartDate.getTime();
    const endDate = this.rentalEndDate.getTime();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const durationInMilliseconds = endDate - startDate;
    return Math.ceil(durationInMilliseconds / millisecondsPerDay);
  }
}

  const probox  = new Car("Isuzu", "Toyota", 2016, true);

  const rentals1 = new Rental(probox, "Lewis", new Date("2024-04-10"), new Date("2024-04-20"));
  
 console.log(rentals1.calculateRentalDuration());

// 3.)
const probox2 = new Car('Toyota','Mary','20-04-2024','24-04-2024');
console.log(probox2);
probox2.calculateRentalDuration()
console.log({probox2})


// 2.1)
class Question {
    constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
const question1 = new Question(
  "What is a kiwi?",
  ["fruit"]
  
);
const userAnswer = "fruit";
console.log(question1.checkAnswer(userAnswer));



// 2.2)
class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
}
const questions = new Question(
    "What is your name?"["Martha"]
);
const  userAnswer2 = "Martha";
console.log(questions.checkAnswer(userAnswer2));
