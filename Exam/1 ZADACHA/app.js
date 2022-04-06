function solve() {
    const FirstName = document.getElementById('fname');
    const LastName = document.getElementById('lname');
    const BirthDate = document.getElementById('birth');
    const Position = document.getElementById('position')
    const Salary = document.getElementById('salary');
    const Email = document.getElementById('email');
    const Sum = document.getElementById('sum');

    let SalaryPerPerson = 0;

    const Button = document.getElementById('add-worker');
    const Table = document.getElementById('tbody');

    Button.addEventListener('click', (e)=>{

        e.preventDefault();

         if (FirstName.value !== '' && LastName.value !== '' 
         && BirthDate.value !== '' && Salary.value !== '') {
             
            let TableElements = document.createElement('tr');
            let FirstElement = document.createElement('td');
            let LastElement = document.createElement('td');
            let BirthElement = document.createElement('td');
            let PositionElement = document.createElement('td');
            let SalaryElement = document.createElement('td');
            let EmailElement = document.createElement('td');
            let FiredElement = document.createElement('button');
            let EditElement = document.createElement('button');
            

            SalaryPerPerson += Number(Salary.value);
            Sum.textContent = SalaryPerPerson.toFixed(2);

            let Buttons = document.createElement('td');
            FiredElement.className= 'fired';
            EditElement.className = 'edit';


            FirstElement.textContent = FirstName.value;
            LastElement.textContent = LastName.value;
            BirthElement.textContent = BirthDate.value;
            PositionElement.textContent = Position.value;
            SalaryElement.textContent = Salary.value;
            EmailElement.textContent = Email.value;
            FiredElement.textContent = 'Fired';
            EditElement.textContent = 'Edit';

            Buttons.appendChild(FiredElement);
            Buttons.appendChild(EditElement);

            TableElements.appendChild(FirstElement);
            TableElements.appendChild(LastElement);
            TableElements.appendChild(EmailElement);
            TableElements.appendChild(BirthElement);
            TableElements.appendChild(PositionElement);
            TableElements.appendChild(SalaryElement);
            TableElements.appendChild(Buttons);
            
            

            Table.appendChild(TableElements);
        
            
            EditElement.addEventListener('click', (e) => {
                
                FirstName.value = FirstElement.textContent;
                LastName.value = LastElement.textContent;
                Email.value = EmailElement.textContent;
                BirthDate.value = BirthElement.textContent;
                Position.value = PositionElement.textContent;
                Salary.value = SalaryElement.textContent;
                
                while(TableElements.firstChild){
                    TableElements.removeChild(TableElements.firstChild)
                }
                
                SalaryPerPerson -=  Number(Salary.value);
                Sum.textContent = SalaryPerPerson.toFixed(2);
            })
            
            FiredElement.addEventListener('click', (e)=>{
                
                SalaryPerPerson -=  Number(Salary.value);
                Sum.textContent = SalaryPerPerson.toFixed(2);
                
                Table.removeChild(TableElements);
            })
            FirstName.value = '';
            LastName.value = '';
            BirthDate.value = '';
            Position.value = '';
            Email.value = '';
            Salary.value = '';
            
        } 
        
    });



}
solve()