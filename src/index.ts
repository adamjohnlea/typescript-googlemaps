import { User } from "./classes/User";
import { Company } from "./classes/Company";
import { CustomMap } from "./classes/CustomMap";

const newMap = new CustomMap("map");
const user = new User();
const company = new Company();

newMap.addMarker(user);
newMap.addMarker(company);