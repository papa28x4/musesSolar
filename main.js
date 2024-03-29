$(document).ready(function() {

        const pageOne =()=>{
        const menu = document.querySelector('.menu');
        const nav = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')
        const prev = document.querySelector('.left')
        const next = document.querySelector('.right')
        const placeholder = document.querySelector('.did-you-know p')
        const indicatorBox = document.querySelector('.indicators_box')
        let indicators = document.querySelectorAll('.indicator')
        indicators = Array.from(indicators)
        const funFacts = ["Solar is a safe alternative to current fossil fuels like coal, petrol and gas. Solar panels reduce both global warming and urban heat island. The production of solar energy in cities is a way to diminish our dependence on fossil fuels and mitigate global warming by lowering the emission of greenhouse gases.", "There's enough solar energy hitting the Earth every hour to meet all of humanity's power needs for an entire year. Every ounce of oil, every lump of coal, and every cubic foot of natural gas could be left in the ground if only we could capture one hour's worth of solar energy each year. That's the scale of the opportunity.", "Solar energy has been used for over 2700 years. In 700 BC, glass lenses were used to make fire by magnifying the sun’s rays. Moreover, the Greeks and Romans were the first to use passive solar designs. Buildings with south facing windows allowed the sun to heat and light indoor spaces.", "Nearly 60 years ago, the US Navy launched Vanguard-1  — the first artificial earth satellite powered by solar cells — as a response to the Soviet Sputnik. Six decades on, it's still circling our planet. The Vanguard 1 remains the oldest manmade satellite in orbit – logging more than 6 billion miles."]
        let length = funFacts.length
        let index = 0;
        placeholder.innerHTML = funFacts[index]
       
        menu.addEventListener('click', ()=>{
            nav.classList.toggle('nav-active')
            menu.classList.toggle('toggle')
            navLinks.forEach((link, index)=>{
                link.style.animation = link.style.animation? '' : `fade 0.5s ease forwards ${index / 5 + 0.5}s`
            })
        })
        
        const displayText =()=>{
            indicators[index].classList.add('active')
            placeholder.innerHTML = funFacts[index]
        }
        
        indicatorBox.addEventListener('click', e =>{
            
            if(e.target.classList.contains('indicator')){
                if(!e.target.classList.contains('active')){
                    indicators[index].classList.remove('active')
                    index = indicators.indexOf(e.target)
                    displayText()
                }
            }
        })

        next.addEventListener('click', ()=>{
            indicators[index].classList.remove('active')
            if(index === length - 1){
                index = 0
            }else{
                index++
            }
           displayText()
        })

        prev.addEventListener('click', ()=>{
            indicators[index].classList.remove('active')
            if(index === 0){
                index = length - 1
            }else{
                index --
            }
            displayText()
        })


        }
        


        const TypeWriter = function(txtElement, words, wait){
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10)
            this.type();
            this.isDeleting = false;
        }

       

        function init(){
            const txtElement = document.querySelector('.display-message h2');
            const words = ["What if you could own your own power?", "And never experience another blackout?", "Welcome to our world of possibilities", "Tell us what you need to power;", "We'll recommend what's best for you.", "Input your name below & hit calculate to proceed."];
            const wait = 1000
            new TypeWriter(txtElement, words, wait);
        }

        TypeWriter.prototype.type = function(){
            
            const current =this.wordIndex % this.words.length;
            const fulltext = this.words[current]
    
            if(this.isDeleting){
                this.txt = fulltext.substring(0, this.txt.length - 1)
            }else{
                
                this.txt = fulltext.substring(0, this.txt.length+ 1)
            }
            
            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
            
            let typeSpeed = 240
            if(this.isDeleting){
                typeSpeed /= 3;
            }
            
            if(!this.isDeleting && this.txt === fulltext){
                typeSpeed = this.wait;
                this.isDeleting = true;
            }else if(this.isDeleting && this.txt === ''){
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }
            setTimeout(()=>{
                this.type()
            }, typeSpeed)
        }
       

       
        
        if(window.location.href.includes("index.html")|| window.location.href === "https://papa28x4.github.io/musesSolar/" || window.location.href === "https://papa28x4.github.io/musesSolar/#" ){
            init()
            pageOne()
        }
         
        
       

      // document.addEventListener('DOMContentLoaded', init)
      
      
      
  // $("#name").on("focus", function() {
  //   $(this).animate(
  //     {
  //       width: "320px"
  //     },
  //     500
  //   );
  //   $("#calc").animate(
  //     {
  //       left: "+=50"
  //     },
  //     500
  //   );
  // });
  // $("#name").on("blur", function() {
  //   console.log($(this));
  //   $(this).animate(
  //     {
  //       width: "270px"
  //     },
  //     500
  //   );
  //   $("#calc").animate(
  //     {
  //       left: "-=50"
  //     },
  //     500
  //   );
  // });

  let count = 3;
  let total = 0;
  let report,
    details,
    residence,
    sunHours,
    panels,
    hourlyEnergyRequired,
    product;
  // parseFloat($(this).val()).toFixed(2)
  report = false;
  let obj = [];
  
  let ratings = {
    "LED Light Bulb": 10,
    "CFL Light Bulb": 14,
    "60W Incandescent Bulb": 60,
    "100W Incandescent Bulb": 100,
    "LCD/LED TV/DISPLAY": 90,
    "Towel Heater" : 150,
    "Electric Shaver" : 15,
    Plasma: 300,
    "CRT MONITOR": 120,
    "Game Console": 200,
    "Gaming PC": 600,
    "Desktop(minus display)": 300,
    Laptop: 60,
    "Wi-Fi Router": 6,
    Printer: 500,
    DVR: 30,
    "Cell Phone Charger": 6,
    "Cordless Phone": 3,
    "Alarm Clock Radio": 2,
    "Electric Furnace": 18000,
    "Space Heater": 1500,
    "Water Heater": 4000,
    "Central Air Conditioner": 3500,
    "Air Conditional": 1500,
    "Washing Machine": 1000,
    "Clothes Dryer": 3000,
    "Cooking Stove Top": 1500,
    "Electric Oven": 2400,
    DishWasher: 1800,
    Freezer: 100,
    Refrigerator: 400,
    "Coffee Maker": 800,
    Microwave: 1200,
    Toaster: 1200,
    "Hair Dryer": 1500,
    Iron: 1100,
    "Steam Iron" : 2500,
    Vacuum: 1400,
    "Ceiling Fan": 75,
    "Electric Kettle": 2000,
    "Electric Mower": 1500,
    "Standing Fan": 60,
    "DVD Player" : 60,
    "Projector" : 270,
    "Shredder": "220",
    "Home Sound System" : 100,
    "Pressure Cooker" : 700,
    "Rice Cooker" : 400,
    "Scanner" : 30,
    "Steriliser" : 650,
    "Table Fan" : 25,
    "Treadmill" : 1500,
    "Wall Fan" : 55,
    "Water Dispenser" : 100,
    "Water Filter" : 100,
    "Blender" : 800,
    "Fryer" : 1000,
    "Power Shower" : 9000,
    "Sewing Machine" : 80,
    "Electric Drill" : 850,
    "Fluorescnt tube" : 82,
    "Security Light" : 1000,
    "IP Camera" : 15,
    "Hand Mixer" : 250,
    "Amplifier" : 1000
  };

  let states = {
    Abia: 5,
    Adamawa: 9,
    "Akwa Ibom": 5,
    Anambra: 5.5,
    Bauchi: 8.5,
    Bayelsa: 5.5,
    Benue: 7.5,
    Borno: 11,
    "Cross River": 5,
    Delta: 4.5,
    Ebonyi: 5.5,
    Enugu: 5,
    Edo: 6,
    Ekiti: 5.5,
    Gombe: 9.5,
    Imo: 6,
    Jigawa: 9.5,
    Kaduna: 10.5,
    Kano: 10.5,
    Katsina: 11,
    Kebbi: 11,
    Kogi: 7.5,
    Kwara: 6.5,
    Lagos: 6,
    Nasarawa: 8.5,
    Niger: 9,
    Ogun: 5.5,
    Ondo: 5,
    Osun: 5,
    Oyo: 5.5,
    Plateau: 9,
    Rivers: 6,
    Sokoto: 10.5,
    Taraba: 10,
    Yobe: 9.5,
    Zamfara: 10.5,
    Abuja: 8
  };

  let formTable = document.querySelector('#formTable')

  const createRow = () => {
    count++;    
     let addRow = formTable.insertRow(count);
     addRow.innerHTML = `<tr class="removeMe" id="pleaseRemoveMe">
    <td><select id="appliance-${count}" class="appliances" required>
                  <option value="" selected hidden>Select</option>
                </select></td>
                <td><input id="qty-${count}" class="qty" value="1" min="0" max="999" type="number"></td>
                <td><input id="rating-${count}" value=0 class="watts" type=text disabled/></td>
                <td><input id="hours-${count}" class="hours" min="0" max="24" step="1" value="0" type="number"></td>
                <td> <input  id="daily-${count}" class="daily" value="0"></td>
                <td><button class="remove-row">X</button></td>
    </tr>`;

    populateList(ratings, $(".appliances"));
  };

  const populateList = (array, element) => {
    
    element.select2({
      data: Object.keys(array)
    });
  };

  populateList(states, $("#sunhours"));
  populateList(ratings, $(".appliances"));

  const recommendProduct = hourlyEnergyRequired => {
    let offer = "";
    switch (true) {
      case hourlyEnergyRequired < 1000:
        offer = "Muses 1kwh Flexible Monocrystalline Solar Panels";
        console.log("I am here 1");
        break;
      case hourlyEnergyRequired < 5000:
        offer = "Muses 2-5kwh Foldable Solar Panels";
        break;
      case hourlyEnergyRequired < 7000:
        offer = "Muses 7kwh Polycrystalline High Efficient Solar Panels";
        break;
      case hourlyEnergyRequired < 10000:
        offer = "Muses 10kwh Polycrystalline Solar Panels";
        break;
      default:
        offer = "Muses Industrial Workhorse Polycrystalline Solar Panels";
    }
    return offer;
  };

  $("#worksheet").on("change", ".appliances", function() {
   
    let sequence = this.id.split("-")[1];

    let index = Object.keys(ratings).indexOf($(this).val());
    if (index >= 0) {
      console.log(Object.values(ratings)[index]);
      console.log(`#rating-${sequence}`);
      $(`#rating-${sequence}`).val(Object.values(ratings)[index]);
    } else {
      $(`#rating-${sequence}`).val(0);
    }
  });

  $("#worksheet").on("change", "input, select", function() {
    let sequence = this.id.split("-")[1];
    // console.log(parseFloat($(`#qty-${sequence}`).val()), parseFloat($(`#rating-${sequence}`).val()),  $(`#hours-${sequence}`).val() )

    let perdevice =
      $(`#qty-${sequence}`).val() *
      $(`#rating-${sequence}`).val() *
      $(`#hours-${sequence}`).val();
    parseFloat($(`#daily-${sequence}`).val(perdevice)).toFixed(2);
    // parseFloat($('.hours').val()).toFixed(2)
  });

  $("#sunhours").on("change", function() {
    // console.log(sunhours.value)
    residence = sunhours.value;
    let index = Object.keys(states).indexOf(residence);
    if (index >= 0) {
      console.log(Object.values(states)[index]);
      $("#watts").val(Object.values(states)[index]);
      sunHours = Object.values(states)[index];
    }
  });

  $("#add-Row").on("click", function() {
    if(!report){
      createRow(ratings);
      console.log("here");
      }
  });

  $("#worksheet").on("click", ".remove-row", function() {
    $(this)
      .closest("tr")
      .remove();
      count--
  });

  document.querySelectorAll(".showResult").forEach(elem => {
    elem.addEventListener("click", function() {
      if(!report){
        if (residence !== undefined) {
          $(".appliances").each(function(index, value) {
            obj[index] = {};
            obj[index].appliances = $(this).val();
          });
  
          $(".qty").each(function(index, value) {
            obj[index].quantity = $(this).val();
          });
  
          $(".watts").each(function(index, value) {
            obj[index].rating = $(this).val();
          });
  
          $(".hours").each(function(index, value) {
            obj[index].hours = $(this).val();
          });
  
          $(".daily").each(function(index, value) {
            obj[index].consumptionPerDevice = $(this).val();
            console.log(obj);
            console.log($(this));
            total += +$(this).val() * 1.25;
            hourlyEnergyRequired = (total / sunHours).toFixed(2);
            panels = Math.ceil(hourlyEnergyRequired / 320);
            console.log(total);
          });
          product = recommendProduct(hourlyEnergyRequired);
          details = `Dear <b>${name}</b>,
                your daily energy need is <strong>${total}</strong> watts-hour (+25% tolerance). <b>${residence}</b> has an average of <b>${sunHours}</b> sun-hours. Hence, you will need <b>${panels}</b> solar panel(s) to provide an average of <b>${hourlyEnergyRequired}</b> watts per sun-hour. Armed with this information, we would like to recommend our <b>${product}</b>.`;
  
          $("#analysis").html(details);
          createDataArrays();
          $("#power-needed").html(
            '<button style="padding: 0.5rem 1rem; background: green; border-radius: 20px; outline: none; color:white;"id="viewChart" type="button">Click To View Chart</button>'
          );
          report = true;
        } else {
          
          $("#guide").html(
            '<p style="color:red; font-weight:bold; font-size:1em;">Please enter your location</p>'
          );
          setTimeout(() => {
            $("#guide").html(
              '<p style="font-weight: bold" id="guide"><span style="color:red; font-size:1.2rem;">*</span>Select your state of residence</p>'
            );
          }, 3000);
        }
      }
      
    });
  });

  let isOpen = false;

  $("#power-needed").on("click", "#viewChart", function() {
    let showChart = `<div  id="breakdown">
                <canvas id="myChart_P"></canvas>
     
                </div>
                <div  id="sunhoursByState">
                <canvas id="myChart_S"></canvas>
                </div>`;
    // $('#analysis').css({position: 'relative'});
    if (!isOpen) {
      $("#viewChart").text("Click to close Chart");
      //  $("#analysis").css({ position: "absolute", left: 447 });
      //  $("#analysis").animate(
      //    {
      //      top: "+=520"
      //    },
      //    2000
      //  );
      $("#analysis").css({ display: "none" }); /**/
      $("#charts").hide();
      setTimeout(() => {
        $("#charts").show();
        $("#charts").html(showChart);
        createCharts(
          "myChart_P",
          "pie",
          dataEntry_appliances,
          dataEntry_powerConsumption,
          "Your Power Consumption by Appliance"
        );
        createCharts(
          "myChart_S",
          "bar",
          dataEntry_states,
          dataEntry_sunhours,
          "Sun Hours by State"
        );
      }, 10);
      isOpen = true;
    } else {
      $("#charts").hide();
      //  $("#analysis").animate(
      //    {
      //      top: "-=520"
      //    },
      //    2000
      //  );
      $("#analysis").css({ display: "block" }); /**/
      $("#viewChart").text("Click to view Chart");
      isOpen = false;
    }
  });

  let dataEntry_appliances,
    dataEntry_powerConsumption,
    dataEntry_states,
    dataEntry_sunhours;

  const createDataArrays = () => {
    dataEntry_appliances = [];
    dataEntry_powerConsumption = [];
    dataEntry_states = [];
    dataEntry_sunhours = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].consumptionPerDevice != 0) {
        dataEntry_appliances.push(obj[i].appliances);
        dataEntry_powerConsumption.push(obj[i].consumptionPerDevice);
      }
    }

    for (let key in states) {
      dataEntry_states.push(key);
      dataEntry_sunhours.push(states[key]);
    }
  };
  
  let name = JSON.parse(localStorage.getItem("userData")) || "";
  $(".loading").on("click", function() {
    name = $("#name").val();
    if (name) {
      localStorage.setItem("userData", JSON.stringify(name));
      console.log(name);
      window.location.href = "calculate.html";
    } else {
      $("#name").addClass("error");
      $("#errorMessage").html(
        "<span class='errMessage' style='color: red; text-align: center;'>Please Enter Your Name<span>"
      );
    }
  });

  $("#reset").on("click", function() {
    console.log($("#analysis"));
    $("input[type=text], input[type=number]").val("0");
    $("#analysis").html("");
    $("#appliance-0").val($("#appliance-0").prop("selected"));
    $("select").val("");

    $("#analysis").css({ position: "static" });
    $("#charts").html("");
    $("#charts").hide();
    $("#power-needed").html("TOTAL POWER NEEDED");
    report = false;
    const entries = document.querySelectorAll(".removeMe");
    // entries.forEach(entry => {
    //   if ( entry.getAttribute("id") ===  "removeTest"  ) {
    //     entry.style.display = "table-row";
    //   } else {
    //     entry.style.background = "black"
    //   }
      
    // });
    document.location.reload();
  });

  let colors = [
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)"
  ];

  function createCharts(element, choice, xArray, yArray, title) {
    var ctx = document.getElementById(element).getContext("2d");
    // console.log(choice, xArray, yArray);
    var myChart = new Chart(ctx, {
      type: choice,
      type: choice,
      type: choice,
      data: {
        labels: xArray,
        datasets: [
          {
            label: title,
            data: yArray,
            backgroundColor: colors,
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
});
