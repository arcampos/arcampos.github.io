function convert(){
    let pound = parseFloat(document.getElementById('pounds').value);
    //convertion
    let conv = pound*0.45359237;
    //output
    document.getElementById('output').textContent = pound + " pounds are " + conv.toFixed(1) + " kilos";
    }   