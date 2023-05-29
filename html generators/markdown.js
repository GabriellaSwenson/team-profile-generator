const generatePage = (page) => {
  const generateManager = (manager) => {
    return `
                        <div class="card m-5 shadow p-0" style="width:300px">
                            <div class="card-header bg-dark text-white">
                                <h3>${promptManager.manager()}</h3>
                                <h4>
                                <i class="fas fa-user-graduate pr-3"></i>${promptManager.getManager()}
                                </h4>
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">ID:</span> ${promptManager.Id()}</li>
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">Email:</span><a href="mailto:${promptManager.emailManager()}">${promptManager.emailManager()}</a>
                                    </li>
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">School:</span>${promptManager.officeNumber()}
                                    </li>
                                </ul>
                            </div>
                        </div>
            `;
  };
};

const generateEngineer = (engineer) => {
  return `
                    <div class="card m-5 shadow p-0" style="width:300px">
                        <div class="card-header bg-dark text-white">
                            <h3>${promptEngineer.engineer()}</h3>
                            <h4>
                            <i class="fas fa-user-graduate pr-3"></i>${promptEngineer.getEngineer()}
                            </h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span class="font-weight-bold">ID:</span> ${promptEngineer.Id()}</li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">Email:</span><a href="mailto:${promptEngineer.emailEngineer()}">${promptEngineer.emailEngineer()}</a>
                                </li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">School:</span>${promptEngineer.github()}
                                </li>
                            </ul>
                        </div>
                    </div>
        `;
};

const generateIntern = (promptIntern) => {
  return `
                  <div class="card m-5 shadow p-0" style="width:300px">
                      <div class="card-header bg-dark text-white">
                          <h3>${promptIntern.intern()}</h3>
                          <h4>
                          <i class="fas fa-user-graduate pr-3"></i>${promptIntern.getIntern()}
                          </h4>
                      </div>
                      <div class="card-body bg-light">
                          <ul class="list-group">
                              <li class="list-group-item">
                                  <span class="font-weight-bold">ID:</span> ${promptIntern.Id()}</li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">Email:</span><a href="mailto:${promptIntern.emailIntern()}">${promptIntern.emailIntern()}</a>
                              </li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">School:</span>${promptIntern.school()}
                              </li>
                          </ul>
                      </div>
                  </div>
      `;
};
