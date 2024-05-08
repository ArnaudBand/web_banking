'use client';

import React from 'react'
import { formatAmount } from '../lib/utils';
import CountUp from 'react-countup';

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'></div>
      <div className='flex flex-col gap-6'>
        <header className='header-2'>
          Bank Accounts: {totalBanks} 
        </header>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance:
          </p>
          <p className='total-balance-amount flex-center gap-2'>
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox;
