class User {
  id: string;
  name: string;
  surname: string;
  constructor(id, name, surname) {
    this.id = id
    this.name = name
  }
}
class Admin {
  id: string;
  name: string;
  surname: string;
  constructor(id, name, surname) {
    this.id = id
    this.name = name
    this.surname = surname
  }
}

class SuperAdmin extends Admin {}

// Contravariant inputs, covariant outputs
function showDashboard(user: Admin): SuperAdmin {
  return new SuperAdmin('1', 'Jina', 'JustJina')
}

function showSuperDashboard(user: SuperAdmin): Admin {
  return new SuperAdmin('1', 'Jina', 'JustJina')
}

let currentUser = new User(1, 'John', 'Garry')
let currentAdmin = new Admin(1, 'Bambi', 'Pinkman')
let currentSuperAdmin = new SuperAdmin(1, 'Bambi', 'Pinkman')

showDashboard(currentUser)
showDashboard(currentAdmin)
const h: Admin = showDashboard(currentSuperAdmin) // More specific output flows into Admin

// $ExpectError Less specific type can't flow into more specific
const v: SuperAdmin = showSuperDashboard(currentAdmin)

var p: Promise<Admin> = Promise.resolve(currentAdmin)
var p2: Promise<SuperAdmin> = Promise.resolve(currentSuperAdmin)

function getAdmin(): Promise<Admin> {
  return Promise.resolve(new Admin(1, "", ""))
}

function rankUp(user: Promise<Admin>): Promise<SuperAdmin> {
  return Promise.resolve(new SuperAdmin(1, "", ""))
}

function rankDown(user: Promise<SuperAdmin>): Promise<Admin> {
  return Promise.resolve(new SuperAdmin(1, "", ""))
}

rankUp(getAdmin())
rankDown(getAdmin())


let promisedSuperAdmin = p2
p2 = p // Error supertype doesn't flow into subtype (Promise argument is covariant)
p = promisedSuperAdmin // Ok subtype doesn't flow into supertype (Promise argument is covariant)
