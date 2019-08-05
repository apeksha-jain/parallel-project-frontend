import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account/new-account.component';
import { HomeComponent } from './home/home.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionsComponent } from './transactions/transactions.component';
const routes: Routes = [
	{
		path:'api/create-account',
		component:NewAccountComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'api/show-balance',
		component:ShowBalanceComponent
	},
	{
		path:'api/deposit',
		component:DepositComponent
	},
	{
		path:'api/fund-transfer',
		component:FundTransferComponent
	},
	{
		path:'api/withdraw',
		component:WithdrawComponent 
	},
	{
		path:'api/transaction',
		component:TransactionsComponent
	},
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }