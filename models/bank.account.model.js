class BankAccountModel {
	constructor(balance=0){
		this.balance = balance;
	}

	getBalance(){		
		return this.balance;
	}

	topUp(money){
		this.balance += money;
	}

	deduct(money){
		if(this.balance < money) {
			this.balance -= 5;
			return "Insufficient funds: Charging a $5 fee";
		}
		this.balance -= money;
		return "Successfully withdraw!";
	}

}

module.exports = BankAccountModel;