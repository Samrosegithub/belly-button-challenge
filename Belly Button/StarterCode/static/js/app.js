
/* const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
;

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
}); */

// Get the sample endpoint

const sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it

d3.json(sample).then(function(data) {
  console.log(data);
});

function getData() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    d3.json(sample).then(function(data) {
        console.log(data);
    let dataset = data.names;
    dataset.forEach((sample) => {
        dropdownMenu
            .append("option")
            .text(sample)
            .property("value", sample);

      });
      charts(dataset[0])
      metadata(dataset[0])
      
    });
};

/* const sample2 = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function getData2(){
let demographic = d3.select("#selDataset");

  d3.json(sample2).then(function(data) {
  console.log(data);
  let dataset = data.metadata;
  dataset.forEach((sample2) => {
    demographic 
      append(id),
      append(ethinicity),
      append(gender),
      append(location),
      append(bbtype),
      append(wfreq)
  })}
  )}; */

getData()

function charts(id_)
{
    d3.json(sample).then(function(data) {
    let sampleset = data.samples;
    let filtersampleset = sampleset.filter(x => x.id == id_)[0];
    otu_ids = filtersampleset.otu_ids
    sample_values = filtersampleset.sample_values
    otu_labels = filtersampleset.otu_labels


    var bardata = [{
        type: 'bar',
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(s => `OTU ${s}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        orientation: 'h'
      }];
      var barlayout = {
        title: 'OTU_Barchart',
      };
      
      
      Plotly.newPlot('bar', bardata,barlayout);
      
      var bubbledata = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          color: otu_ids,
          size: sample_values,
          colorscale: "Earth"
        }
      }];
      
      var bubblelayout = {
        title: 'Marker Size and Color',
        showlegend: false,
      };
      
      Plotly.newPlot("bubble", bubbledata, bubblelayout);
    
    });
   

}

function optionChanged(x){
    charts(x)
    metadata(x)
}

function metadata(id_){
    let metadatatable = d3.select("#sample-metadata");
    // Assign the value of the dropdown menu option to a letiable
    d3.json(sample).then(function(data) {
        let metadataset = data.metadata;
        let filtermetadataset = metadataset.filter(x => x.id == id_)[0]; 
        console.log(filtermetadataset)
        metadatatable.html("" )
          for (id in filtermetadataset) {
              metadatatable.append("h6").text(id + ": " + filtermetadataset[id])
              
        }

    });
};
     
       /*  metadataset.values(metadata).forEach(sample) => { */
//             .append("option")
//             .text(sample)
//             .property("value", sample);
//         });
//       };

//       charts(dataset[0])