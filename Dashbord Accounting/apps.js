const body = document.querySelector("body");
const modeToggle = document.querySelector(".switch");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const nav = document.querySelector("nav")
const dashboard = document.querySelector(".dashboard");

// on/off night mode and change color
modeToggle.addEventListener('click', ()=>{
    body.classList.toggle("dark")
});

//add sidebar open/close function
sidebarToggle.addEventListener('click', ()=>{
    nav.classList.toggle("close")
    dashboard.classList.toggle("close")
});

//add tripledot menu function using toogle for multiple
const panelMenu = document.querySelectorAll(".dashboard .panel .sub-panel .header .menu");
panelMenu.forEach(item=>{
    const icon = item.querySelector('i');
    //selecting menu link (edit,save,remove)
    const menuLinks = item.querySelector(".menu-link");
    
    //toggle addeventlisterner
    icon.addEventListener('click', ()=>{
        menuLinks.classList.toggle("show");
    });
});

//apexchart documentation
var options = {
    series: [{
    name: 'Income',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Expanse',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
