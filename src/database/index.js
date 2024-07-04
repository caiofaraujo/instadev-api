const Sequelize = require('sequelize');
const dbConf = require('../config/db');

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConf);
    }
}

module.exports = new DataBase();