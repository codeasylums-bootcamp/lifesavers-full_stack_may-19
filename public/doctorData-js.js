function addDoc(){
    const name = document.getElementById("name").value ;
    const city = document.getElementById("city").value ;
    const college = document.getElementById("college").value ;
    const age = document.getElementById("age").value ;
    const gender = document.getElementById("gender").value ;
    const degree = document.getElementById("degree").value ;
    const experience = document.getElementById("experience").value ;
    const speciality = document.getElementById("speciality").value ;
    const clinic = document.getElementById("clinic").value ;
    const licenceno = document.getElementById("licenceno").value ;
    const description = document.getElementById("description").value ;
    const contact = document.getElementById("contact").value ;
    const email = document.getElementById("email").value ;
    const password = document.getElementById("password").value ;
    axios.post('http://localhost:3000/doctors', {
          name : name ,
          city : city ,
          college : college ,
          age : age ,
          gender : gender ,
          degree : degree ,
          experience : experience ,
          speciality : speciality ,
          clinic : clinic ,
          medical_license_number : licenceno ,
          description : description ,
          contact : contact ,
          email : email ,
          password : password 
      }, {headers: {
        'Content-Type': 'application/json'
    }})
      .then(function (response) {
        console.log(response) ;
      })
      .catch(function (error) {
        console.log(error);
      });
}