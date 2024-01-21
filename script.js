

$(document).ready(function() {
    
  // use custom form box style
    $('#options').select2({
    });
    
    // Hide the sidebar initially
    $('#hiddeSidebar').hide();
    // Set the initial left position of #sideIcon to 0
    $('#sideIcon').css('left', '0');
    $('#sideIcon').click(function() {
      $('#hiddeSidebar').toggle();
  
      var sidebarVisible = $('#hiddeSidebar').is(':visible');
      $('#sideIcon').css('left', sidebarVisible ? '300px' : '0');
    });

    $('#crossIcon').click(function() {
        // Hide the sidebar when clicking the crossIcon
        $('#hiddeSidebar').hide();
        // Reset the left position of #sideIcon to 0
        $('#sideIcon').css('left', '0');
      });


      // acessbility
    var clickCount = 0;
  
    $('#zoomButton').click(function() {
      clickCount++;
  
      if (clickCount === 1) {
        // First click, scale 1
        $('#section1').css('transform', 'scale(1.1)');
        $('#section2').css('transform', 'scale(1.1)');
        $('#section3').css('transform', 'scale(1.1)');
      } else if (clickCount === 2) {
        $('#section1').css('transform', 'scale(1.2)');
        $('#section2').css('transform', 'scale(1.2)');
        $('#section3').css('transform', 'scale(1.2)');
      } else if (clickCount === 3) {
        $('#section1').css('transform', 'scale(1.3)');
        $('#section2').css('transform', 'scale(1.3)');
        $('#section3').css('transform', 'scale(1.3)');
      } else if (clickCount === 4) {
        // Fourth click, set scale back to normal (1)
        $('#section1').css('transform', 'scale(1)');
        $('#section2').css('transform', 'scale(1)');
        $('#section3').css('transform', 'scale(1)');
        // Reset clickCount to restart the sequence
        clickCount = 0;
      }
    });
  });


  $(document).ready(function() {
    var clickCount = 0;
  
    $('#fontButton').click(function() {
      clickCount++;
  
      if (clickCount === 1) {
        // First click, scale 1
        $('#section1').css('transform', 'scale(0.8)');
        $('#section2').css('transform', 'scale(0.8)');
        $('#section3').css('transform', 'scale(0.9)');
      }  else if (clickCount === 2) {
        // Fourth click, set scale back to normal (1)
        $('#section1').css('transform', 'scale(1)');
        $('#section2').css('transform', 'scale(1)');
        $('#section3').css('transform', 'scale(1)');
        // Reset clickCount to restart the sequence
        clickCount = 0;
      }
    });


    $("#bwButton").click(function() {
        $("body").toggleClass("grayscale");
    });

var colorButton = document.getElementById("changeColorBtn");
    var changLinkBg = document.getElementById("changeBg");

    // Add a click event listener to the button
    colorButton.addEventListener("click", function() {
      // Toggle background color between yellow and default
      if (changLinkBg.style.backgroundColor === "gray") {
        changLinkBg.style.backgroundColor = "transparent"; // Set it back to default
      } else {
        changLinkBg.style.backgroundColor = "gray";
      }
    });


    $('#backColorChange').click(function() {
        // Toggle the 'highlight' class for sections 1, 2, and 3
        $('#section1, #midRight, #section3').toggleClass('bg-color');
        $('#midLeft, #section3').toggleClass('bg-color2');
      });
    });

let isShowError = false;
const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const input_3 = document.getElementById("input_3");
const selectedValue = input_3.getAttribute("data-value");
const tooltip_1 = document.getElementById("tooltip_1");
const tooltip_2 = document.getElementById("tooltip_2");
const tooltip_3 = document.getElementById("tooltip_3");

const numberValidataion = () => {};
const handleSubmit = (event) => {
  // event.preventDefault();
  const selectInput = document.getElementById("input_3");
  tooltip_1.style.visibility =
    input_1.value.trim() === "" ? "visible" : "hidden";
  tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
    ? "hidden"
    : "visible";
  tooltip_3.style.visibility =
    selectInput.getAttribute("data-value") == "" ? "visible" : "hidden";
  isShowError = true;
};
const handleChange = () => {
  tooltip_2.style.visibility =
    input_2.value.trim() === "" ? "visible" : "hidden";
  if (!input_2.value.match(/^05\d{8}$/) && input_2.value != "") {
    tooltip_2.innerText = "מספר הטלפון אינו תקין";
  }

  if (isShowError) {
    tooltip_1.style.visibility =
      input_1.value.trim() === "" ? "visible" : "hidden";
    tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
      ? "hidden"
      : "visible";
  }
};

const toggleDropdown = () => {
  var dropdown = document.getElementById("scrollbar-inner");
  var btn = document.getElementById("btn");
  dropdown.style.visibility =
    dropdown.style.visibility === "visible" ? "hidden" : "visible";
  btn.style.zIndex = dropdown.style.visibility === "hidden" ? "100" : "0";
};

function selectOption(option) {
  const dataValue = option.getAttribute("data-value");
  input_3.setAttribute("data-value", dataValue);
  tooltip_3.style.visibility = selectedValue != "" ? "visible" : "hidden";
  input_3.innerText = option.innerText;
  toggleDropdown();
}

