function ask(question, yes, no) {
    if (confirm(question)){
        yes();
    }
    else{
        no(); 
    } 
  }
  
  ask(
    "Do you Know me?",
    () => alert("Yeppp..."),
    () => alert("Nope!!!")
  );