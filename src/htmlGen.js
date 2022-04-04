const generateManagerCard = (manager) => {
  return `
    <div class="card">
    
        <div class="col-md-3">
        <h3>${manager.getName()}</h3>
            <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
           
            </div>
        </div>
    </div>
`;
};
const generateEngineerCard = (engineer) => {
  return `
    <div class="card">
  
    <div class="col-md-3">
    <h3>${engineer.getName()}</h3>
        <p><i class="fa-solid fa-mug-hot"></i>${engineer.getRole()}</p>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </li>
                <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
            </ul>
            </div>
           
            </div>
    </div>
`;
};
const generateInternCard = (intern) => {
  return `
    <div class="card">
 
    <div class="col-md-3">
        <h3>${intern.getName()}</h3>
            <p><i class="fa-solid fa-mug-hot"></i>${intern.getRole()}</p>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                </li>
                <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
            </ul>
            </div>
           
            </div>
    </div>
`;
};

const baseHtml = (htmlArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Document</title>
</head>
<body class="page">
  <header>
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4 heading">My Team</h1>
    </div>
    </header>
    <div id="container">
    <div class="card-deck">
    <div class="row">
    ${htmlArr.join(" ")}
    </div>
    </div>
    </div>
</body>
</html>`;

module.exports = {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
  baseHtml,
};
