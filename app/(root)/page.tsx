import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/headerBox';
import TotalBalanceBox from '@/components/totalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "John", lastName: "Doe", email: "contact@mail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access your account information, transfer funds, and more."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3250}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 340.00}, {currentBalance: 1250.00}]}
      />
    </section>
  )
}

export default Home;