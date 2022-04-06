window.addEventListener('load', solution);

function solution() {
  
  const FullNameInput = document.getElementById('fname');
  const EmailInput = document.getElementById('email');
  const PhoneNumberInput = document.getElementById('phone');
  const AddressInput = document.getElementById('address');
  const PostalCodeInput = document.getElementById('code');


  //Forms
  const Preview = document.getElementById('infoPreview');
  const Block = document.getElementById('block')



  //Buttons
   const SubmitBtn = document.getElementById('submitBTN');
   const EditBtn = document.getElementById('editBTN');
   const ContBtn = document.getElementById('continueBTN');
   SubmitBtn.addEventListener('click', (Onclick));
   
   function Onclick()
   {
     if (!FullNameInput.value || !EmailInput.value) {
       return;
     }
    const InfoList = document.createElement('ul')
     const FullNameElement = document.createElement('li');
     const EmailElement = document.createElement('li');
     const PhoneNumberElement = document.createElement('li');  
     const AddressElement = document.createElement('li');
     const PostalCodeElement = document.createElement('li');
 
     //CONTENT
     FullNameElement.textContent = `Full Name: ${FullNameInput.value}`;
     EmailElement.textContent = `Email: ${EmailInput.value}`;
     PhoneNumberElement.textContent = `Phone Number: ${PhoneNumberInput.value}`;
     AddressElement.textContent = `Address: ${AddressInput.value}`;
     PostalCodeElement.textContent = `Postal Code: ${PostalCodeInput.value}`;
     
     
     //DOM TREE
     InfoList.appendChild(FullNameElement);
     InfoList.appendChild(EmailElement);
     InfoList.appendChild(PhoneNumberElement);
     InfoList.appendChild(AddressElement);
     InfoList.appendChild(PostalCodeElement);
     
     Preview.appendChild(InfoList);

    

     //EMPTY THE INPUT
     FullNameInput.value = '';
     EmailInput.value = '';
     PhoneNumberInput.value = '';
     AddressInput.value = '';
     PostalCodeInput.value = '';

     
     SubmitBtn.disabled = true;
     EditBtn.disabled = false;
     ContBtn.disabled = false;

     //BUTTON EDIT
      EditBtn.addEventListener('click', (e) => {
        
        FullNameInput.value = FullNameElement.textContent;
        EmailInput.value = EmailElement.textContent;
        PhoneNumberInput.value = PhoneNumberElement.textContent;
        AddressInput.value = AddressElement.textContent;
        PostalCodeInput.value = PostalCodeElement.textContent;

        while(InfoList.firstChild){
          InfoList.removeChild(InfoList.firstChild)
        }

        SubmitBtn.disabled = false;
     EditBtn.disabled = true;
     ContBtn.disabled = true;
     })

    //CONT EDIT
     ContBtn.addEventListener('click', (e)=> {
       Block.innerHTML = '';
       let h3 = document.createElement('h3');
       h3.textContent = 'Thank you for your reservation!';
       Block.appendChild(h3);
     })
    }
  }
  