class Gym {
  name: string;
  city: string;
  street: string;
  zip: number;
  description: string;
  id: string;

  constructor(
    _name: string,
    _city: string,
    _street: string,
    _zip: number,
    _description: string,
    _id: string
  ) {
    this.name = _name;
    this.city = _city;
    this.street = _street;
    this.zip = _zip;
    this.description = _description;
    this.id = _id;
  }
}

export default Gym;
