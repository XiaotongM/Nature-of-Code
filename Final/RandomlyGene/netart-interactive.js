// neural network random art generator
var canvas1 = document.getElementById('netart_canvas1');
var canvas2 = document.getElementById('netart_canvas2');
var canvas3 = document.getElementById('netart_canvas3');
var canvas4 = document.getElementById('netart_canvas4');

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');

// globs
var image_resolution = 240;
var network_size = R.randi(12, 20);
var network_depth = 24 - network_size;

var color_mode = 2;
var alpha_mode = 0;

var z1 = Math.round(R.randf(-1.0, 1.0) * 1000) / 1000;
var z2 = Math.round(R.randf(-1.0, 1.0) * 1000) / 1000;

var model1 = NetArt.createModel(network_size, network_depth, color_mode);
var model2 = NetArt.createModel(network_size, network_depth, color_mode);
var model3 = NetArt.createModel(network_size, network_depth, color_mode);
var model4 = NetArt.createModel(network_size, network_depth, color_mode);
var img1;
var img2;
var img3;
var img4;

function display_image() {
  document.getElementById('netart_canvas1').width = image_resolution;
  document.getElementById('netart_canvas1').height = image_resolution;
  document.getElementById('netart_canvas2').width = image_resolution;
  document.getElementById('netart_canvas2').height = image_resolution;
  document.getElementById('netart_canvas3').width = image_resolution;
  document.getElementById('netart_canvas3').height = image_resolution;
  document.getElementById('netart_canvas4').width = image_resolution;
  document.getElementById('netart_canvas4').height = image_resolution;
  ctx1.putImageData(img1.getCanvasImage(ctx1), 0, 0);
  ctx2.putImageData(img2.getCanvasImage(ctx2), 0, 0);
  ctx3.putImageData(img3.getCanvasImage(ctx3), 0, 0);
  ctx4.putImageData(img4.getCanvasImage(ctx4), 0, 0);
}

function redraw_all() {
  img1 = NetArt.genImage(model1, image_resolution, image_resolution, z1, z2, alpha_mode);
  img2 = NetArt.genImage(model2, image_resolution, image_resolution, z1, z2, alpha_mode);
  img3 = NetArt.genImage(model3, image_resolution, image_resolution, z1, z2, alpha_mode);
  img4 = NetArt.genImage(model4, image_resolution, image_resolution, z1, z2, alpha_mode);
  display_image();
}

// main:

redraw_all();

// below are the UI controls:

$("#reinit_button").click(function() {
  model = NetArt.createModel(network_size, network_depth, color_mode);
  redraw_all();
});

$("#redraw_button").click(function() {
  redraw_all();
});

$("#save_button").click(function() {
  var fileName = "netart.png";
  document.getElementById("save_button").download = fileName;
  document.getElementById("save_button").href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
});

$(function() {
  $("#sliderResolution").slider({
    max: 1080,
    min: 100,
    step: 10,
    value: image_resolution,
    change: function(event, ui) {
      image_resolution = ui.value;
      $("#displayResolution").html("Image Size = " + image_resolution + "px");
    },
  });
});
$("#displayResolution").html("Image Size = " + image_resolution + "px");

$(function() {
  $("#sliderNetworkSize").slider({
    max: 24,
    min: 2,
    step: 1,
    value: network_size,
    change: function(event, ui) {
      network_size = ui.value;
      $("#displayNetworkSize").html("Network Size = " + network_size);
    },
  });
});
$("#displayNetworkSize").html("Network Size = " + network_size);

$(function() {
  $("#sliderNetworkDepth").slider({
    max: 24,
    min: 2,
    step: 1,
    value: network_depth,
    change: function(event, ui) {
      network_depth = ui.value;
      $("#displayNetworkDepth").html("Network Depth = " + network_depth);
    },
  });
});
$("#displayNetworkDepth").html("Network Depth = " + network_depth);

$(function() {
  $("#sliderZ1").slider({
    max: 1.0,
    min: -1.0,
    step: 0.001,
    value: z1,
    change: function(event, ui) {
      z1 = ui.value;
      $("#displayZ1").html("Z1 = " + z1);
    },
  });
});
$("#displayZ1").html("Z1 = " + z1);

$(function() {
  $("#sliderZ2").slider({
    max: 1.0,
    min: -1.0,
    step: 0.001,
    value: z2,
    change: function(event, ui) {
      z2 = ui.value;
      $("#displayZ2").html("Z2 = " + z2);
    },
  });
});
$("#displayZ2").html("Z2 = " + z2);

$(function() {
  $("#colorMode").selectmenu({
    change: function(event, data) {
      color_mode = data.item.index;
    },
  });
  $("#alphaMode").selectmenu({
    change: function(event, data) {
      alpha_mode = data.item.index;
    },
  });
});
