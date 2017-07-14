import { DbEntityProperty } from './db-entity-property';

export class DbEntityKey {
    properties: DbEntityProperty[] = [];

    static fromJSON(obj: Object): DbEntityKey {
        return Object.assign(new DbEntityKey(), {
            properties: obj['properties'].map(e => DbEntityProperty.fromJSON(e))
        });
    }
}
