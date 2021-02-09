const BankAccountModel 		= require('./bank.account.model');
const md5 = require('md5');
const Model = require('./model');

class UserModel extends Model {
	constructor(name=null, email=null, account="BDO"){
		super();
		this.name = name;
		this.email = email;
		this.accounts = {};
		this.createAccount(account);
	}

	async verifyLogin(req)
    {
        const query = `SELECT * FROM users WHERE users.email='${req.body.email}'`;
        const value = [];
        
        let result = await this.executeQuery(query);
		console.log(result);
        let row = result[0];
        if(row && row.password == md5(req.body.password)){
            req.session.current_user = {id: row.id, first_name: row.first_name, last_name: row.last_name};
        } 
        else{
            return false;
        }     
        return true;
    }
	
	createAccount(account){
		this.accounts[account] = new BankAccountModel();
	}

	deposit(account, amount){
		return this.accounts[account].topUp(amount);
	}

	withdraw(account, amount){
		return this.accounts[account].deduct(amount);
	}

	viewBalance(account){
		return "Balance: $" + this.accounts[account].getBalance();
	}
}

module.exports = UserModel;