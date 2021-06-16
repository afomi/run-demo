class Company extends Jig {
  init(options) {
    this.runSchemaVersion = '1.0.0'

    expect(options.name).toBeString()

    if (options.description) {
      expect(options.description).toBeString()
    }

    this.name = options.name
    this.description = options.description;
    this.address = options.address;
    this.x = options.x;
    this.y = options.y;
    this.z = options.z;
    this.isDeleted = false;

    // the schema.org attribute is `location`,
    // but `location is reserved in Run`
    // this.geocode = options.geocode

    // this.url = options.url
    // this.image = options.image
  }

  setOwner(owner) {
    return this.owner = owner;
  }

  setAttr(field, value) {
    return this[field] = value;
  }

  getAttr(field) {
    return this[field];
  }

  // Company accepts Recc
  redeem(recommendation) {
    // recognize new, Recommended user
    // apply Recc discounts // currently done manually
    // pay Recommender

    // recommendation.converted = true
  }
}

class Post extends Jig {
  init(options) {
    // this.runSchemaVersion = '1.0.0'

    // expect(options.title).toBeString()

    // if (options.body) {
    //   expect(options.body).toBeString()
    // }
    this.title = options.title
    this.body = options.body;
    this.isDeleted = false;
  }

  setOwner(owner) {
    return this.owner = owner;
  }

  setAttr(field, value) {
    return this[field] = value;
  }

  getAttr(field) {
    return this[field];
  }
}

// Post.deps = {
//   expect: Run.extra.expect
// }
// Company.deps = {
//   expect: Run.extra.expect
// }

function selectJigByLocation(jigLocation) {
  run.inventory.jigs.filter(function(e) {
    return e.location == jigLocation
  })[0]
}

function purseBalanceSuccessCallback(e) {
  var balanceElement = $("<div>");
  balanceElement.text(e);
  $("body").append(balanceElement);
}

function purseBalanceFailureCallback(e) {
  alert("⚠️ Could not obtain Purse Balance")
  debugger
}


// show the User's Purse Balance (in Satoshis)
// run.purse.balance().then(purseBalanceSuccessCallback, purseBalanceFailureCallback);
