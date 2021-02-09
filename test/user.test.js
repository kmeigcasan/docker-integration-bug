process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');
const BankAccountModel      = require('../models/bank.account.model');
const { assert } = require('chai');

describe("BankAccount model", function(){

    it("should have a balance of 0 when you instantiate this class without specifying any balance.", function(){
        let bankAccount = new BankAccountModel();
        expect(bankAccount.getBalance()).to.equal(0);
    });

    it("should be able to deduct a balance.", function(){
        let bankAccount = new BankAccountModel(100);
        bankAccount.deduct(25);
        expect(bankAccount.getBalance()).to.equal(75);
    });

    it("should be able to top-up balance.", function(){
        let bankAccount = new BankAccountModel(100);
        bankAccount.topUp(25);
        expect(bankAccount.getBalance()).to.equal(125);
    });
});

describe("User model", function(){
    it("When a new User instance is created, a new instance of BankAccount should also be created", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        expect(user.accounts.BPI).to.be.an.instanceOf(BankAccountModel);
    });

    it("User should be able to create multiple accounts.", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        user.createAccount("BDO");
        user.createAccount("UB");
        expect(Object.keys(user.accounts)).to.have.lengthOf(3);
    });

    it("User should be able to deposit to his/her BankAccount", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        user.deposit("BPI", 50);
        expect(user.viewBalance("BPI")).to.be.equal("Balance: $50");        
    });

    it("User should be able to withdraw from his/her BankAccount if there are sufficient funds", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        user.deposit("BPI", 50);
        user.withdraw("BPI", 25);
        expect(user.viewBalance("BPI")).to.be.equal("Balance: $25");        
    });

    it("If there are insufficient funds, should message $5 deduction in balance", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        expect(user.withdraw("BPI", 25)).to.be.equal("Insufficient funds: Charging a $5 fee");        
    });

    it("User should be able to see his/her remaining balance", function(){
        let user = new UserModel("User1","user1@gmail.com","BPI");
        expect(user.viewBalance("BPI")).to.be.equal("Balance: $0");
    });
});

