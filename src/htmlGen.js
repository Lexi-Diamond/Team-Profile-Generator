const gemerateManagerCard = (manager) => {
    return `
    <div class="card">
        <h3>${manager.getName()}</h3>
            <p><i class="fa-solid fa-mug-hot"></i>${manager.gertRole()}</p>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`;
};
const gemerateManagerCard = (manager) => {
    return `
    <div class="card">
        <h3>${manager.getName()}</h3>
            <p><i class="fa-solid fa-mug-hot"></i>${manager.gertRole()}</p>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`;
};


