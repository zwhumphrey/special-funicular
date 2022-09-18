const generateHTML = function (teamString) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
<title>Team Portfolio</title>
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-danger">
   <h1 class="display-4 text-white text-center">My Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${teamString} 
    </div>
</div>  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>`;
};

const generateCard = function (arr) {
  let roleInfo;

  if (arr.title === 'Manager') {
    roleInfo = `Office Number: ${arr.officeNumber}`;
  } else if (arr.title === 'Engineer') {
    roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`;
  } else if (arr.title === 'Intern') {
    roleInfo = `School: ${arr.school}`;
  }

  return `
    <div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${arr.name}</h4>
            <h4 class="text-white text-center"></i> ${arr.title}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${roleInfo}</i>
            </u>
        </div>
    </div>
  </div>
`;
};

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;
