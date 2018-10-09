var scopecount=0;var inp_val="";
function autocomplete(inp) {
  var arr=countries;
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  inp_val=inp.value;
var blink=document.getElementById('blinking');
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i;
      inp_val="";
      
      var val="";
      if(scopecount==0) val = this.value;
      else if(this.value.split('.').length>=2){

            console.log('scope1 ');
            val=this.value;
            var already=val.split('.');
          
            val =already.pop();
          // already=already.splice(-1,1);


            //var str = this.value; 
    var res = already.join(".");
    inp_val=res;
           
      }
  console.log("Inp_val"+inp_val);
      console.log('current val '+val);
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              console.log("Adding.................."+inp.value+".");
                if(scopecount==0)  inp.value = inp_val+this.getElementsByTagName("input")[0].value;
          else if(scopecount>0)  inp.value = inp_val+"."+this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      console.log(e.keyCode);
      if (x) x = x.getElementsByTagName("div");
      updatelist(scopecount);
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      }
      else if(e.keyCode==8){
         var f = this.value;
            var lastchar=f.charAt(f.length-1);
            if(lastchar=='.') scopecount--;
               arr=setArr(scopecount);
  //updatelist(scopecount);
            console.log('scopecount'+scopecount);
      }
      else if(e.keyCode==190){
       var f = this.value;
       if(f.length>4){
             var lastchar=f.charAt(f.length-1);
             var secondlastchar=f.charAt(f.length-2);
             var thirdlastchar=f.charAt(f.length-3);
             var fourthlastchar=f.charAt(f.length-4);
             var fifthlastchar=f.charAt(f.length-5);
             
             if(secondlastchar!="."&&thirdlastchar!="."&&fourthlastchar!="."&&fifthlastchar!="."){
                    scopecount=scopecount+1;

                    console.log("scope : "+scopecount);
               arr=setArr(scopecount);
            //   updatelist(scopecount);
                    alert(arr);


              }


           

             
            }

     
       else{

          blink.classList="show";
       }
       
       
      }
      else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var cs = ["AAAAAAAAAAA","BBBBBBBBBBBBBBBB","CCCCCCCCCCCCCCCCCC","DDDDDDDDDDDDDDDDDDDDDd","EEEEEEEEEEEEE","FFFFFFFFFFFF","GGGGGGGGGGGGG","HHHHHHHHHHHHHHHHHHH","IIIIIIIIIIII","JJJJJJJJJJJJJJ","KKKKKKKKKKKK","LLLLLLLLLLL","MMMMMMMMMMMM","NNNNNNNNN","OOOOOOOOOO","PPPPPPPP","QQQQQQ","RRRRRRRRR","SSSSSSSSSsS"];
var cbs = ["111111111","22222222222222","33333333333","44444444","55555555555555555","666666666666666","77777777777","8888888888888888","9999999999999","11000000","10111111111111101","12222211112","1311333331111","141114","15555515","166661666666","1777777777717","1118888818","11111111999999","22200002220020"];
function setArr(argument) {

  if(argument==1)return cs;
 
  else if(argument==2)return cbs;
  else return countries;
  // body...
}

  function updatelist(argument) {

            $('#search_res').html('');
            $('#search-results').velocity("fadeOut", { duration: 100 });
            
            if(argument==0){
                 $('#search_res').append('<li ><span class="search_res_text">@SearchRes</span><a  onclick="moresearchresult(this)" class="more"></a><a class="share" ><small><span class="icon-share"  onclick="sharesearchresult(this)"></span></small></a> <a class="add"></a></li>');
               
                     
                      
            }
            else if(argument==1){
                $('#search_res').append(' <li><span class="search_res_text">#SearchRes</span><a  onclick="moresearchresult(this)" class="more"></a><a class="share"><small><span class="icon-share"></span></small></a> <a class="add"></a> </li>');
                
            }
            else if (argument==2){
                   $('#search_res').append('<li class="nonexpandable"><span class="search_res_text">Search Res Li </span><a class="share"><small><span class="icon-share"></span></small></a><a class="add"></a><a class="more"></a></li>');
            }
            $('#search-results').velocity("fadeIn", { duration: 100 });
            
            // body...
        }


/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
//autocomplete(document.getElementById("myInput"));

function addsearchresult(argument) {
  // body...
}
function sharesearchresult(argument) {
  // body...
}
function moresearchresult(a) {
  // body...
  var o=$(a);
  alert(o);
}