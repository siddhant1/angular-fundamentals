interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children?: Child[];
}

interface Child {
  name: string;
  age: number;
}

export { Passenger, Child };
