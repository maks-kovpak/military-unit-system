import { Subdivision } from './entities/Subdivision.ts';
import { User } from './entities/User.ts';
import { UserAccessLevel } from './lib/enums.ts';
import { Analytics } from './modules/Analytics.ts';
import { Application } from './modules/Application.ts';
import { Personnel } from './modules/Personnel.ts';

const currentUser = new User({
  id: 1033,
  firstName: 'Ivan',
  lastName: 'Pavlenko',
  accessLevel: UserAccessLevel.Admin,
  position: 'Commander',
  subdivision: new Subdivision('Main Department'),
});

const app = new Application(currentUser);

app.registerModule(Personnel);
app.registerModule(Analytics);

app.run();
