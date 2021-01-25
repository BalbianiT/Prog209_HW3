let customers = [];

document.getElementById("submit").addEventListener("click", function AddCustomer()
{

  let myUL = document.getElementById("list");
  myUL.innerHTML = "";

  customers.push(document.getElementById("custname").value + " (" + document.getElementById("city").value + ", " + document.getElementById("payment").value + ")");
  
  for (let i = 0; i < customers.length ; i++)
  {
    let ul = document.createElement('ul');
    document.getElementById("list").appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = customers[i]; 
  };

});