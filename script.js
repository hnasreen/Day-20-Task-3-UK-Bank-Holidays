var div1=document.createElement("div")
div1.className="main"

var select=document.createElement("select")
select.setAttribute("name","division")
select.id = "division"
select.className = "division"

var op1=document.createElement("option")
op1.setAttribute("value","Select a division")
op1.innerHTML="Select a division"

var op2=document.createElement("option")
op2.setAttribute("value","england-and-wales")
op2.innerHTML="England and Wales"

var op3=document.createElement("option")
op3.setAttribute("value","scotland")
op3.innerHTML="Scotland"

var op4=document.createElement("option")
op4.setAttribute("value","northern-ireland")
op4.innerHTML="Northern Ireland"

select.append(op1,op2,op3,op4)

var button=document.createElement("button")
button.addEventListener("click",getdata)
button.innerHTML="Fetch Holidays"
button.className="btn btn-dark"

div1.append(select,button)

var div2=document.createElement("div")
div2.className="main1"
var tab=document.createElement("table")
tab.id="holidaysTable"
tab.className="holidaysTable"
var thead=document.createElement("thead")
var tr=document.createElement("tr")
var th1=document.createElement("th")
th1.innerHTML="Title"
var th2=document.createElement("th")
th2.innerHTML="Date"
var tbody=document.createElement("tbody")
tbody.id="holidaysBody"

tr.append(th1,th2)
thead.append(tr)
tab.append(thead,tbody)
div2.append(tab)

document.body.append(div1,div2)



async function getdata()
{
    try {
        const response = await fetch('https://www.gov.uk/bank-holidays.json');
        const data = await response.json();
        
        const divisions = document.getElementById('division').value;
    
        const holidays = data[divisions].events;
        let holidaysText = ''; 

        const holidaysBody = document.getElementById('holidaysBody');
                holidaysBody.innerHTML = '';

        holidays.forEach(holiday => {
            const title = holiday.title;
            const date = holiday.date;
            const row = document.createElement('tr');
                    const titleCell = document.createElement('td');
                    const dateCell = document.createElement('td');

                    titleCell.textContent = title;
                    dateCell.textContent = date;

                    row.appendChild(titleCell);
                    row.appendChild(dateCell);

                    holidaysBody.appendChild(row);
        });
      } 
      
      catch (error) {
        console.error('Error fetching the data', error);
        alert('An error occurred while fetching the quote. Please try again later.');
      }
    } 