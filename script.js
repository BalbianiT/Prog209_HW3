let customers = [];

function clearList()
{
  let myUl = document.getElementById("list");
  myUl.innerHTML = "";
}

document.getElementById("submit").addEventListener("click", function AddCustomer()
{
  for (let i = 0; i < 1 ; i++)
  {
    customers.push(document.getElementById("custname").value + " " + document.getElementById("city").value + " " + document.getElementById("payment").value);

    let ul = document.createElement('ul');
    document.getElementById("list").appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = customers[i]; 
  };
})