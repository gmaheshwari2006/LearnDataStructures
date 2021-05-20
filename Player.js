class Player {
  constructor(name, type) {
    console.log("Player: " , this);
    this.name = name;
    this.type = type;
  }

  intruduce() {
    console.log(`Hi, My name is: ${this.name}, and I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor (name, type) {    
    super(name, type);
    console.log("Wizard: " , this);
  }

  letsPlay() {
    console.log(`Hey, I am ${this.type}`);
  }
}

class Play{
  play() {
  const wizard1 = new Wizard('gaurav', 'Healer');
  const wizard2 = new Wizard('Pushthi', 'Magician');
  wizard1.letsPlay();
  wizard1.intruduce();
  const wizardList = [];
  wizardList.push(wizard1);
  console.log(wizardList[0].name);
  }
}



const play1 = new Play();
play1.play();
//

//
//console.log("length", wizardList.length);
