const firebaseConfig = {
    apiKey: "AIzaSyDgvuD8IaowgH0_-y-ILKap_4QTmzYUh9c",
    authDomain: "semsurvey-a145d.firebaseapp.com",
    databaseURL: "https://semsurvey-a145d-default-rtdb.firebaseio.com",
    projectId: "semsurvey-a145d",
    storageBucket: "semsurvey-a145d.appspot.com",
    messagingSenderId: "658357661659",
    appId: "1:658357661659:web:1eef916f7e4c6259c5c1fe"
  };

  firebase.initializeApp(firebaseConfig);

  var firedb = firebase.database().ref("collectionnames");
  document.getElementById("surveyform").addEventListener("submit",submitafter);
  function submitafter(e) {
    e.preventDefault();

    var name = getElementVal("nameid");
    var rollno = getElementVal("roll");
    var year = getElementVal("year");
    var section = getElementVal("section");
    var department = getElementVal("dept");
    var subjectname = getElementVal("subname");
    var subjectcode= getElementVal("subcode");
    var teachersname = getElementVal("tname");
    var rate = getElementVal("rate");
    var classtest= getElementVal("ct");
    var tougha = getElementVal("tqa");
    var easya = getElementVal("eqa");
    var toughb= getElementVal("tqb");
    var easyb = getElementVal("eqb");
    var toughc = getElementVal("tqc");
    var easyc = getElementVal("eqc");
    var ione = getElementVal("itone");
    var none = getElementVal("ntone");
    var itwo= getElementVal("ittwo");
    var ntwo = getElementVal("nttwo");
    var ithree = getElementVal("inthree");
    var nthree= getElementVal("ntthree");
    var ifour = getElementVal("itfour");
    var nfour = getElementVal("ntfour");
    var ifive= getElementVal("itfive");
    var nfive = getElementVal("ntfive");

    saveMessages(name,rollno,year,subjectname,section,department
        ,subjectcode,teachersname,rate,classtest,tougha,toughb,toughc,
        easya,easyb,easyc,ione,itwo,ithree,ifour,ifive,none,ntwo,nthree,nfour,nfive);

        document.querySelector(".alert").style.display = "block";

        //   remove the alert
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 3000);
      
        //   reset the form
        document.getElementById("surveyform").reset();
      
  }
  const  saveMessages = (name,rollno,year,subjectname,section,department
    ,subjectcode,teachersname,rate,classtest,tougha,toughb,toughc,
    easya,easyb,easyc,ione,itwo,ithree,ifour,ifive,none,ntwo,nthree,nfour,nfive) => {

        var newForm = firedb.push();
        newForm.set({
        name : name,
        rollno: rollno,



        });

    };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };